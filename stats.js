// Small statistics helpers.

export function sum(numbers) {
    let total = 0;
    for (const n of numbers) total += n;
    return total;
}

export function average(numbers) {
    if (numbers.length === 0) return 0;
    return sum(numbers) / numbers.length;
}
