

const socket = io("http://localhost:2000");


let button = document.querySelector("#join");
button.addEventListener("click", (() => {

    let name = document.querySelector("#name").value;
    socket.emit("user-joined", name);
}))

socket.on("new-user", (name) => {
    console.log("BOOM")
    document.querySelector("body").innerHTML += "<p>hello</p>"
})
xw
