const jwt = require("jsonwebtoken");

// Creating a middleware to verify the token
const authVerify = (req, res, next) => {
    // Extract token from Authorization header (Bearer <token>)
    const token = req.headers.authorization?.split(' ')[1];

    // If token is missing, return an error
    if (!token) {
        return res.status(401).json({ message: "Token is missing" });
    }

    try {
        // Verify the token with the secret key
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);

        // Attach user info to the request object (for use in other routes)
        req.user = { userId: decodedToken.id };

        // Proceed to the next middleware or route handler
        return next();
    } catch (err) {
        console.error(`Error from server: ${JSON.stringify(err)}`);
        return res.status(401).json({ message: "Invalid or expired token." });
    }
};

module.exports = authVerify;
