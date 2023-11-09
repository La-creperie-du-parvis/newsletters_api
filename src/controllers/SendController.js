import nodemailer from "nodemailer";

import readTemplateNewRecipe from "../libs/readTemplateNewRecipe.js";

export const transporter = async (req, res) => {
    console.log(readTemplateNewRecipe);
    const recipe = req.body.recipe;
    const description = req.body.description;
    const price = req.body.price;
    const ingredient = req.body.ingredient;

    const maillist = [
        "maxlestage@icloud.com",
        // "guillaumedestiny@outlook.fr",
        "maxlestage+02@icloud.com",
    ];

    let transporter = nodemailer.createTransport({
        service: "outlook",
        auth: {
            user: "guillaumedestiny@outlook.fr",
            pass: "Guigui337*",
        },
    });

    let mailOptions = {
        from: "guillaumedestiny@outlook.fr",
        to: maillist,
        subject: "La Crêperie du Parvis",
        html: ``,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send("Error sending email");
        } else {
            console.log("Email sent: " + info.response);
            res.status(204).send("");
        }
    });
};
