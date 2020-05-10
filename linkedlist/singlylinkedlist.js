class SinglyLinkedList {
  head = null
  tail = null
  count = 0

  addFirst(node) {
    const currentNode = this.head
    this.head = node
    this.count++
    if (this.count == 1) {
      this.tail = node
    } else {
      node.next = currentNode
    }
  }

  addLast(node) {
    const currentNode = this.tail
    currentNode.next = node
    this.tail = node
    this.count++
  }

  find(item) {
    let currentNode = this.head
    while (!(currentNode.value != item)) {
      currentNode = currentNode.next
    }
    console.log(currentNode)
  }

  display() {
    let currentNode = this.head
    console.log(currentNode.value)
    while (!(currentNode.next == null)) {
      console.log(currentNode.next.value)
      currentNode = currentNode.next
    }
  }
}

module.exports = SinglyLinkedList
