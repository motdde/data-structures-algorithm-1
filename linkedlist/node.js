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

module.exports = Node
