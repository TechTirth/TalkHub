const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error for debugging purposes

    // Set a default status code and message for the error response
    res.status(500).json({
        success: false,
        error: 'Something went wrong on the server',
    });
};

module.exports = errorHandler;
