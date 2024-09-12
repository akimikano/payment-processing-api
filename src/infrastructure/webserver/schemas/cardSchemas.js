const { z } = require('zod');

const CardCreateSchema = z.object({
    bank_account_id: z.number().int().min(1),
    card_pin: z.string().length(4)
});


module.exports = CardCreateSchema;
