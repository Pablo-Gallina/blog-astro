const formatDate = (date: string | Date): string => {
  const dateParsed = new Date(date);

  return Intl.DateTimeFormat("es-GT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(dateParsed);
};

export { formatDate };
