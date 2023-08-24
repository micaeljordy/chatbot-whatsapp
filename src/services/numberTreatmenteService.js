exports.tratar = function(numero){
    const ddi = numero.substring(0,2);
    const ddd = numero.substring(2,4);
    const numeroUsuario = numero.substring(4,numero.length);

    if(ddd <= 30){
        return ddi + ddd + '9' + numeroUsuario;
    }

    return numero;
}