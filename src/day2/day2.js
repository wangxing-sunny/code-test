export function traversal(linkedList, callback, initial) {
  let node = linkedList.head;
  let value = initial;
  while (node) {
    value = callback(value, node.value);
    node = node.next;
  }
  return value;
}
