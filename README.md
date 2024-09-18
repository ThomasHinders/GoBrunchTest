# GoBrunchTest

Dynamic Item List for GoBrunch

**Functionality:** 
- The user enters a number in the input field.
- Based on the entered quantity, a list of items is displayed.
- Each list item has a corresponding number.

**Technologies Used:**
- Server-side: Node.Js, Express.
- Client-side: HTML, EJS, Javascript and CSS.

**How it Works:**

**1. Server-side (index.js):**

    - Sets up an Express server.
    - Defines routes, serving the main page (index.ejs) and static files from the public directory.
    - Uses EJS as the view engine.

**2. Client-side Template (views/index.ejs):**

    - Defines the HTML structure for the page.
    - Includes the input field for quantity, a button to update the list, and an unordered list element to display the items.
    - References the script.js file for the client-side logic.

**3. Client-side Script (public/script.js):**

    - Fetches references to the quantity input and list elements.
   ** - Implements the updateList function:**
        -> Clears the existing list items.
        -> Creates a list item for each number based on the entered quantity.
        -> Sets the content of the list item with "Item" and its corresponding number.
        -> Appends the list item to the main list element.

**4. Running the Project:**

    - Make sure you have Node.js and npm installed.
    - Clone this repository or download the files.
    - Open a terminal in the project directory.
    - Run npm install to install dependencies.
    - Run node index.js to start the server.
    - Open your web browser and navigate to http://localhost:3000 to see the page.
