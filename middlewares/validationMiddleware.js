/* get Joi schema and compare the body request data
 if valid error == null
    continue to next middleware/controller
* */

const validate = (schema) => {
    return (req, res, next) => {

        const { error } = schema.validate(req.body);
        const valid = error == null;
        if (valid) { next(); }
        else {
            const { details } = error;
            const message = details.map(i => i.message).join(',')
            res.status(422).json({ error: message })
        }
    }
}
module.exports = { validate };