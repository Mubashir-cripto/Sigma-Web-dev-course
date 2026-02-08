console.log("Script.js initializing");

// Dynamic Website builder
function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    let cont = document.querySelector(".container");

    // card creation starts
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    cont.append(card);

    // image & time box creatiom
    let imageBox = document.createElement("div");
    imageBox.setAttribute("class", "imageBox");
    card.prepend(imageBox);

    let image = document.createElement("img");
    image.classList.add("image");
    imageBox.append(image);
    image.src = thumbnail;
    image.alt = "Image Loading...";

    let timeDuration = document.createElement("div");
    timeDuration.setAttribute("class", "timeDurance");
    timeDuration.innerHTML = duration;
    imageBox.append(timeDuration);

    // (title ,cName ,views ,monthsOld section)
    // second section for card (for flex property usage)

    let section_2 = document.createElement("div");
    section_2.setAttribute("class", "section_2");
    card.append(section_2);

    // title creation
    let titleSpace = document.createElement("h3");
    titleSpace.setAttribute("class", "forTitle");
    titleSpace.innerText = title;
    section_2.prepend(titleSpace);

    // second part :channel name ,views and month old
    let secPart = document.createElement("div");
    secPart.setAttribute("class", "secPart");
    section_2.append(secPart);

    let channelName = document.createElement("span");
    channelName.innerText = cName;
    secPart.append(channelName);

    let channelViews = document.createElement("span");
    channelViews.innerText = channelView(views);
    secPart.append(channelViews);
    
    let vedioAge = document.createElement("span");
    vedioAge.innerText = monthsOld + " months ago";
    secPart.append(vedioAge);

}

function channelView(views) {
    if (views < 0) {
        return "Invalid value entered!";
    }
    if (views <= 999) {
        return views + " views";
    } else if (views >= 1000 && views <= 100000) {
        return (views / 1000).toFixed(1) + "k views"
    } else if (views > 100000 && views <= 10000000000) {
        return (views / 1000000).toFixed(1) + "M views";
    } else {
        return (views / 10000000000).toFixed(1) + "B views";
    }
} 
       

createCard("Installing VS Code & How Website Work | Sigma Web Development Course-Tutorial # 1", "CodeWithHarry", 6800000, 7, "11:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w");

createCard("Installing VS Code & How Website Work | Sigma Web Development Course-Tutorial # 1", "CodeWithHarry", 5500, 7, "11:22", "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg");

createCard("Installing VS Code & How Website Work | Sigma Web Development Course-Tutorial # 1", "CodeWithHarry", 5500, 7, "11:22", "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg");

createCard("Installing VS Code & How Website Work | Sigma Web Development Course-Tutorial # 1", "CodeWithHarry", 5500, 7, "11:22", "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg");


