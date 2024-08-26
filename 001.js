class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const new_node = new Node(value);
    this.head = new_node;
    this.tail = this.head;
  }

  getHead() {
    if (this.head === null) {
      console.log("Head points to null")
      return null;
    }
    else {
      console.log(`Head points to ${this.head.value}`)
      return this.head.value;
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail points to null")
    }
    else {
      console.log(`Tail points to ${this.head.value}`)
      return this.tail.value;
    }
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const new_node = new Node(value);
    if (!this.head) {
      this.head = new_node;
      this.tail = this.head;
    }

    else {
      this.tail.next = new_node;
      this.tail = new_node;
    }
  }

  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      // FOR EVEN AMOUNT OF ITEMS FAST !== NULL IS CONSIDERED
      // FOR ODD AMOUNT OF ITEMS FAST.NEXT !== NULL IS CONSIDERED
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value)
      temp = temp.next;
    }
  }
}

module.exports = LinkedList;