/**
 * ofcourse there should be errors that we want to save in a logger with more details of the problem.
 * and errors that we want to mask and return to the user. 
 * those errors are just for an example.
 */
const errorsMessages = {
    'FAILED_TO_CREATE_ORDER': 'error occurred during create order crud operation',
    'FAILED_TO_GET_ALL_ORDERS': 'error occurred during get all orders crud operation',
    'FAILED_TO_GET_LAST_DAY_ORDERS': 'error occurred during get last day orders operation'


};

module.exports = { errorsMessages };