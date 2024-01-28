# Determine if a word is a palindrome

def is_palindrome(word):
    if len(word) < 2:
        # base case
        return True
    else:
        # recursive case
        if word[0] != word[-1]:
            return False
        else:
            return is_palindrome(word[1:-1])


# Testcases
print(is_palindrome("a"))
print(is_palindrome("aa"))
print(is_palindrome("is"))
print(is_palindrome("madamimadam"))
print(is_palindrome("abcdefdcba"))
