import fs from "fs";

function data(bodyFields) {
    console.log("bodyFields : ", bodyFields);
    let html = fs.readFileSync("./public/index.html", "utf8");

    for (let key in bodyFields) {
        let regex = new RegExp(`{{${key}}}`, "g");
        html = html.replace(regex, bodyFields[key]);
    }

    return html;
}

export default data;
