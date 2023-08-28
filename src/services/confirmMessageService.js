const responseConfirm = ['SIM', 'OK', 'S']
const responseDeny = ['N', 'NAO']

exports.confirm = function(text){
    return responseConfirm.includes(text.trim().toUpperCase())
}

exports.deny = function(text){
    return responseDeny.includes(text.trim().toUpperCase().replace('Ã','A'));
}

