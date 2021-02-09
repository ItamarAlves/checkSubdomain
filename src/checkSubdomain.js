const fs = require('fs');
const request = require('request')

function checkSubdomain() {
    fs.readFile('arquivo/url.txt','utf8', function(err, data){
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