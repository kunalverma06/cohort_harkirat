const express = require("express");
const zod = require("zod")
const app = express();

const schema = zod.object({
    email: zod.string().email(),
    password: zod.coerce.string()
});

app.use(express.json());
app.post('/healthcheckup', function (req, res) {
    const validate = req.body.validate;
    const response = schema.safeParse(validate);
    if (!response.success) {
        res.status(411).json({
            msg: "invalid inputs"
        })
    }
    else {
        res.send({
            response
        })
    }
});
app.listen(3000);