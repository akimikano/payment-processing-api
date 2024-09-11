const { StatusCodes } = require('http-status-codes');
const ServerError = require("../exceptions");

function exceptionHandler() {
    return (req, res, next) => {
        console.log("-------")

        try {
            console.log(1)
            next();
        } catch (error) {
            console.log(2)
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
