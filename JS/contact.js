const btn = document.getElementById("button");
btn.onclick = (e) => {
    e.preventDefault();
    const email = document.getElementById("mail");
    const msg = document.getElementById("msg");
    const name = document.getElementById("name");
    if (name.value == "") {
        alert("Name should be added");
    }
    else if (email.value == "") {
        alert("Email should be added");
    }
    else if (!email.value.includes("@")) {
        alert("@ should be added in Mail Address");
    }
    else if (msg.value.length == "") {
        alert("Message should be added")
    }
    else if (msg.value.length < 10) {
        alert("Message must be at least 10 characters long");
    }
    else {
        alert("Thanks! Your response have been recorded");
        location.reload();
    }
};