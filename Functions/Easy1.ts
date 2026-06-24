function OddEvenSum(n: number): void {
    let odd: number = 0;
    let even: number = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            even += i;
        } else {
            odd += i;
        }
    }

    console.log("Odd Sum =", odd);
    console.log("Even Sum =", even);
}

OddEvenSum(10);