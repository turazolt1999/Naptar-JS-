let ido=5;
function naptarImage(x, y, width, height, color, nap) {
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#ffffff";
    ctx.rect(x, y, width, height);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fontStyle = "13px Ariel";
    ctx.fillStyle = "#000000";
    ctx.fillText("   Hé   Ke  SZ  CS   Pé   SZ   Va",x+20,y+20);
    var xa=x+30;
    var ya=y+40;
    var szamlalo=0;
    var seged=ido;
    for (let i=1; i<ido+1; i++) {
        xa=xa+20;
        seged=seged-1;
        szamlalo++;
    }
    if (seged===7) {

    }
    for (var i=1; i<nap+1; i++) {
        if (szamlalo>6) {
            szamlalo=0;
            ya=ya+30;
            xa=x+30;
        }

        ctx.fillText(i, xa, ya);
        xa=xa+20;
        szamlalo++;
    }
    ido=szamlalo;
    ctx.stroke();
}

// Hónapok adatai
var honapok = [
    {
        name: "Január",
        nap: 31
    },
    {
        name: "Február",
        nap:28
    },
    {
        name: "Március",
        nap: 31
    },
    {
        name: "Április",
        nap: 30
    },
    {
        name: "Május",
        nap: 31
    },
    {
        name: "Június",
        nap: 30
    },
    {
        name: "Július",
        nap: 31
    },
    {
        name: "Augusztus",
        nap: 31
    },

    {
        name: "Szeptember",
        nap: 30
    },
    {
        name: "Oktober",
        nap: 31
    },
    {
        name: "November",
        nap: 30
    },
    {
        name: "December",
        nap: 31
    },
];

var c = document.getElementById("ex");
var ctx = c.getContext("2d");

// Háttér
ctx.fillStyle = "#DDE0EB";
ctx.fillRect(0, 0, 800, 800);


// Naptár kirajzolása
var picPosX = 0;
var picPisY = 0;
var height = 200;
var width = 200;
for (var i in honapok) {
    var honap = honapok[i];
    naptarImage(picPosX, picPisY, width, height, honap.name, honap.nap);
    ctx.beginPath();
    ctx.fillStyle = "#ffffee";
    ctx.rect(picPosX + 70, picPisY + height + 20, 70, 20)
    ctx.fill();
    ctx.fontStyle = "13px Ariel";
    ctx.fillStyle = "#000000";
    ctx.fillText(honap.name, picPosX + 83, picPisY + height + 34);

    picPosX += width;

    if (picPosX>800) {
        picPisY += height + 50;
        picPosX = 0;
    }
    ctx.stroke();
}
