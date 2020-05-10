const Node = require('./node')
const SinglyLinkedList = require('./singlylinkedlist')

function runNodeChainsExamples() {
  const first = new Node(3)

  const second = new Node(5)

  first.next = second

  const third = new Node(7)

  second.next = third

  Node.printList(first)
}

function singlyListExamples() {
  const linkedLists = new SinglyLinkedList()

  linkedLists.addFirst(new Node(3))
  linkedLists.addLast(new Node(5))
  linkedLists.addLast(new Node(7))
  linkedLists.addFirst(new Node(9))
  linkedLists.display()
  linkedLists.find(7)
}

module.exports = {
  runNodeChainsExamples,
  singlyListExamples,
}
