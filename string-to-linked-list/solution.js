export class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }
}

const parse = str => {
  if (str === 'null') {
    return null
  }

  let list = new LinkedList()

  str
    .replace(' -> null', '')
    .split(' -> ')
    .forEach(value => list.append(+value))

  return list.head
}

export default parse
