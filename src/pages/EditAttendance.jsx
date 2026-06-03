import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AttendanceForm from "../components/AttendanceForm";
import { getAttendanceById, updateAttendance } from "../utils/localStorage";

export default function EditAttendance() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [attendanceData, setAttendanceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = getAttendanceById(parseInt(id));
    if (data) {
      setAttendanceData(data);
    } else {
      navigate("/");
    }
    setLoading(false);
  }, [id, navigate]);

  const handleSubmit = (formData) => {
    updateAttendance(parseInt(id), formData);
    navigate("/");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!attendanceData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">Data tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Edit Data Absensi</h1>
        <p className="text-gray-600 mt-2">
          Perbarui data absensi untuk {attendanceData.nama}
        </p>
      </div>

      <AttendanceForm initialData={attendanceData} onSubmit={handleSubmit} />
    </div>
  );
}
