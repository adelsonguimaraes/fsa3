let i = 10
i = 20
i = i + 10 / 4 * 1 % 2

console.log(i)

i = 'teste'

const k = 10

console.log(i, k)

// arrow function não pode usar this
const soma = (num1, num2) => num1 + num2
const subtracao = (num1, num2) => num1-num2
const operacao = (op, num1, num2) => op(num1, num2)

console.log('Soma', operacao(soma, 10, 20), operacao(subtracao, 30, 10))

const obj = {
    key1: 'valor1'
}

console.log(obj.key1)

const arr = [1,2,3]
const print = num => console.log('Num:', num)
const dobro = num => num*2
arr.forEach(print)
arr.map(dobro).forEach(print)
console.log(arr.reduce((n1,n2) => n1+n2, 0))

