# Shopping List 

This Shopping List is a project for my google interview project created in React with Firebase.

This project is also hosted on firebase - [https://serene-mender-355212.web.app/]

## How to use

The webapp can be run locally if npm is installed using:

`npm start`

This opens http://localhost:3000 to view the project in your browser.

## High-level Systems Design

This project was created using langauges: JavaScript, HTML and CSS. 
The tools used: React, React-firebase-hooks Firebase-Auth-hooks, Firebase and Firestore database.

- **React** was used for the UI.
- **React-Firebase-Hooks** was used to allow the front-end communicate with the back-end.
- **Firebase-Auth-SDK** was used to allow the user to authenticate using their gmail account.
- **Firebase** was used to host the project.
- **Firestore database** is a noSQL database and was used for the back-end to store each users shopping list. The database was created using a single collection called 'Users', each user that authenticated to the webapp created a new unique document with a subcollection called 'ShoppingList'. Here any items that was added through the webapp would create a new document with fields of (id, name and quantity).