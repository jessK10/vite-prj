User Management Web Application
This project is a User Management Web Application that provides functionality to display, add, update, and delete users in a dynamic and interactive interface. The front-end is built using HTML, CSS, and JavaScript, and the back-end uses Node.js and Express.js to handle API requests.

Features
Front-End Features:
Display Users: Fetch and display a list of users from a local API.
Add New Users: Use a form to add new users to the list.
Update Users: Edit existing user information through a modal form.
Delete Users: Remove users with a confirmation modal to prevent accidental deletions.
Responsive Design: The application is designed to work seamlessly on various screen sizes.
Modular Code Structure: Front-end code is organized into reusable components for better maintainability.
Back-End Features:
API for User Management: A simple REST API built using Node.js and Express.js.
Cross-Origin Support: Configured with CORS for Cross-Origin Resource Sharing.
Technologies Used
Front-End:
HTML5
CSS3 (with Bootstrap 5 for styling and modals)
JavaScript (ES6 Modules)
Back-End:
Node.js
Express.js
CORS (for handling cross-origin requests)
Project Structure
plaintext
Copier le code
project_root/
├── index.html                 # Main HTML file
├── style.css                  # CSS file for styling
├── main.js                    # Main JavaScript entry point
├── components/                # Front-end components
│   ├── userCard.js            # Component for displaying user cards
│   ├── userForm.js            # Component for the user form
│   └── modal.js               # Component for modals
├── utils/                     # Utility functions
│   ├── fetchData.js           # Function to fetch users
│   ├── addUser.js             # Function to add a user
│   ├── updateUser.js          # Function to update a user
│   └── deleteUser.js          # Function to delete a user
├── backend/                   # Back-end server
│   └── server.js              # Node.js server file
├── assets/                    # Assets folder
│   └── images/                # Images folder
├── package.json               # npm dependencies and scripts
└── README.md                  # Project documentation
Installation and Setup
Prerequisites:
Node.js and npm installed on your machine.
Steps:
1. Clone the Repository
bash
Copier le code
git clone <repository_url>
cd project_root
2. Install Dependencies
Front-End Dependencies:
In the project root directory, install front-end dependencies:

bash
Copier le code
npm install
Back-End Dependencies:
Navigate to the backend directory and install back-end dependencies:

bash
Copier le code
cd backend
npm install
3. Start the Servers
Start the Back-End Server:
From the backend directory, run:

bash
Copier le code
node server.js
The server will run on http://localhost:3000.

Start the Front-End Server:
From the project root directory, start the Vite development server:

bash
Copier le code
npm run dev
The front-end will run on http://localhost:5173.

Usage
Open http://localhost:5173 in your browser to access the application.
Use the interface to:
View a list of users.
Add new users.
Update user details via the modal form.
Delete users with a confirmation prompt.
