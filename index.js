let api = "Customer API Version ";

exports.handler = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify( api + context.functionVersion )
    };
    callback(null, response);
};


let api = "Location API Version ";

exports.handler = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify( api + context.functionVersion )
    };
    callback(null, response);
};


let api = "Score API Version ";

exports.handler = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify( api + context.functionVersion )
    };
    callback(null, response);
};