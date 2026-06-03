import { InboxIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow">
      <InboxIcon size={48} className="text-gray-400 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Tidak Ada Data Absensi
      </h3>
      <p className="text-gray-600 mb-6">
        Belum ada data absensi yang terdaftar. Mulai dengan menambahkan data
        baru.
      </p>
      <Link
        to="/create"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium"
      >
        Tambah Absensi Pertama
      </Link>
    </div>
  );
}
