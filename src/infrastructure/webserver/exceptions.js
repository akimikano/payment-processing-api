const {StatusCodes} = require("http-status-codes");


class ServerError extends Error {
    constructor(message = "Internal Server Error.", status_code = StatusCodes.INTERNAL_SERVER_ERROR) {
        super(message);
        this.name = "ServerError";
        this.status_code = status_code;
    }
}


class UserException extends ServerError {
    constructor(message = "Bad Request.", status_code = StatusCodes.BAD_REQUEST) {
        super(message, status_code);
        this.name = "UserException";
    }
}


class NotFound extends UserException {
    constructor(message = "Not Found.", status_code) {
        super(message, status_code);
        this.name = "NotFound";
        this.status_code = StatusCodes.NOT_FOUND;
    }
}


module.exports = {ServerError, UserException, NotFound};

