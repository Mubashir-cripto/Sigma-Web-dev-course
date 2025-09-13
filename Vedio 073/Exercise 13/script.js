//toFixed(n)=> This is a method in JavaScript to round numbers to a fixed number of decimal places.
// let num = 5.678;
// console.log(num.toFixed(1)); // "5.7"  (1 decimal place)
// console.log(num.toFixed(0)); // "6"    (0 decimal places)
// console.log(num.toFixed(2)); // "5.68" (2 decimal places)

// .replace(/\.0$/, "")
// / ... / → that’s a regular expression (regex = search pattern).

// \. → matches a literal dot (.).

// 0 → matches the digit 0.

// $ → means "end of the string".
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function

    let container = document.querySelector(".container")
    container.style.display = "grid"
    container.style.gridTemplateColumns = "1fr"

    let card = document.createElement("div")
    container.append(card)
    card.setAttribute("class", "box")
    card.style.backgroundColor = "black"
    card.style.padding = "4px"
    card.style.display = "flex"
    card.style.color = "white"

    let ImgBox = document.createElement("div")
    ImgBox.setAttribute("class", "littleBox")
    card.prepend(ImgBox)
    ImgBox.style.position = "relative"

    let image = document.createElement("img")
    image.src = thumbnail
    image.alt = "loading..."
    ImgBox.prepend(image)
    image.style.borderRadius = "4px"
    image.style.margin = "6px"
    image.style.width = "220px"
    image.style.height = "140px"

    let timeDuration = document.createElement("div")
    timeDuration.innerHTML = duration
    ImgBox.append(timeDuration)
    timeDuration.style.position = "absolute"
    timeDuration.style.backgroundColor = "rgba(37, 36, 36, 0.75)"
    timeDuration.style.borderRadius = "3px"
    timeDuration.style.padding = "5px"
    timeDuration.style.fontSize = "12px"
    timeDuration.style.zIndex = "1"
    timeDuration.style.right = "10px"
    timeDuration.style.bottom = "15px"

    let main_dividant = document.createElement("div")
    main_dividant.setAttribute("class", "main_dividant")
    card.append(main_dividant)

    let dividant = document.createElement("div")
    dividant.setAttribute("class", "dividant")
    main_dividant.prepend(dividant)
    dividant.style.display = "flex"
    dividant.style.margin = "8px 25px"

    let titleName = document.createElement("h3")
    titleName.innerHTML = title
    dividant.append(titleName)

    let dividant_2 = document.createElement("div")
    dividant_2.setAttribute("class", "dividant_2")
    main_dividant.append(dividant_2)
    dividant_2.style.display = "flex"
    dividant_2.style.flexDirection = "row"
    dividant_2.style.gap = "24px"
    dividant_2.style.margin = " 25px 25px"
    dividant_2.style.fontSize = "14px"

    let channelName = document.createElement("span")
    channelName.innerHTML = cName
    dividant_2.append(channelName)

    let channelViews = document.createElement("span")
    let viewText = (views < 1000) ? views + "views" : (views < 100000) ? (views / 1000).toFixed(1).replace(/\.0$/ ,"") + "K views": (views / 100000).toFixed(1).replace(/\.0$/ ,"") + "M views" 
    channelViews.innerHTML = viewText
    dividant_2.append(channelViews)

    let VedioAge = document.createElement("span")
    VedioAge.innerHTML = monthsOld + " months ago"
    dividant_2.append(VedioAge)
}

createCard("Installing VS Code & How Website Work | Sigma Web Development Course-Tutorial # 1", "CodeWithHarry", 5600000, 4, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");

createCard("Installing VS Code & How Website Work | Sigma Web Development Course-Tutorial # 1", "Redix", 56000, 7, "16:22", "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg");

createCard("Installing VS Code & How Website Work | Sigma Web Development Course-Tutorial # 1", "Nature Explorer", 560000, 7, "23:22", "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=");

createCard("Installing VS Code & How Website Work | Sigma Web Development Course-Tutorial # 1", "Histora Cap", 60000, 7, "11:22", "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg");

