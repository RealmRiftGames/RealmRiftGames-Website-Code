
// functions/register.js

exports.handler = async (event, context) => {
    const { username, password } = JSON.parse(event.body);
    
    // Simulate user registration logic (replace with actual logic)
    // Store user data in a database, such as MongoDB or Firebase
    
    // For demonstration, log the data to console
    console.log("New Username:", username);
    console.log("New Password:", password);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Account created successfully!" })
    };
};
