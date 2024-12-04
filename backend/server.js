import express from 'express';
import cors from 'cors';

// Initialize the Express app
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample user data (11 users)
const users = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        address: { streetName: "Main St", zipCode: "12345" },
        companyName: "TechCorp",
        phoneNumber: "123-456-7890"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        address: { streetName: "Ocean Ave", zipCode: "67890" },
        companyName: "DesignInc",
        phoneNumber: "987-654-3210"
    },
    {
        id: 3,
        firstName: "Alice",
        lastName: "Johnson",
        address: { streetName: "Maple St", zipCode: "54321" },
        companyName: "Innovatech",
        phoneNumber: "456-789-1230"
    },
    {
        id: 4,
        firstName: "Bob",
        lastName: "Brown",
        address: { streetName: "Elm St", zipCode: "87654" },
        companyName: "BuildIt",
        phoneNumber: "654-321-0987"
    },
    {
        id: 5,
        firstName: "Emily",
        lastName: "Davis",
        address: { streetName: "Cedar Ave", zipCode: "11223" },
        companyName: "Marketify",
        phoneNumber: "321-654-9870"
    },
    {
        id: 6,
        firstName: "Chris",
        lastName: "Taylor",
        address: { streetName: "Pine St", zipCode: "33445" },
        companyName: "CodeCraft",
        phoneNumber: "789-123-4567"
    },
    {
        id: 7,
        firstName: "Sophia",
        lastName: "Anderson",
        address: { streetName: "Birch Rd", zipCode: "66789" },
        companyName: "DevOpsHub",
        phoneNumber: "234-567-8901"
    },
    {
        id: 8,
        firstName: "James",
        lastName: "Wilson",
        address: { streetName: "Spruce Dr", zipCode: "99012" },
        companyName: "CloudSolutions",
        phoneNumber: "890-123-4567"
    },
    {
        id: 9,
        firstName: "Olivia",
        lastName: "Martin",
        address: { streetName: "Cherry Ln", zipCode: "22334" },
        companyName: "CreativeWorks",
        phoneNumber: "567-890-1234"
    },
    {
        id: 10,
        firstName: "Michael",
        lastName: "Walker",
        address: { streetName: "Willow Way", zipCode: "77889" },
        companyName: "FullStack LLC",
        phoneNumber: "901-234-5678"
    },
    {
        id: 11,
        firstName: "Ava",
        lastName: "Lee",
        address: { streetName: "Ash Ct", zipCode: "44556" },
        companyName: "DesignStudio",
        phoneNumber: "678-901-2345"
    }
];

// API Routes
// GET all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// POST: Add a new user
app.post('/api/users', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT: Update a user
app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...req.body };
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// DELETE: Remove a user
app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1);
        res.json(deletedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Local API is running at http://localhost:${PORT}`);
});
