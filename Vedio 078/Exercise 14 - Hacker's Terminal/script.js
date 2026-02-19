async function funHack(messages, element) {
    let timeDelay = Math.ceil(Math.random() * 7) * 1000;
    console.log(timeDelay);
    return new Promise((resolve) => {
        let dots = "";
        element.innerHTML = messages;

        let interval = setInterval(() => {
            dots += "."
            if (dots.length > 3) dots = ""
            element.innerHTML = messages + dots;
        }, 300);

        setTimeout(() => {
            clearInterval(interval);
            element.innerHTML = messages ;
            resolve();
        }, timeDelay);
    })
}

async function main() {
    const messages = [
        "Initializing Hacking",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"
    ];

    for (let i = 0; i < messages.length; i++) {
        let box = document.querySelector(`.box${i + 1}`)
        await funHack(messages[i], box);
    }
}
main();