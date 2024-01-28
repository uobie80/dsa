public class Palindrome {

    public static boolean isPalindrome(String word) {
        // Base case
        if (word.length() <= 1) {
            return true;
        }

        // recursive case
        char start = word.charAt(0);
        char end = word.charAt(word.length() - 1);

        if (start != end) {
            return false;
        }
        String remaining_characters = word.substring(1, word.length() - 1);
        return isPalindrome(remaining_characters);
    }

    public static void main(String[] args) {
        // testcases
        String word = "a";
        boolean isPalindrome = isPalindrome(word);
        System.out.println(word + " is a palindorme: " + isPalindrome);

        String word2 = "madam";
        boolean isPalindrome2 = isPalindrome(word2);
        System.out.println(word2 + " is a palindorme: " + isPalindrome2);

        String word3 = "abscdenbeus";
        boolean isPalindrome3 = isPalindrome(word3);
        System.out.println(word3 + " is a palindorme: " + isPalindrome3);
    }
}