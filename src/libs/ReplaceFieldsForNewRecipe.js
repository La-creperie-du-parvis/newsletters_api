import fs from "fs";

async function data(bodyFields) {
    console.log("bodyFields : ", bodyFields);
    return new Promise((resolve, reject) => {
        fs.readFile(`./public/reservation.html`, "utf8", (err, html) => {
            if (err) reject(err);

            for (let key in bodyFields) {
                let regex = new RegExp(`{{${key}}}`, "g");
                html = html.replace(regex, bodyFields[key]);
            }

            resolve(html);
        });
    });
}

export default data;
