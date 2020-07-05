export class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

const stringify = node => {
  if (node === null) {
    return 'null'
  }

  return `${node.data} -> ${stringify(node.next)}`
}

export default stringify
