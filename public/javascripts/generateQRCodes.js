var QRCode = require('qrcode')

for (var i = 1; i < 100; i++) {
    var placeJSON = `{
        "place": {
            "id": ${i},
            "name": "場所${i}"
        }
    }`
    
    QRCode.toFile(`public/images/qr-place/pl${i}.png`, placeJSON, function(error) {
        if (error) console.log(error);
    })
}

for (var i = 1; i < 100; i++) {
    var partJSON = `{
        "parts": {
            "id": ${i},
            "name": "部品${i}"
        }
    }`
    
    QRCode.toFile(`public/images/qr-part/pa${i}.png`, partJSON, function(error) {
        if (error) console.log(error);
    })
}


