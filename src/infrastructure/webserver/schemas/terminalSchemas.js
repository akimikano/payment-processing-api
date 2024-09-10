const { z } = require('zod');

const TerminalCreateSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
});

module.exports = TerminalCreateSchema;
