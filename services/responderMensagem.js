let numeroDaMensagem = 0;
const StringBuilder = require('./stringBuider');
let nome = '';

exports.lerResponder = function(mensagem){
    numeroDaMensagem++;
    if(numeroDaMensagem == 1) {
        return 'Olá? Como devo chamá-lo(a)?'
    }
    nome = mensagem
    const builder = new StringBuilder()
    builder.append('Olá ' + nome)
    return builder.toString()
}