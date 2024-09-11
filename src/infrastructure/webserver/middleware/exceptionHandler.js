const { StatusCodes } = require('http-status-codes');
const ServerError = require("../exceptions");

function exceptionHandler(schema) {
    return (req, res, next) => {
        try {
            next();
        } catch (error) {
            if (error instanceof ServerError) {
                res
                    .status(error.status_code)
                    .json({ status_code: error.status_code, message: error.message });
            } else {
                res
                    .status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json(
                        {
                            status_code: StatusCodes.INTERNAL_SERVER_ERROR,
                            message: "Internal Server Error."
                        }
                        );
            }
        }
    };
}

module.exports = exceptionHandler;
