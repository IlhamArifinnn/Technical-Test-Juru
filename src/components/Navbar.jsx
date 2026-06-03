import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <Link to="/" className="text-2xl font-bold">
              Attendance Admin
            </Link>
          </div>
          <div className="flex gap-4">
            <Link
              to="/"
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/create"
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium bg-blue-700"
            >
              + Add Attendance
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
