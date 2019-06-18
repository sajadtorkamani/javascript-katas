export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const stringify = node => {
  if (node === null) {
    return 'null';
  }

  let current = node;
  let strings = [];

  while (current !== null) {
    strings.push(current.data);
    current = current.next;
  }

  return [...strings, 'null'].join(' -> ');
};

export default stringify;
