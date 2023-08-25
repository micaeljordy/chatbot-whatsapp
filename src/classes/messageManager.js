const confirmMessageService = require('../services/confirmMessageService.js')
class MessageManager{
    constructor() {
        this.alreadyAnsweredNumbers = new Array()
        this.phoneBook = new Map()
    }

    registerNameRoutine(message){
    
        if(!this.alreadyAnsweredNumbers.includes(message.from)){
            this.alreadyAnsweredNumbers.push(message.from)
            return {text: 'Olá! Como devo chamá-lo(a)?'}
        }

        if(!this.phoneBook.has(message.from) && 
        (!confirmMessageService.confirm(message.body) && !confirmMessageService.deny(message.body))){
            return {text:'Tudo bem! Te chamarei de ' + message.body + ', confirmado?'}
        }
        else if(!this.phoneBook.has(message.from) && confirmMessageService.deny(message.body)) {
            return {text:'Então como devo chamá-lo(a)?'}
        }
        else if(!this.phoneBook.has(message.from) && confirmMessageService.confirm(message.body)){
            this.phoneBook.set(message.from, message.body)
        }
        return {text: 'Confirmado!'}
    }
}

module.exports = MessageManager