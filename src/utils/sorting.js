export const sortData = (data, sortBy, sortOrder = "asc") => {
  const sorted = [...data];

  sorted.sort((a, b) => {
    let aValue, bValue;

    switch (sortBy) {
      case "nama":
        aValue = a.nama.toLowerCase();
        bValue = b.nama.toLowerCase();
        break;
      case "tanggalAbsen":
        aValue = new Date(a.tanggalAbsen);
        bValue = new Date(b.tanggalAbsen);
        break;
      case "jamMasuk":
        aValue = a.jamMasuk;
        bValue = b.jamMasuk;
        break;
      default:
        return 0;
    }

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return sorted;
};
