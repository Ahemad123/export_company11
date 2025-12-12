const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const notifier = require('node-notifier');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Mock Data
const products = [
    { id: 1, name: "Premium Rice", description: "Long-grain, aromatic basmati rice sourced from the finest fields.", image: "assets/images/rice.png" },
    { id: 5, name: "Vegetables & Fruits", description: "Farm-fresh organic vegetables and seasonal fruits.", image: "assets/images/vegetables.png" },
    { id: 6, name: "Frozen Seafood", description: "Premium quality frozen seafood processed for freshness.", image: "assets/images/fresh_seafood.png" },
    { id: 19, name: "Coconut Products", description: "Desiccated coconut, oil, and other coconut-based products.", image: "assets/images/coconuts.png" },
    { id: 2, name: "Organic Spices", description: "A variety of authentic spices including turmeric, cardamom, and pepper.", image: "assets/images/spices.png" },
    { id: 3, name: "Cotton Textiles", description: "High-thread-count cotton fabrics suitable for luxury garments.", image: "assets/images/textiles.png" },
    { id: 25, name: "Metal Scrap", description: "High-grade recycled metal scrap for industrial use.", image: "assets/images/scrap.png" },
    { id: 12, name: "Jute Bags", description: "Eco-friendly and durable jute bags.", image: "assets/images/jute.png" },
    { id: 13, name: "Silk Fabrics", description: "Luxurious silk fabrics in vibrant colors.", image: "assets/images/silk.png" }, 
    { id: 9, name: "Essential Oils", description: "Pure and organic essential oils for aromatherapy.", image: "assets/images/oils.png" },
    { id: 10, name: "Tea Leaves", description: "Premium tea leaves from the finest gardens.", image: "assets/images/tea.png" }, 
    { id: 11, name: "Coffee Beans", description: "Rich and aromatic roasted coffee beans.", image: "assets/images/coffee.png" },
    { id: 20, name: "Rubber Products", description: "High-quality rubber sheets and mats.", image: "assets/images/rubber.png" },
    { id: 21, name: "Cashew Nuts", description: "Premium quality roasted and raw cashew nuts.", image: "assets/images/cashew.png" },
    { id: 22, name: "Honey", description: "Pure organic honey sourced from forests.", image: "assets/images/honey.png" },
    { id: 23, name: "Coir Products", description: "Sustainable coir mats and ropes.", image: "assets/images/coir.png" },
];



// Get all products with pagination
app.get('/api/products', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < products.length) {
        results.hasMore = true;
    } else {
        results.hasMore = false;
    }

    results.products = products.slice(startIndex, endIndex);

    // Simulate network delay for better UX testing
    setTimeout(() => {
        res.json(results);
    }, 800);
});

// Handle contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const newSubmission = {
        id: Date.now(),
        name,
        email,
        message,
        date: new Date().toISOString()
    };

    const submissionsFile = path.join(__dirname, 'submissions.json');
    console.log("Attempting to save submission to:", submissionsFile);

    // Read existing submissions
    fs.readFile(submissionsFile, 'utf8', (err, data) => {
        let submissions = [];
        if (!err && data) {
            try {
                submissions = JSON.parse(data);
            } catch (e) {
                console.error("Error parsing submissions file:", e);
            }
        } else if (err) {
            console.log("Error reading file (might be new):", err.message);
        }

        submissions.push(newSubmission);

        // Write back to file
        fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2), (err) => {
            if (err) {
                console.error("Error saving submission:", err);
                return res.status(500).json({ error: "Failed to save submission." });
            }

            console.log("Successfully wrote to file.");
            console.log("New Contact Form Submission Saved:", newSubmission);

            // Send Desktop Notification
            notifier.notify({
                title: 'New Contact Submission',
                message: `From: ${name}\nEmail: ${email}`,
                sound: true,
                wait: true
            });

            res.json({ success: true, message: "Thank you for contacting us! We will get back to you soon." });
        });
    });
});

// Fallback to index.html for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
