const traverseTree = (root, callback) => {
  function walk(node) {
    if (node !== null) {
      callback(node);
      walk(node.right);
      walk(node.left);
    }
  }

  walk(root);
};

const sumTheTreeValues = root => {
  let sum = 0;

  traverseTree(root, node => {
    sum += node.value;
  });

  return sum;
};

export default sumTheTreeValues;
