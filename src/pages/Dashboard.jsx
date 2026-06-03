import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AttendanceTable from "../components/AttendanceTable";
import Pagination from "../components/Pagination";
import DeleteModal from "../components/DeleteModal";
import EmptyState from "../components/EmptyState";
import { getAttendanceData, deleteAttendance } from "../utils/localStorage";
import { sortData } from "../utils/sorting";
import { getPaginatedData, calculatePagination } from "../utils/pagination";

export default function Dashboard() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: null,
    name: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    loadAttendanceData();
  }, []);

  const loadAttendanceData = () => {
    const data = getAttendanceData();
    setAttendanceData(data);
    setCurrentPage(1);
  };

  const handleSort = (column, order) => {
    setSortBy(column);
    setSortOrder(order);
    setCurrentPage(1);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDeleteClick = (id) => {
    const item = attendanceData.find((a) => a.id === id);
    setDeleteModal({
      isOpen: true,
      id: id,
      name: item?.nama || "Unknown",
    });
  };

  const handleDeleteConfirm = () => {
    deleteAttendance(deleteModal.id);
    loadAttendanceData();
    setDeleteModal({ isOpen: false, id: null, name: "" });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Process data
  let processedData = attendanceData;
  if (sortBy) {
    processedData = sortData(processedData, sortBy, sortOrder);
  }

  const totalPages = calculatePagination(processedData.length);
  const displayData = getPaginatedData(processedData, currentPage);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard Absensi Karyawan
        </h1>
        <p className="text-gray-600 mt-2">
          Total: {attendanceData.length} data absensi
        </p>
      </div>

      {attendanceData.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <AttendanceTable
            data={displayData}
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
            onSort={handleSort}
            sortBy={sortBy}
            sortOrder={sortOrder}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteModal({ isOpen: false, id: null, name: "" })}
        itemName={deleteModal.name}
      />
    </div>
  );

  function handleEditClick(id) {
    handleEdit(id);
  }
}
