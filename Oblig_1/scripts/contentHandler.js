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
}