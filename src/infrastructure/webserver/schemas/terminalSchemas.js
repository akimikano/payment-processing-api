const { z } = require('zod');

const TerminalCreateSchema = z.object({
    password: z.string().min(8),
});


const TerminalAuthSchema = z.object({
    terminal_id: z.number(),
    password: z.string().min(8),
})

module.exports = {TerminalCreateSchema, TerminalAuthSchema};
