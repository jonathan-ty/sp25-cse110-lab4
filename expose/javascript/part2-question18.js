setInterval(announceTime, 1000);

function announceTime() {
    let d = new Date();
    console.log(d.toLocaleTimeString());
}