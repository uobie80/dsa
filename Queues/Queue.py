"""
A Queue is a FIFO (First in first out) data structure.
Useful for print jobs, scheduling tasks, messaging, etc.
Queue class using array

Time: O(1) for insertion and removal of items
Space: O(n)
"""


class Queue:
    """
    A simple implementation of a FIFO queue.
    """

    def __init__(self):
        """ 
        Initialize the queue.
        """
        self._items = []

    def __len__(self):
        """
        Return the number of items in the queue.
        """
        return len(self._items)

    def __iter__(self):
        """
        Create an iterator for the queue.
        """
        for item in self._items:
            yield item

    def __str__(self):
        """
        Return a string representation of the queue.
        """
        return str(self._items)

    def enqueue(self, item):
        """
        Add item to the queue.
        """
        self._items.append(item)

    def dequeue(self):
        """
        Remove and return the least recently inserted item.
        """
        return self._items.pop(0)

    def clear(self):
        """
        Remove all items from the queue.
        """
        self._items = []


# Tests

queue = Queue()
print(len(queue))
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
print(len(queue))

# using generator function to loop through items in queue
for item in queue:
    print(item)

queue.dequeue()
print(len(queue))

for item in queue:
    print(item)
