// functions/register.js

// create account

exports.handler = async (event, context) => {
    const { username, password } = JSON.parse(event.body);
    
    try {
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
