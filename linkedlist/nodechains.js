class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  static printList(node) {
    while (node != null) {
      console.log(node.value)
      node = node.next
    }
  }
}

function runNodeChains() {
  const first = new Node(3)

  const second = new Node(5)

  first.next = second

  const third = new Node(7)

  second.next = third

  Node.printList(first)
}

module.exports = runNodeChains
