const ListFactory = () => {
  return {
    head: null,
    appendNode(value) {
      if (!this.head) {
        this.head = Node(value);
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = Node(value);
        current.next.prev = current;
      }
    },
    prependNode(value) {
      if (!this.head) {
        this.head = Node(value);
      } else {
        let current = this.head;
        while (current.prev) {
          current = current.prev;
        }
        current.prev = Node(value);
        current.prev.next = current;
        this.head = current.prev;
      }
    },
    size() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    },
    printHead() {
      return this.head;
    },
    printTail() {
      if (!this.head) return null;
      else {
        let tail = this.head;
        while (tail.next) {
          tail = tail.next;
        }
        return tail;
      }
    },
    at(index) {
      let count = 0;
      if (index == 0) return this.head;
      let current = this.head;
      while (current.next) {
        current = current.next;
        count++;
        if (count == index) return current;
      }
    },
    pop() {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.prev.next = null;
    },
    contains(value) {
      let current = this.head;
      while (current.next) {
        current = current.next;
        if (current.value == value) return true;
      }
      return false;
    },
    find(value) {
      let count = 0;
      let current = this.head;
      while (current.next) {
        current = current.next;
        count++;
        if (current.value == value) return count;
      }
      return null;
    },
    toString() {
      let string = `( ${this.head.value} )`;
      let current = this.head;
      while (current.next) {
        string += ` <-> ( ${current.next.value} )`;
        current = current.next;
      }
      return string + " -> ( Null )";
    },
    insertAt(value, index) {
      let count = 0;
      let current = this.head;
      let temp = current;
      if (index == 0) {
        this.head = Node(value);
        this.head.next = current;
        this.head.next.prev = this.head;
      }
      while (current.next) {
        current = current.next;
        count++;
        if (count == index) {
          temp = current.prev;
          current.prev = Node(value);
          current.prev.next = current;
          current.prev.prev = temp;
          current.prev.prev.next = current.prev;
        }
      }
    },
    removeAt(index) {
      let count = 0;
      let current = this.head;
      if (index == 0) {
        this.head = current.next;
        this.head.prev = null;
      }
      while (current.next) {
        current = current.next;
        count++;
        if (count == index) {
          current.prev.next = current.next;
          if (current.next) {
            current.next.prev = current.prev;
          }
        }
      }
    },
  };
};

const Node = (value) => {
  return {
    value: value,
    next: null,
    prev: null,
  };
};

const List = ListFactory();

List.prependNode(2);
List.prependNode(23);
List.prependNode(234);
List.prependNode(2345);
List.appendNode(1);
List.pop();
List.insertAt(23456, 3);
List.removeAt(4);
console.log(List.size(), "size");
console.log(List.at(2), "at");
console.log(List.printHead(), "head");
console.log(List.printTail(), "tail");
console.log(List.contains(23), "contains");
console.log(List.find(23), "find");
console.log(List.toString(), "string");

console.log(List);
