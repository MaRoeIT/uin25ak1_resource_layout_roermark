function changeContent(contentTitle) {

    let resourceHTML = "";
    let sourcesHTML = "";

    const filteredContent = resources.filter(
        (resource) => contentTitle === resource.category
    )

    filteredContent[0].sources.map(source => sourcesHTML += 
        `<li>
            <a href="${source.url}">${source.title}</a>
        </li>`
    )

    resourceHTML = `
        <h2>${filteredContent[0].category}</h2>
        <p>${filteredContent[0].text}</p>
        <ul>
            ${sourcesHTML}
        </ul>
    `

    document.getElementById("ResourceContent").innerHTML = resourceHTML;

    selectedTabStyle(contentTitle);

    
}

function selectedTabStyle(contentTitle){
    const buttons = document.getElementsByTagName("button")
    console.log(buttons)
    
    for(let k in buttons){
        console.log(buttons[k].innerHTML)
        if(buttons[k].innerHTML === contentTitle){
            buttons[k].style.textDecoration = "underline white 2.5px"
        }
        else{
            buttons[k].style.textDecorationLine = "none"
        }
    }
}