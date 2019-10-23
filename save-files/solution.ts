const save = (sizes: number[], hdSpace: number) => {
  let spaceFilled = 0;
  let numFilesSaved = 0;

  for (let size of sizes) {
    if (spaceFilled + size > hdSpace) {
      return numFilesSaved;
    } else {
      spaceFilled += size;
      numFilesSaved++;
    }
  }

  return numFilesSaved;
};

export default save;
