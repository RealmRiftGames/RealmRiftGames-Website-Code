// functions/register.js

exports.handler = async (event, context) => {
    try {
        const { username, password } = JSON.parse(event.body);

        // Replace this with your actual user registration logic
        // Store user data in a database, such as MongoDB or Firebase

        // For demonstration, log the data to console
        console.log("New Username:", username);
        console.log("New Password:", password);

        // Replace the response with your desired logic
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Account created successfully!" })
        };
    } catch (error) {
        console.error("Error:", error.message);

        // Return an error response
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" })
        };
    }
};
