const StringBuilder = require('./stringBuider');
class GerenciadorMensagem{
    constructor() {
        this.listaNumerosAtendidos = new Array()
        this.listaTelefonica = new Map()
    }

    lerGuardarNome(message){
    
        if(!this.listaNumerosAtendidos.includes(message.from)){
            this.listaNumerosAtendidos.push(message.from)
            return 'Olá! Como devo chamá-lo(a)?'
        }
        const confirmacao = message.body.trim().replace('ã','a').toUpperCase()
        if(!this.listaTelefonica.has(message.from) && (confirmacao !== 'SIM' && confirmacao !== 'NAO' && confirmacao !== 'OK')){
            return 'Tudo bem! Te chamarei de ' + message.body + ', confirmado?'
        }
        else if(!this.listaTelefonica.has(message.from) && confirmacao === 'NAO') {
            return 'Então como devo chamá-lo(a)?'
        }
        else if(!this.listaTelefonica.has(message.from) && (confirmacao === 'SIM' || confirmacao === 'OK')){
            this.listaTelefonica.set(message.from, message.body)
        }
        return 'Confirmado!'
    }
}

module.exports = GerenciadorMensagem