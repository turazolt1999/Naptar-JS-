
/**
 * Véletlenszerűen generált festményt készít a paraméterül kapott pozícióra.
 * @param x Festmény bal felső sarkának x koordinátja.
 * @param y Festmény bal felső sarkának y koordinátja.
 * @param width Festmény szélessége.
 * @param height Festmény magassága.
 * @param color A festmény színe.
 */
function generateImage(x, y, width, height, color) {
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#ffffff";
    ctx.rect(x, y, width, height);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x, y + Math.random() * height);
    ctx.lineTo(x + width, y + Math.random() * height);

    ctx.moveTo(x, y + Math.random() * height);
    ctx.lineTo(x + width, y + Math.random() * height);
    ctx.stroke();

    var minWh = width < height ? width : height;
    ctx.beginPath();
    ctx.arc(x + width / 4 + Math.random() * minWh/2,
        y +  height / 4 + Math.random() * height/2,
        minWh/4,
        0,
        2 * Math.PI
    );
    ctx.stroke();
}

// Festmények adatai
var pictures = [
    {
        favouriteColor: "#62ff9b",
        name: "Picasso"
    },
    {
        favouriteColor: "#598dff",
        name: "Da Vinci"
    },
    {
        favouriteColor: "#ff9456",
        name: "Van Gogh"
    },
    {
        favouriteColor: "#a8f5ff",
        name: "Monet"
    },
    {
        favouriteColor: "#ff6f8c",
        name: "Dali"
    }
];

var c = document.getElementById("ex");
var ctx = c.getContext("2d");

// Háttér
ctx.fillStyle = "#DDE0EB";
ctx.fillRect(0, 0, 800, 600);

// Falfestés (kerítés csíkozás)
ctx.fillStyle = "#759ECB";
ctx.fillRect(0, 300, 800, 10);

var start = 20;
while (start < 800) {
    ctx.fillRect(start, 300, 16, 200);
    start += 60;
}

// Padló
ctx.fillStyle = "#E9DDDD";
ctx.beginPath();
ctx.rect(0, 500, 800, 100);
ctx.stroke();
ctx.fill();

// Festmények kirajzolása
var picPosX = 40;
var picPisY = 60;
var height = 160;
var width = 100;
var space = 60;
for (var i in pictures) {
    var pic = pictures[i];
    generateImage(picPosX, picPisY, width, height, pic.favouriteColor);

    ctx.beginPath();
    ctx.fillStyle = "#ffffee";
    ctx.rect(picPosX + 20, picPisY + height + 20, 60, 20)
    ctx.fill();
    ctx.fontStyle = "12px Ariel";
    ctx.fillStyle = "#000000";
    ctx.fillText(pic.name, picPosX + 24, picPisY + height + 34)

    picPosX += width + space;
}

