export const formatTime = (startTime, endTime) => {
  const start = startTime ? startTime.substring(0, 5) : "";
  const end = endTime ? endTime.substring(0, 5) : "";
  return `${start} - ${end}`;
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

export const formatDateYear = (dateString) => {
  const options = { month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

export const formatYear = (dateString) => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

export function formatDate(dateString, lang) {
  const date = new Date(dateString);

  const locales = {
    en: "en-US",
    sq: "sq-AL", // ✅ full locale code for Albanian
    sr: "sr-RS", // Serbian (Cyrillic in Serbia)
  };

  return new Intl.DateTimeFormat(locales[lang] || "en-US", {
    year: "numeric",
    month: "long",
  }).format(date);
}

// utils/utils.js
export function getLanguageLabel(code) {
  switch (code) {
    case "sq":
      return "Albanian";
    case "en":
      return "English";
    case "sr":
      return "Serbian";
    default:
      return "Unknown";
  }
}
export const formatTimeString = (timeStr) => timeStr.slice(0, 5);

export function getDayAndMonth(dateStr) {
  const months = {
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    sq: [
      "Janar",
      "Shkurt",
      "Mars",
      "Prill",
      "Maj",
      "Qershor",
      "Korrik",
      "Gusht",
      "Shtator",
      "Tetor",
      "Nëntor",
      "Dhjetor",
    ],
    sr: [
      "Januar",
      "Februar",
      "Mart",
      "April",
      "Maj",
      "Jun",
      "Jul",
      "Avgust",
      "Septembar",
      "Oktobar",
      "Novembar",
      "Decembar",
    ],
  };
  const dateObj = new Date(dateStr);
  const day = dateObj.getUTCDate();
  const monthIndex = dateObj.getUTCMonth(); // 0-11

  return {
    day,
    month: {
      en: months.en[monthIndex],
      sq: months.sq[monthIndex],
      sr: months.sr[monthIndex],
    },
  };
}

export function formatDateInLanguages(dateStr) {
  const date = new Date(dateStr);
  const options = { year: "numeric", month: "long", day: "numeric" };

  return {
    sq: new Intl.DateTimeFormat("sq-AL", options).format(date),
    en: new Intl.DateTimeFormat("en-US", options).format(date),
    sr: new Intl.DateTimeFormat("sr-RS", options).format(date),
  };
}
