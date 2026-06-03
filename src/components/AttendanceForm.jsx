import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AttendanceForm({ initialData = null, onSubmit }) {
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    jenisKelamin: "Laki-laki",
    tanggalAbsen: "",
    jamMasuk: "",
    jamKeluar: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nama.trim()) {
      newErrors.nama = "Nama harus diisi";
    } else if (formData.nama.trim().length < 3) {
      newErrors.nama = "Nama minimal 3 karakter";
    }

    if (!formData.alamat.trim()) {
      newErrors.alamat = "Alamat harus diisi";
    }

    if (!formData.tanggalAbsen) {
      newErrors.tanggalAbsen = "Tanggal absen harus diisi";
    }

    if (!formData.jamMasuk) {
      newErrors.jamMasuk = "Jam masuk harus diisi";
    }

    if (!formData.jamKeluar) {
      newErrors.jamKeluar = "Jam keluar harus diisi";
    }

    if (formData.jamMasuk && formData.jamKeluar) {
      if (formData.jamMasuk >= formData.jamKeluar) {
        newErrors.jamKeluar = "Jam keluar harus lebih besar dari jam masuk";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-lg shadow"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nama <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.nama ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Masukkan nama"
        />
        {errors.nama && (
          <p className="text-red-500 text-sm mt-1">{errors.nama}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Alamat <span className="text-red-500">*</span>
        </label>
        <textarea
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          rows="3"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.alamat ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Masukkan alamat"
        />
        {errors.alamat && (
          <p className="text-red-500 text-sm mt-1">{errors.alamat}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Jenis Kelamin <span className="text-red-500">*</span>
        </label>
        <select
          name="jenisKelamin"
          value={formData.jenisKelamin}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Laki-laki</option>
          <option>Perempuan</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tanggal Absen <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="tanggalAbsen"
          value={formData.tanggalAbsen}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.tanggalAbsen ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.tanggalAbsen && (
          <p className="text-red-500 text-sm mt-1">{errors.tanggalAbsen}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Jam Masuk <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            name="jamMasuk"
            value={formData.jamMasuk}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.jamMasuk ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.jamMasuk && (
            <p className="text-red-500 text-sm mt-1">{errors.jamMasuk}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Jam Keluar <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            name="jamKeluar"
            value={formData.jamKeluar}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.jamKeluar ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.jamKeluar && (
            <p className="text-red-500 text-sm mt-1">{errors.jamKeluar}</p>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium"
        >
          {initialData ? "Update" : "Tambah"} Absensi
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 font-medium"
        >
          Batal
        </button>
      </div>
    </form>
  );
}
