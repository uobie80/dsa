# Recursive solution to fibonnaci problem

def fib(n):
    # base case
    if n == 1 or n == 2:
        return 1
    # recursive case
    return fib(n - 1) + fib(n - 2)


# testcases
print(fib(5))
print(fib(36))
