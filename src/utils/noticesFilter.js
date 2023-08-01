export const noticesFilter = (items, favorite) => {
  return items.filter(item => favorite.includes(item._id));
};
