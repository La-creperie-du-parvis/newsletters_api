import nodemailer from "nodemailer";

import readTemplateNewRecipe from "../libs/ReadTemplateNewRecipe.js";
import replaceFieldsForNewRecipe from "../libs/ReplaceFieldsForNewRecipe.js";
// import  getTypeOfNewsletters  from "../libs/GetTypeOfNewsletters.js";

// reservation

export const transporter = async (req, res) => {
    console.log(readTemplateNewRecipe);

    // console.log("getTypeOfNewsletters : ", getTypeOfNewsletters)

    // new recipe :
    const recipe = req.body.recipe;
    const description = req.body.description;
    const price = req.body.price;
    const ingredients = req.body.ingredients;
    readTemplateNewRecipe.recipe = recipe;
    readTemplateNewRecipe.description = description;
    readTemplateNewRecipe.price = price;
    readTemplateNewRecipe.ingredients = ingredients;
    // end new recipe

    // new reservation :
    const number_places = req.body.number_places;
    const date = req.body.date;
    const state = req.body.state;
    const id_customer = req.body.id_customer;
    readTemplateNewRecipe.number_places = number_places;
    readTemplateNewRecipe.date = date;
    readTemplateNewRecipe.state = state;
    readTemplateNewRecipe.id_customer = id_customer;
    // end new reservation

    // new dishes :
    const name = req.body.name;
    const id_category = req.body.id_category;
    readTemplateNewRecipe.name = name;
    readTemplateNewRecipe.id_category = id_category;

    let html = await replaceFieldsForNewRecipe(readTemplateNewRecipe);

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
        /* replaceFieldsForNewRecipe(readTemplateNewRecipe), */
        html: html,
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
