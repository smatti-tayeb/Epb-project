// server/routes/auth.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();

// Connect to SQLite database
const db = new sqlite3.Database('./database.sqlite');

// Create users table
db.serialize(() => {
  db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='users'", (err, row) => {
    if (!row) {
      db.run(`CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      )`, (err) => {
        if (err) {
          console.error("Error creating users table:", err.message);
        } else {
          console.log("Users table created successfully");
        }
      });
    } else {
      console.log("Users table already exists");
    }
  });
});
// Sign up route
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await new Promise((resolve, reject) => {
      db.run('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err) => {
        if (err) reject(err);
        resolve();
      });
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Sign in route
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Retrieve user by email
    const user = await new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });

    res.status(200).json({ id: user.id,
      username: user.username,
      email: user.email,
      token});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
router.get('/api/user', (req, res) => {
  const userId = req.headers.user_id;
  const user = users.find(u => u.id === parseInt(userId));
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  // If user is found, return their information
  res.json(user);
});

module.exports = router;
