const responseConfirm = ['SIM', 'OK', 'S']
const responseDeny = ['N', 'NAO']

exports.confirm = function(text){
    if(responseConfirm.includes(text.trim().toUpperCase()))
    {
        return true;
    }
    else return false;
}

exports.deny = function(text){
    if(responseDeny.includes(text.trim().toUpperCase().replace('Ã','A')))
    {
        return true;
    }
    else return false;
}

