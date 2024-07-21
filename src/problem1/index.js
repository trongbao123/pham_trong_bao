const sum_to_n_a = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum;
};

const sum_to_n_b = (n) => {
    if (n === 1) return 1;
    return n + sum_to_n_b(n - 1);
};

const sum_to_n_c = (n) => n * (n + 1) / 2;


const inputN = document.getElementById('input-n');
const functionSelect = document.getElementById('function-select');
const calculateButton = document.getElementById('calculate-button');
const resultDiv = document.getElementById('result');

functionSelect.addEventListener('change', () => {
    resultDiv.textContent = 0;
    inputN.value = 0;
});

const functions = {
    sum_to_n_a,
    sum_to_n_b,
    sum_to_n_c
};

calculateButton.addEventListener('click', () => {
    const n = parseInt(inputN.value);
    const selectedFunction = functionSelect.value;

    const result = functions[selectedFunction](n);

    resultDiv.textContent = `Result: ${result}`;
});