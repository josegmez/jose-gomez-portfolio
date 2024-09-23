interface DateLabelProps {
  startDate: string | Date;
  endDate: string | Date;
}

/**
 * This component is a custom date label that can be used to display a date range.
 * It accepts a start date and an end date, in string or Date format.
 * If the date is in Date format, it will be formatted to "MMM yyyy".
 *
 * @param {string | Date} startDate - The start date of the range.
 * @returns {string | Date} endDate - The end date of the range.
 */
const DateLabel = ({ startDate, endDate }: DateLabelProps) => {
  const dateFormatter = new Intl.DateTimeFormat("es-ES", {
    month: "short",
    year: "numeric",
  });

  const startDateString =
    typeof startDate === "string" ? startDate : dateFormatter.format(startDate);
  const endDateString =
    typeof endDate === "string" ? endDate : dateFormatter.format(endDate);

  return (
    <span className="text-xs bg-primary text-white py-1 px-2 rounded-sm capitalize">
      {startDateString} - {endDateString}
    </span>
  );
};

export default DateLabel;
