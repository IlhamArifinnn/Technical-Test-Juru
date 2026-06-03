import { useNavigate } from "react-router-dom";
import AttendanceForm from "../components/AttendanceForm";
import { addAttendance } from "../utils/localStorage";

export default function CreateAttendance() {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    addAttendance(formData);
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Tambah Data Absensi
        </h1>
        <p className="text-gray-600 mt-2">
          Masukkan data absensi karyawan baru
        </p>
      </div>

      <AttendanceForm onSubmit={handleSubmit} />
    </div>
  );
}
