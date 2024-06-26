export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const minute = date.getMinutes();
  const hour = date.getHours();
  const second = date.getSeconds();
  return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
};
