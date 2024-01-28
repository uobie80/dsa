public class Collatz {
    public static void collatz(int n) {
        System.out.println(n + " ");
        // base case
        if (n == 1)
            return;
        // recursive case
        else if (n % 2 == 0)
            collatz(n / 2);
        else
            collatz(3 * n + 1);
    }

    public static void main(String[] args) {
        // testcase
        collatz(78);

    }
}
