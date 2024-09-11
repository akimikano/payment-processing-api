const { z, ZodError } = require('zod');
const { StatusCodes } = require('http-status-codes');

function validateMiddleware(schema) {
    return (req, res, next) => {
        try {
            console.log(req.body)
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessages = error.errors.map((issue) => ({
                    message: `${issue.path.join('.')} is ${issue.message}`,
                }))
                res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid data', details: errorMessages });
            } else {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
            }
        }
    };
}

module.exports = validateMiddleware;
