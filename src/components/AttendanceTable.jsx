import { Trash2, Edit2 } from "lucide-react";

export default function AttendanceTable({
  data,
  onEdit,
  onDelete,
  onSort,
  sortBy,
  sortOrder,
}) {
  const getSortIcon = (column) => {
    if (sortBy !== column) return "↕";
    return sortOrder === "asc" ? "↑" : "↓";
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      onSort(column, sortOrder === "asc" ? "desc" : "asc");
    } else {
      onSort(column, "asc");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th
              className="px-6 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSort("nama")}
            >
              Nama {getSortIcon("nama")}
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Alamat
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Jenis Kelamin
            </th>
            <th
              className="px-6 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSort("tanggalAbsen")}
            >
              Tanggal Absen {getSortIcon("tanggalAbsen")}
            </th>
            <th
              className="px-6 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSort("jamMasuk")}
            >
              Jam Masuk {getSortIcon("jamMasuk")}
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Jam Keluar
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-3 text-sm text-gray-900">{row.nama}</td>
              <td className="px-6 py-3 text-sm text-gray-900">{row.alamat}</td>
              <td className="px-6 py-3 text-sm text-gray-900">
                {row.jenisKelamin}
              </td>
              <td className="px-6 py-3 text-sm text-gray-900">
                {row.tanggalAbsen}
              </td>
              <td className="px-6 py-3 text-sm text-gray-900">
                {row.jamMasuk}
              </td>
              <td className="px-6 py-3 text-sm text-gray-900">
                {row.jamKeluar}
              </td>
              <td className="px-6 py-3 text-sm">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(row.id)}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(row.id)}
                    className="text-red-600 hover:text-red-800 flex items-center gap-1"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
