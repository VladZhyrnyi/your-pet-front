const formatDate = (date) => {
  return new Date(date).toLocaleDateString().replaceAll(".", "/");
};
export default formatDate;