require("dotenv").config();
console.log('Loaded SECRET_TOKEN:', process.env.SECRET_TOKEN);
const jwt = require("jsonwebtoken");

// Test Function
const testToken = () => {
    try {
        // Generate a token
        const payload = { username: "testUser" };
        const secret = process.env.SECRET_TOKEN;
        if (!secret) {
            throw new Error("SECRET_TOKEN is not defined. Check your .env file.");
        }
        const token = jwt.sign(payload, secret, { expiresIn: "1h" });
        console.log("Generated Token:", token);

        // Verify the token
        const decoded = jwt.verify(token, secret);
        console.log("Decoded Token:", decoded);
    } catch (error) {
        console.error("Error during token test:", error.message);
    }
};

// Run the test
testToken();
