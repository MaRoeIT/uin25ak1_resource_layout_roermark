# UIN Oblig 1
**NB!** The site styling isn't optimized for lower screen width than 1200px.<br>
**NB!** The w3c validator service detects one warning since the article tag lacks heading,<br>
this fixes itself when the JavaScript code adds content to the site on initialization.

Before initialization:
```html
<article id="ResourceContent"></article>
```
After initialization:
```html
<h2>Title</h2>
    <p>Some text..............</p>
    <ul>
        <li>
            <a href="SomeLink.com">SomeLink name</a>
        </li>
        <li>
            <a href="SomeLink.com">SomeLink name</a>
        </li>
        <li>
            <a href="SomeLink.com">SomeLink name</a>
        </li>
    </ul>
```