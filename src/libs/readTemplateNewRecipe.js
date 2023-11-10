import fs from "fs";

const data = fs.promises.readFile("./public/dishes.html", "utf8")
 .then(data => {
   let regex = /{{(.*?)}}/g; // Search all in html file: {{}}
   let fields = {};
   let match;

   while ((match = regex.exec(data)) !== null) {
     const fieldValue = match[1].trim();
     fields[fieldValue] = fieldValue;
   }

    //  console.log(fields);
     return fields
 })
 .catch(err => {
   console.error(err);
 });

export default data;