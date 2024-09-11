import config from "../../config";
import {PAYMENT_STATUS} from "../constants";


function paymentCheckPIN(card, payment, pin) {
    if (payment.pin_tries >= config.pinMaxTries) {
        payment.payment_status = PAYMENT_STATUS.CANCELED
        return false;
    }

    payment.pin_tries += 1
    return pin === card.pin_hash
}
