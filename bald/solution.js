const bald = head => {
  const shavedHead = head.replace(/\//g, '-');
  const numStrayHairs = (head.match(/\//g) || []).length;

  switch (numStrayHairs) {
    case 0: return [shavedHead, 'Clean!'];
    case 1: return [shavedHead, 'Unicorn!'];
    case 2: return [shavedHead, 'Homer!'];
    case 3: case 4: case 5: return [shavedHead, 'Careless!'];
    default: return [shavedHead, 'Hobo!'];
  }
};

export default bald;