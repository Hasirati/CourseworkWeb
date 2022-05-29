function checkImg() {
    let valid = true;
    if (document.getElementById("img").value) { valid } else {
        alert("The image was not selected!");
        valid = false;
    }
    return valid;
}

function checkValues() {
    let valid = true;

    if (document.getElementById("name").value) { valid } else {
        alert("The name was not entered!")
        valid = false;
    }

    if (document.getElementById("size").value) { valid } else {
        alert("The size was not entered!")
        valid = false;
    }

    if (document.getElementById("speed").value) { valid } else {
        alert("The speed was not entered!")
        valid = false;
    }

    if (document.getElementById("resource").value) { valid } else {
        alert("The resource was not entered!")
        valid = false;
    }

    if (document.getElementById("price").value) { valid } else {
        alert("The price was not entered!")
        valid = false;
    }

    return valid;
}