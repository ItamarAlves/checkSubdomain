const fs = require('fs');
const request = require('request')

function checkSubdomain() {
    const [dir] = process.argv.slice(2)
    if (dir == undefined) {
        console.error("Favor informar o caminho do arquivo que está suas URL, exemplo: node src/checkSubdomain.js arquivo/url.txt")
        process.exit()
    }

    fs.readFile(dir,'utf8', function(err, data){
        var lines = data.split(/\r?\n/);
        
        lines.forEach(function(line) {
            request('https://'+line, function(err, response) {
                if (response && response.statusCode == 200) {
                    console.log(line + ' - ' + response.statusCode)
                }
            })
        })
    });
}

checkSubdomain()