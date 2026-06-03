const STORAGE_KEY = "attendance_data";

export const getAttendanceData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [];
  }
};

export const saveAttendanceData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("Error saving to localStorage:", error);
    return false;
  }
};

export const addAttendance = (attendance) => {
  const data = getAttendanceData();
  const newAttendance = {
    id: data.length > 0 ? Math.max(...data.map((a) => a.id)) + 1 : 1,
    ...attendance,
  };
  data.push(newAttendance);
  saveAttendanceData(data);
  return newAttendance;
};

export const updateAttendance = (id, updatedAttendance) => {
  const data = getAttendanceData();
  const index = data.findIndex((a) => a.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...updatedAttendance };
    saveAttendanceData(data);
    return data[index];
  }
  return null;
};

export const deleteAttendance = (id) => {
  const data = getAttendanceData();
  const filteredData = data.filter((a) => a.id !== id);
  saveAttendanceData(filteredData);
  return true;
};

export const getAttendanceById = (id) => {
  const data = getAttendanceData();
  return data.find((a) => a.id === id) || null;
};
