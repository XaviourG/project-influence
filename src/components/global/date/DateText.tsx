interface DateTextProps {
  date?: Date | null;
}

enum MONTHS {
  January = 0,
  Febuary = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11,
}

const dateEndBit = (day: number) => {
  let endBit = "th";
  switch (day) {
    case 1:
      endBit = "st";
      break;
    case 2:
      endBit = "nd";
      break;
  }
  return endBit;
};

const generateDateString = (date?: Date | null) => {
  if (!date) return "";
  const safeDate = new Date(date);
  const day = safeDate.getDate();
  const month = safeDate.getMonth();
  const year = safeDate.getFullYear();
  return `${MONTHS[month]} ${day}${dateEndBit(day)}, ${year}`;
};

const DateText = ({ date }: DateTextProps) => {
  return <p className="date-text">{generateDateString(date)}</p>;
};

export default DateText;
