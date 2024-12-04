Project Description:

This project is a User Management Web Application that allows you to display, add, update, and delete users in a dynamic and interactive interface. The application consists of a front-end built with HTML, CSS, and JavaScript, and a back-end server using Node.js and Express.js to handle API requests.

Features

Display Users: Fetch and display a list of users from a local API.
Add New Users: Use a form to add new users to the list.
Update Users: Edit existing user information through a modal form.
Delete Users: Remove users with a confirmation modal to prevent accidental deletions.
Responsive Design: The application is responsive and works on various screen sizes.
Modular Code Structure: Organized code with reusable components and utility functions.

Technologies Used
Front-End:
HTML5
CSS3 (including Bootstrap 5 for styling and modals)
JavaScript (ES6 modules)

Back-End:
Node.js
Express.js
Cors (for handling Cross-Origin Resource Sharing)

Project Structure:
project_root/
├── index.html
├── style.css
├── main.js
├── components/
│   ├── userCard.js
│   ├── userForm.js
│   └── modal.js
├── utils/
│   ├── fetchData.js
│   ├── addUser.js
│   ├── updateUser.js
│   └── deleteUser.js
├── backend/
│   └── server.js
├── assets/
│   └── images/
├── package.json
└── README.md

Installation and Setup:
Prerequisites
Node.js and npm installed on your machine.

Steps
Clone the Repository
git clone <repository_url>
cd project_root

Install Dependencies
Install front-end dependencies (if any):
npm install

Navigate to the backend folder and install back-end dependencies:
cd backend
npm install

Start the Back-End Server
In the backend directory, start the server:
node server.js
The server will run on http://localhost:3000.
