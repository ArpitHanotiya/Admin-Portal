const validate = (schema) => async(req, res, next) => {
    try {
        // if whatever data user has written is matched with our schema
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = "fill the input details properly";
        const extraDetails = err.errors[0].message;

        const error = {
            status,
            message,
            extraDetails,
        };

        console.log(error);
        // res.status(400).json({msg : message});
        next(error);
    }
};

module.exports = validate;