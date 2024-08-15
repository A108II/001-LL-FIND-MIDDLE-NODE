const LinkedList = require('./001');
// Test if findMiddleNode returns null on an empty list

it('returns null for an empty list', () => {
  const list = new LinkedList(3);
  list.makeEmpty();
  const result = list.findMiddleNode();
  expect(result).toBe(null);
});


// Test if findMiddleNode returns the only node for a single-element list
it('returns node for a single-element list', () => {
  const list = new LinkedList(4);
  const result = list.findMiddleNode();
  expect(result.value).toBe(4);
});

// Test if findMiddleNode returns the middle node in an odd-length list
it('returns middle node for odd-length list', () => {
  const list = new LinkedList(1);
  list.push(5);
  list.push(6);
  const result = list.findMiddleNode();
  expect(result.value).toBe(5);
});

// Test if findMiddleNode returns the second middle node in an even-length list
it('returns second middle node for even-length list', () => {
  const list = new LinkedList(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.printList();
  const head = list.getHead();
  const tail = list.getTail();
  const result = list.findMiddleNode();
  expect(head).toBe(1);
  expect(tail).toBe(4);
  expect(result.value).toBe(3);
});