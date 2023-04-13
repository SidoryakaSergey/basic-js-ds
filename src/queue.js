const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.q = null;
  }

  getUnderlyingList() {
    return this.q;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (!this.q) {
      this.q = node;
    } else {
      let current = this.q;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  dequeue() {
    if (!this.q) {
      return null;
    }
    const del = this.q.value;
    this.q = this.q.next;
    return del;
  }
}

module.exports = {
  Queue,
};
