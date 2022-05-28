// Header
function showModal() {
    document.getElementById("modal").style.display = "block";
}

//Modal
function showImageInModal(imageElement) {
    let image = document.getElementById("modalFile");
    image.src = URL.createObjectURL(imageElement.files[0]);
}

//Menu
function showCatalog() {
    document.getElementById("menuDropDownCatalog").style.display = "block";
}

function closeCatalog() {
    document.getElementById("menuDropDownCatalog").style.display = "none";
}

function showMenu() {
    document.getElementById("menuDropDownMenu").style.display = "block";
}

function closeMenu() {
    document.getElementById("menuDropDownMenu").style.display = "none";
}


function showImg(key) {
    switch (key) {
        case 1:
            document.getElementById("brother").style.display = "block";
            document.getElementById("always").style.display = "none";
            break;
        case 2:
            document.getElementById("canon").style.display = "block";
            document.getElementById("always").style.display = "none";
            break;
        case 3:
            document.getElementById("dell").style.display = "block";
            document.getElementById("always").style.display = "none";
            break;
        case 4:
            document.getElementById("epson").style.display = "block";
            document.getElementById("always").style.display = "none";
            break;
        case 5:
            document.getElementById("hp").style.display = "block";
            document.getElementById("always").style.display = "none";
            break;
        case 6:
            document.getElementById("kodak").style.display = "block";
            document.getElementById("always").style.display = "none";
            break;
        case 7:
            document.getElementById("kyocera").style.display = "block";
            document.getElementById("always").style.display = "none";
            break;
        case 8:
            document.getElementById("jetix").style.display = "block";
            document.getElementById("always").style.display = "none";
            break;
        case 9:
            document.getElementById("polaroid").style.display = "block";
            document.getElementById("always").style.display = "none";
            break;
        case 10:
            document.getElementById("samsung").style.display = "block";
            document.getElementById("always").style.display = "none";
            break;
    }
}

function closeImg(key) {
    switch (key) {
        case 1:
            document.getElementById("brother").style.display = "none";
            document.getElementById("always canon").style.display = "block";
            break;
        case 2:
            document.getElementById("canon").style.display = "none";
            document.getElementById("always").style.display = "block";
            break;
        case 3:
            document.getElementById("dell").style.display = "none";
            document.getElementById("always").style.display = "block";
            break;
        case 4:
            document.getElementById("epson").style.display = "none";
            document.getElementById("always").style.display = "block";
            break;
        case 5:
            document.getElementById("hp").style.display = "none";
            document.getElementById("always").style.display = "block";
            break;
        case 6:
            document.getElementById("kodak").style.display = "none";
            document.getElementById("always").style.display = "block";
            break;
        case 7:
            document.getElementById("kyocera").style.display = "none";
            document.getElementById("always").style.display = "block";
            break;
        case 8:
            document.getElementById("jetix").style.display = "none";
            document.getElementById("always").style.display = "block";
            break;
        case 9:
            document.getElementById("polaroid").style.display = "none";
            document.getElementById("always").style.display = "block";
            break;
        case 10:
            document.getElementById("samsung").style.display = "none";
            document.getElementById("always").style.display = "block";
            break;
    }
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