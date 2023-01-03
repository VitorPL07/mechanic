// const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode");

async function start() {
    // const client = new Client({
    //     authStrategy: new LocalAuth({
    //         dataPath: '../auth/'
    //     })
    // });

    const qr = "2@DxCC/pdNfgdou43URB7vidspoczmkiOU8Qxzkkb03pLPk7pRmMfgiqAncFlMBNUg+5vwPPZr2ak+AA==,MhW/mxgqWVQFadzFpu9fOnByJ1wMNhfujMKud9deKVQ=,LPtUGbc7+u1MoQrvnC1frvJQ66HqBXBXTC7pvVajQTU=,niVRy0lrq02yVPeC5lnPLm5A2Fu+q1LTOuFzIJtIWYw="

    const canvas = document.getElementById("qrcode");

    qrcode.toCanvas(canvas, qr, (err) => {
        if (err) console.error(err);
        console.log("Sucess!!!");
    });

    // client.on("qr", (qr) => {
    //     console.log(qr);

    //     qrcode.toCanvas(canvas, qr, (err) => {
    //         if (err) console.error(err);
    //         console.log("Sucess!!!");
    //     });
    // });

    // client.on('ready', () => {
    //     console.log('Client is ready!');
    // });

    // client.initialize();
}

start();
