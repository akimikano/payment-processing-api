class Card {
    constructor(
        id,
        bank_account_id,
        pin_hash,
        expires_at,
        card_status,
        card_cvv,
        cardholder_name,
        activated_at,
        blocked_at,
        created_at
    ) {
        this.id = id;
        this.bank_account_id = bank_account_id;
        this.pin_hash = pin_hash;
        this.expires_at = expires_at;
        this.card_status = card_status;
        this.card_cvv = card_cvv;
        this.cardholder_name = cardholder_name;
        this.activated_at = activated_at;
        this.blocked_at = blocked_at;
        this.created_at = created_at;
    }
}

module.exports = Card;
