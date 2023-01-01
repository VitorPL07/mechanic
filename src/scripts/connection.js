const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode");

async function start() {
    const client = new Client({
        authStrategy: new LocalAuth({
            dataPath: '../auth/'
        })
    });

    const canvas = document.getElementById("qrcode");

    client.on("qr", (qr) => {
        console.log(qr);

        qrcode.toCanvas(canvas, qr, (err) => {
            if (err) console.error(err);
            console.log("Sucess!!!");
        });
    });

    client.on('ready', () => {
        console.log('Client is ready!');
    });

    client.initialize();
}

start();
