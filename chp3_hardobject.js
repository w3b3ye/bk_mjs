'use strict'

const createAccount = (balance) => {
    return Object.freeze({
        deposit: amount => {
            balance += amount
        },
        withdraw: amount => {
            balance -= amount
        },
        getBalance: () => balance
    })
}

const harrysAccount = createAccount(500)
const sallysAccount = createAccount(1000)
sallysAccount.deposit(500)
harrysAccount.withdraw(100)
let harrysBalance = harrysAccount.getBalance()
let sallysBalance = sallysAccount.getBalance()
console.log('harrysBalance:', harrysBalance) // 600
console.log('sallysBalance:', sallysBalance) // 1500