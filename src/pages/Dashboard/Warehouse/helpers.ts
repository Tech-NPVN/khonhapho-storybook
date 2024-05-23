export const dateToStringDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${day}/${month}/${year}`;
};

export const dateToStringTime = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

export const getTimeAgo = (date: Date): string => {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - date.getTime();
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const monthDifference = Math.floor(daysDifference / 30);
  const yearDifference = Math.floor(monthDifference / 12);
  if (yearDifference > 10)
    return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
  if (yearDifference > 1) {
    return `${yearDifference} năm trước`;
  }
  if (monthDifference > 1) {
    return `${monthDifference} tháng trước`;
  } else if (daysDifference > 1) {
    return `${daysDifference} ngày trước`;
  } else if (hoursDifference > 1) {
    return `${hoursDifference} giờ trước`;
  } else if (minutesDifference > 1) {
    return `${minutesDifference} phút trước`;
  } else {
    return `${secondsDifference} giây trước`;
  }
};
