"""
A Stack is a LIFO (Last in first out) data structure.
Stack class using array

Time: O(1) for insertion and removal of items
Space: O(n)
"""


class Stack:
    """
    A simple implementation of a LIFO stack.
    """

    def __init__(self):
        """ 
        Initialize the stack.
        """
        self._items = []

    def __len__(self):
        """
        Return the number of items in the stack.
        """
        return len(self._items)

    def __iter__(self):
        """
        Create an iterator for the stack.
        """
        for item in self._items:
            yield item

    def __str__(self):
        """
        Return a string representation of the stack.
        """
        return str(self._items)

    def put(self, item):
        """
        Add item to the stack.
        """
        self._items.append(item)

    def pop(self):
        """
        Remove and return the most recently inserted item.
        """
        return self._items.pop()

    def clear(self):
        """
        Remove all items from the stack.
        """
        self._items = []


# Tests

stack = Stack()
print(len(stack))
stack.put(1)
stack.put(2)
stack.put(3)
stack.put(4)
print(len(stack))

# using generator function to loop through items in stack
for item in stack:
    print(item)

stack.pop()
print(len(stack))

for item in stack:
    print(item)
