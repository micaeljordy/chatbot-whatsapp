const fs = require('fs');

function readNumbers(path, callback){
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            callback('Ocorreu um erro ao ler o arquivo:', err);
            return;
          }
        const extractedNumbers = data.split('\n').map(row => row.replace(/[^0-9]/g, '')).map(row => row).map(row => row.slice(0,2) === '55' ? row : '55' + row).filter(row => row.length > 8);
        
        const numbers = new Array()
        extractedNumbers.forEach(row => {
            let number = row
            if(number.length < 13){
                const firstPart = number.slice(0,5)
                const secondPart = number.slice(5)
                number = firstPart + '9' + secondPart
            }
            const first = number.indexOf('9');
            if(first !== -1){
                const second = number.indexOf('9', first + 1)

                if(second !== -1){
                    const firstPart = number.slice(0, second)
                    const secondPart = number.slice(second + 1)
                    numbers.push(firstPart+secondPart)
                }
                else {numbers.push(number)}
            }
        })
    
        callback(null, numbers.map(row => row + '@c.us'));
    })
}

module.exports = readNumbers;