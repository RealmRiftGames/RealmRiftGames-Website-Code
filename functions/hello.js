exports.handler = async (event, context) => {

    const data = { Hello: 'Hello World' };

    return {
        statuscode: 200,
        body: JSON.stringify(data),
    };
};

