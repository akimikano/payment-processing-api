const { z, ZodError } = require('zod');
const { StatusCodes } = require('http-status-codes');
const {ServerError} = require("../exceptions");

function validateMiddleware(schema) {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessages = error.errors.map((issue) => ({
                    message: `${issue.path.join('.')} is ${issue.message}`,
                }))
                res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid data', details: errorMessages });
            } else if (error instanceof ServerError) {
                throw error
            }
        }
    };
}

module.exports = validateMiddleware;
