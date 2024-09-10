class BankAccount {
    constructor(
        id,
        first_name,
        last_name,
        middle_name,
        passport_num,
        balance,
        account_num,
        account_status,
        currency,
        created_at
    ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.middle_name = middle_name;
        this.passport_num = passport_num;
        this.balance = balance;
        this.account_num = account_num;
        this.account_status = account_status;
        this.currency = currency;
        this.created_at = created_at;
    }
}

module.exports = BankAccount;
