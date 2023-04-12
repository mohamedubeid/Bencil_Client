import Joi from "joi";
const emailSchema = Joi.string()
    .min(5)
    .max(100)
    .email({
        tlds: {
            allow: [
                "com",
                "net",
                "edu",
                "myTld",
                "org",
                "gov",
                "co",
                "mil",
                "io",
            ],
        },
    })
    .required();
const usernameSchema = Joi.string()
    // .pattern(/^@[0-9a-z_]+$/)
    .min(3)
    .max(50)
    .required();
export const signupBodyValidationSchema = Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    username: usernameSchema,
    email: emailSchema,
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
    profession: Joi.array().items(Joi.string()).min(1).required(),
    birthDate: Joi.date().required(),
});

// const loginBodyValidationSchema = Joi.object({
//     usernameOrEmail: Joi.string().required(),
//     password: Joi.string().required(),
//     rememberMe: Joi.boolean(),
// });
