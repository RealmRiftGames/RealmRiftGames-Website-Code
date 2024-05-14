// functions/register.js

// create account

exports.handler = async (event, context) => {
    try {
        const body = JSON.parse(event.body);
        const { username, password } = body;

        // Simulate user registration logic (replace with actual logic)
        // Store user data in a database, such as MongoDB or Firebase

        // For demonstration, log the data to console
        console.log("New Username:", username);
        console.log("New Password:", password);

        // Here you would typically save the user data to your database

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Account created successfully!" })
        };
    } catch (error) {
        console.error("Error creating account:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal server error" })
        };
    }
};
