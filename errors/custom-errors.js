class CustomAPIError extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(mesg, statusCode)
}

module.exports = { createCustomError, CustomAPIError }