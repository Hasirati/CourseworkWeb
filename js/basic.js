// Header
function showModal() {
    document.getElementById("modal").style.display = "block";
}

//Modal
function showImageInModal(imageElement) {
    let image = document.getElementById("modalFile");
    image.src = URL.createObjectURL(imageElement.files[0]);
}

// Content
function showContent() {
    document.getElementById("compTable").style.display = "none";
}

function showComponent(key) {
    switch (key) {
        case 1:
            document.getElementById("compTable").style.display = "block";
            console.log(localStorage.getItem(localStorage.setItem('', printerDate.toString())));
            break;
        case 2:
            document.getElementById("compTable").style.display = "block";
            break;
        case 3:
            document.getElementById("compTable").style.display = "block";
            break;
        case 4:
            document.getElementById("compTable").style.display = "block";
            break;
        case 5:
            document.getElementById("compTable").style.display = "block";
            break;
        case 6:
            document.getElementById("compTable").style.display = "block";
            break;
        case 7:
            document.getElementById("compTable").style.display = "block";
            break;
        case 8:
            document.getElementById("compTable").style.display = "block";
            break;
        case 9:
            document.getElementById("compTable").style.display = "block";
            break;
        case 10:
            document.getElementById("compTable").style.display = "block";
            break;
    }
}

//LocalStorage
let printerDate = {
    name: "Kodak PD-450",
    printTechnology: "Print technology: Sublimation color printing",
    maximumPaperSize: "Maximum paper size: 4х6",
    printSpeed: "Color print speed, ppm: 11",
    cartridgeResource: "Cartridge resource, page: 6"
}
