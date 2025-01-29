//Global variable that ceeps track of the current Category, Always starts on the first Object in ressurser.resources
let currentCategory = resources[0].category;

/**
 * Creates the Tab buttons in the nav menu.
 * Based on the value of category in ressurser.resources.
 */
function createTabs(){
    const tabs = document.getElementById("tabs");

    resources.map((resource) => tabs.innerHTML +=
        `<li>
            <button onclick="changeContent('${resource.category}')">${resource.category}</button>
        </li>`
    )
}

/**
 * Initializes content for the article card.
 */
function initializeContent(){
    document.getElementById("ResourceContent").innerHTML = generatArticleCardHTML(resources[0]);
}

/**
 * Changes the content of the article with id ResourceContent with content that corresponds to the button pressed.
 * 
 * @param {string} contentTitle This parameter expects a string that corresponds to the value of category in any of the objects in ressurser.resource
 */
function changeContent(contentTitle) {
    /**Updates the @var currentCategory so that @function addClassOnSelectedTab also have it aviable*/
    currentCategory = contentTitle
    const filteredContent = resources.filter(
        (resource) => currentCategory === resource.category
    )

    document.getElementById("ResourceContent").innerHTML = generatArticleCardHTML(filteredContent[0]);

    addClassOnSelectedTab();
}

/**
 * Adds the class activeTab to the button tag that corresponds with the @var currentCategory
 */
function addClassOnSelectedTab(){
    const buttons = document.getElementsByTagName("button")
    
    for(i = 0; i < buttons.length; i++){
        buttons[i].classList.toggle("activeTab", buttons[i].innerHTML === currentCategory)
    }
}

/**
 * Generates a template literal for the article card based on the object sent by the parametre
 * 
 * @param {object} resource an object that is used to fill the content of the template literal
 * @returns {string} returns a template literal that can be used for the HTML document
 */
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

/**
 * Calls the @function createTabs and @function initializeContent to fill the ul of the nav element. 
 * Calls the @function addClassOnSelectedTab to set the activeTab class to the starting category 
 * */
createTabs();
addClassOnSelectedTab();
initializeContent();

/** TODO:
 *  [ ] - add try catch clause to handle cases where there is trouble getteing acsess or a category don't exist
 *  [ ] - Simplify code
 *  [ ] - Add functionality for handling larger amounts of data (this will have to be a mix of CSS and JavaScript changes)
 * */
