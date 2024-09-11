class Payment {
    constructor(
        id,
        amount,
        pin_tries,
        payment_status,
        sender_account_id,
        recipient_account_id,
        confirmed_at,
        canceled_at,
        created_at
    ) {
        this.id = id;
        this.amount = amount;
        this.pin_tries = pin_tries;
        this.payment_status = payment_status;
        this.sender_account_id = sender_account_id;
        this.recipient_account_id = recipient_account_id;
        this.confirmed_at = confirmed_at;
        this.canceled_at = canceled_at;
        this.created_at = created_at;
    }
}

module.exports = Payment;
