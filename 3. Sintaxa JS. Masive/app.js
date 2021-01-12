document.addEventListener("DOMContentLoaded", () => {
    const numbers = [23, 45, 2, 0, 0, 3];
    console.log(numbers);

    numbers.push(7);

    console.log(numbers);

    numbers.unshift(123);

    console.log(numbers);

    numbers.splice(3, 2);

    console.log(numbers);

    console.log("for");
    for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index]);
    }

    console.log("for of");
    for (const element of numbers) {
        console.log(element);
    }
    console.log("for in");
    for (const key in numbers) {
        if (Object.hasOwnProperty.call(numbers, key)) {
            console.log(numbers[key]); 
        }
    }
    console.log("foreach");
    numbers.forEach(element => {
        console.log(element);
    });
});