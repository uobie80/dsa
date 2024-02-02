# Linear search is used to find a target value within a collection of elements.

# Time: O(n)
# Space: O(1)

def linear_search(arr, target):

    for idx in range(len(arr)):
        if arr[idx] == target:
            return idx
    return False


# testcases
print(linear_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7))
print(linear_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 40))
