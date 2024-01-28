def quicksort(num_list):
    """
    Recursive O(n log(n)) sorting algorithm
    Takes a list of numbers
    Returns sorted list of same numbers
    """
    if num_list == []:
        # base case
        return num_list
    else:
        # recursive case
        pivot = num_list[0]
        lesser = [num for num in num_list if num < pivot]
        pivots = [num for num in num_list if num == pivot]
        greater = [num for num in num_list if num > pivot]
        return quicksort(lesser) + pivots + quicksort(greater)


print(quicksort([4, 5, 3, 1]))
