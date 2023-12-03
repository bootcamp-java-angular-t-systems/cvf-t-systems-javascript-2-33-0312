
var appearances = [0,0,0,0,0,0,0];
var attemptsLeft = 36000;
var totalSum = 0;
var result = 0;
var throwDice = () =>  parseInt(Math.random() * 6) + 1;


while (attemptsLeft) {
    result = throwDice();
    totalSum += result;
    appearances[result]++;
    attemptsLeft--;
}

for (let i = 1; i < appearances.length; i++) {
    console.log(`El valor  ${i}  ha salido ${appearances[i]} veces`);
};
