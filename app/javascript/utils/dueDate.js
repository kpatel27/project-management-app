import moment from "moment";

const dueDate = (card) => {
  return card ? moment(card.due_date).format("MMM D [at] LT") : "";
};

const dueClass = (card) => {
  if (!card) return "";
  const diff = moment(card.due_date).diff(new Date(), "days");
  if (card.completed) {
    return "completed";
  } else if (diff < -1) {
    return "overdue";
  } else if (diff < 0) {
    return "overdue-recent";
  } else if (diff < 1) {
    return "due-soon";
  } else {
    return "due-later";
  }
};

export { dueDate, dueClass };
