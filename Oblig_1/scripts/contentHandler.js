let resourceHTML = "";
let currentCategory = resources[0].category;

function createTabs(){
    const tabs = document.getElementById("tabs");

    resources.map((resource) => tabs.innerHTML +=
        `<li>
            <button onclick="changeContent('${resource.category}')">${resource.category}</button>
        </li>`
    )
}

function initialisingContent(){
    resourceHTML = generatArticleCardHTML(resources[0])

    document.getElementById("ResourceContent").innerHTML = resourceHTML;
}

function changeContent(contentTitle) {
    currentCategory = contentTitle
    const filteredContent = resources.filter(
        (resource) => currentCategory === resource.category
    )

    resourceHTML = generatArticleCardHTML(filteredContent[0])

    document.getElementById("ResourceContent").innerHTML = resourceHTML;

    addClassOnSelectedTab();
}

function addClassOnSelectedTab(){
    const buttons = document.getElementsByTagName("button")
    
    for(i = 0; i < buttons.length; i++){
        buttons[i].classList.toggle("activeTab", buttons[i].innerHTML === currentCategory)
    }
}

function generatArticleCardHTML(resource){
    return `
    <h2>${resource.category}</h2>
    <p>${resource.text}</p>
    <ul>
        ${resource.sources.map(source => 
            `<li>
                <a href="${source.url}">${source.title}</a>
            </li>`
        ).join(``)}
    </ul>`
}

createTabs();
addClassOnSelectedTab();
initialisingContent();
