// Header
function rebootSite() {
    location.reload();
}

function search() {
    document.getElementsByClassName("displayzone")[0].innerHTML = '';
    let toSearchArr = getArrayFromStorage();
    let toSearchStr = document.querySelector("#headerEdit").value;
    let toSearchStrLow = toSearchStr.toLowerCase();
    let checkValueSearch = new RegExp(`${toSearchStrLow}`);
    let isFounded = false;
    for (let i = 0; i < toSearchArr.length; i++) {
        let item = toSearchArr[i];
        let elemN = item.name.toLowerCase();
        let elemSiz = item.size.toLowerCase();
        let elemSp = item.speed;
        let elemRes = item.resource;
        let elemP = item.price;
        if (checkValueSearch.test(elemN) || checkValueSearch.test(elemT) || checkValueSearch.test(elemSiz) || checkValueSearch.test(elemSp) || checkValueSearch.test(elemRes) || checkValueSearch.test(elemP)) {
            buildElementToPage(item.id, item);
            isFounded = true;
        }
    }
    if (!isFounded) {
        document.getElementsByClassName("displayzone")[0].innerHTML = alert("is not founded");
    }
}


//Modal
function showImageInModal(imageElement) {
    let image = document.getElementById("modalFile");
    image.src = URL.createObjectURL(imageElement.files[0]);
}

function showModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// My selected
function buildElementToPage(id, elem) {
    const element = document.createElement('div');
    element.classList.add('element');
    element.insertAdjacentHTML('afterbegin', `
        <div class="compContentSelect">
            <img src="img/${elem.img}" class="compImgSel">
            <p class="compTitle">${elem.name}</p>
            <p class="compLine">Maximum paper size: <span>${elem.size}</span> </p>
            <p class="compLine">Color print speed, ppm: <span>${elem.speed}</span> </p>
            <p class="compLine">Cartridge resource, page: <span>${elem.resource }</span> </p>
            <p class="compLine">Price, UAH: <span>${elem.price}</span> </p>
            <div class="contBut">
                 <button id="editElement" class="contEdit" onclick="showModal()">Edit</button><span> </span>
                 <button id="deleteElement" class="contDelete" onclick="deleteElement(${id})">Delete</button>
            </div>
        </div>`);
    document.getElementsByClassName("displayzone")[0].appendChild(element);
}

let keyNumbers = Object.keys(localStorage).length;
for (let k = 0; k < keyNumbers; k++) {
    let keyName = localStorage.key(k);
    let row = JSON.parse(localStorage.getItem(keyName));
    buildElementToPage(keyName, row);
}

// сортування по ціні
function sortByPrice() {
    let checkBox = document.getElementById("sort");
    if (checkBox.checked == true) {
        let sortArr = getArrayFromStorage()

        function byField(field) {
            return (a, b) => +a[field] > +b[field] ? 1 : -1;
        }
        // параметр для сортування
        sortArr.sort(byField('price'));
        document.getElementsByClassName("displayzone")[0].innerHTML = ''
        for (let n = 0; n < sortArr.length; n++) {
            let temp = sortArr[n]
            buildElementToPage(temp.id, temp)
        }
    } else {
        setTimeout(location.reload(), 1000)
    }
}

function count() {
    let priceArr = Object.keys(localStorage).length;
    let result = 0
    for (let i = 0; i < priceArr; i++) {
        let keyID = localStorage.key(i)
        let strObj = JSON.parse(localStorage.getItem(keyID))
        result += Number(strObj.price);
        document.getElementById("result").innerHTML = `${result} UAN`
    }
}

sort.addEventListener('click', sortByPrice)
butSearchHeader.addEventListener('click', search)

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
            document.getElementById("always").style.display = "block";
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

function buildElementToPage(id, elem) {
    const element = document.createElement('div');
    element.classList.add('element');
    element.insertAdjacentHTML('afterbegin', `
            <img src="img/${elem.img}" class="compImg">
            <p class="compTitle">${elem.name}</p>
            <p class="compLine">Maximum paper size: <span>${elem.size}</span> </p>
            <p class="compLine">Color print speed, ppm: <span>${elem.speed}</span> </p>
            <p class="compLine">Cartridge resource, page: <span>${elem.resource }</span> </p>
            <p class="compLine">Price, UAH: <span>${elem.price}</span> </p>
            <div class="contBut">
            <button class="butConfirmModal" id="butConfirmModal"
            onclick="addElementToLocalStorage()">Confirm</button>
            </div>`);
    document.getElementsByClassName("compContent")[0].appendChild(element);
}

function showComponent(key) {
    switch (key) {
        case 1:
            document.getElementById("compTable").style.display = "block";
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