function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (views < 1000) {
        viewStr = views  ;
    } else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    } else {
        viewStr = views / 1000 + "k";
    }

    let html = `
        <div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="img loading...">
                    <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>
    `
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard("Installing VS Code & How Website Work | Sigma Web Development Course-Tutorial # 1", "CodeWithHarry", 6800000, 7, "11:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w");

createCard("Installing VS Code & How Website Work | Sigma Web Development Course-Tutorial # 1", "CodeWithHarry", 6800000, 7, "11:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w");

createCard("Installing VS Code & How Website Work | Sigma Web Development Course-Tutorial # 1", "CodeWithHarry", 6800000, 7, "11:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w");