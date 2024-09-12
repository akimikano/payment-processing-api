const { StatusCodes } = require('http-status-codes');
const {ServerError} = require("../exceptions");
const e = require("express");


function findException(handler) {
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        } catch (err) {
            next(err)
        }
    }
}

function exceptionHandler() {
    return (err, req, res, next) => {
        if (err instanceof ServerError) {
            res
                .status(err.status_code)
                .json({ status_code: err.status_code, message: err.message });
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
}

module.exports = {exceptionHandler, findException};
