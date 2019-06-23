const nextItem = (list, item) => {
  const index = list.indexOf(item);

  return index > -1 ? list[index + 1] : undefined;
};

export default nextItem;
