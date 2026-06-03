export const ITEMS_PER_PAGE = 5;

export const calculatePagination = (totalItems) => {
  return Math.ceil(totalItems / ITEMS_PER_PAGE);
};

export const getPaginatedData = (data, page) => {
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  return data.slice(startIndex, endIndex);
};

export const getPageRange = (currentPage, totalPages) => {
  const delta = 2;
  const range = [];
  for (
    let i = Math.max(1, currentPage - delta);
    i <= Math.min(totalPages, currentPage + delta);
    i++
  ) {
    range.push(i);
  }
  return range;
};
