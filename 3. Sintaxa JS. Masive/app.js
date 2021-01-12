document.addEventListener("DOMContentLoaded", () => {
    const numbers = [23, 45, 2, 0, 0, 3];
    console.log(numbers);

    numbers.push(7);

    console.log(numbers);

    numbers.unshift(123);

    console.log(numbers);

    numbers.splice(3, 2);

    console.log(numbers);
});