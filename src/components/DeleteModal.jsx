export default function DeleteModal({ isOpen, onConfirm, onCancel, itemName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Konfirmasi Hapus
        </h3>
        <p className="text-gray-600 mb-6">
          Apakah Anda yakin ingin menghapus data absensi untuk{" "}
          <strong>{itemName}</strong>?
        </p>
        <div className="flex gap-4">
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 font-medium"
          >
            Hapus
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 font-medium"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}
