//елементи, наявні по дефолту в локас сторедж
function defaultValues() {
    let printerDate = [
        { name: "Kodak PD-450", size: "A6", speed: 11, resource: 6, price: 1962, img: "Kodak/Kodak PD450.jpg" },
        { name: "Kyocera M2040dn", size: "A3", speed: 40, resource: 850, price: 22194, img: "Kyocera/Kyocera M2040dn.jpg" },
        { name: "Dell B2360Dn Mono", size: "A4", speed: 16, resource: 200, price: 7597, img: "Dell/Dell B2360Dn Mono.jpg" },
        { name: "Sprocket Photo Print", size: "A6", speed: 1, resource: 5, price: 4945, img: "HP/HP Sprocket Photo Print Black Noir.jpg" },
        { name: "Samsung SL-M2026", size: "A4", speed: 20, resource: 120, price: 2295, img: "Samsung/Samsung SL-M2026.jpg" }
    ]
    localStorage.clear();

    for (let i = 0; i < printerDate.length; i++) {
        let item = printerDate[i];
        let itemToStorage = JSON.stringify(item);
        localStorage.setItem(`${i}`, itemToStorage);
    }
    location.reload();
}

// додати елемент в локал сторедж
function addElementToLocalStorage() {
    if (checkValues() && checkImg()) {
        let keyArr = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = Number(localStorage.key(i));
            keyArr[i] = key;
        }
        const freeKey = Math.max(...keyArr) + 1;
        let filename = document.getElementById("img").value.replace(/C:\\fakepath\\/, '');

        //Build new element.
        const newElement = {};
        newElement.name = document.getElementById("name").value;
        newElement.size = document.getElementById("size").value;
        newElement.speed = document.getElementById("speed").value;
        newElement.resource = document.getElementById("resource").value;
        newElement.price = document.getElementById("price").value;
        newElement.img = filename;

        //Convert to JSON.
        let newObj = JSON.stringify(newElement);
        localStorage.setItem(`${freeKey}`, newObj);
        closeModal();
        setTimeout(location.reload(), 1000);
    }
}

//редагувати в локал сторедж
function editElement(id) {
    if (checkValues()) {
        let edElem = JSON.parse(localStorage.getItem(id));
        edElem.name = document.getElementById("name").value;
        edElem.size = document.getElementById("size").value;
        edElem.speed = document.getElementById("speed").value;
        edElem.resource = document.getElementById("resource").value;
        edElem.price = document.getElementById("price").value;
        if (document.getElementById("img").value) {
            let filename = document.getElementById("img").value.replace(/C:\\fakepath\\/, '');
            edElem.img = filename;
        }
        let strEdit = JSON.stringify(edElem);
        localStorage.setItem(`${id}`, strEdit);
        closeModal();
        setTimeout(location.reload(), 1000);
    } else closeModal();
}

// масив елементів з локалу
function getArrayFromStorage() {
    let keynumber = Object.keys(localStorage).length;
    let element = {};
    let inputArray = [];
    for (let i = 0; i < keynumber; i++) {
        let keyId = localStorage.key(i);
        let item = JSON.parse(localStorage.getItem(keyId));
        element = {};
        element.id = keyId;
        element.name = item.name;
        element.size = item.size;
        element.speed = item.speed;
        element.resource = item.resource;
        element.price = item.price;
        element.img = item.img;
        inputArray.push(element);
    }
    return inputArray;
}

//видаляти
function deleteElement(id) {
    localStorage.removeItem(id)
    setTimeout(location.reload(), 1000)
}

//зміна для редагування 
function modifyToEdit(id) {
    document.getElementsByClassName("modalTitle")[0].innerText = "Edit printer";
    document.getElementById("butConfirmModal").innerText = "Update";
    document.getElementById("butConfirmModal").setAttribute("onclick", `editElement(${id})`);
    let edElem = JSON.parse(localStorage.getItem(id));
    document.getElementById("name").value = edElem.name;
    document.getElementById("size").value = edElem.size;
    document.getElementById("speed").value = edElem.speed;
    document.getElementById("resource").value = edElem.resource;
    document.getElementById("price").value = edElem.price;
    document.getElementById("img").setAttribute("src", `img/${edElem.img}`);
    showModal();
}