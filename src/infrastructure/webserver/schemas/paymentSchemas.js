const { z } = require('zod');

const PaymentInitiateSchema = z.object({
    sender_account_id: z.number().int().min(1),
    recipient_account_id: z.number().int().min(1),
    amount: z.number().int().min(1)
});


const PaymentPinSchema = z.object({
    card_pin: z.string().length(4 ),
});


module.exports = {PaymentInitiateSchema, PaymentPinSchema};