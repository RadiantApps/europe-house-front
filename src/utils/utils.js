export const formatTime = (startTime, endTime) => {
    const start = startTime ? startTime.substring(0, 5) : "";
    const end = endTime ? endTime.substring(0, 5) : "";
    return `${start} - ${end}`;
  };

  // Format date display
export const formatDate = (day) => {
    return day ? day.toString() : "";
  };

  // Get month name
export const getMonthName = (month) => {
    const months = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ];
    return months[month - 1] || "";
  };