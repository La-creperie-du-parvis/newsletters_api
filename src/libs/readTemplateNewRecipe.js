import fs from "fs";

const data = fs.readFileSync("./public/index.html", "utf8");

let regex = /{{(.*?)}}/g; // Search all : {{}}

let fields = {};

let match;
while ((match = regex.exec(data)) !== null) {
    const fieldValue = match[1].trim();

    fields[fieldValue] = fieldValue;
}

export default fields;
