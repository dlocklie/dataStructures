// piece of data - val
// refrence to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node('What"s');
// first.next = new Node('up');
// first.next.next = new Node('Drew?');

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;

  }
  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push('hello');
list.push('goodbye')