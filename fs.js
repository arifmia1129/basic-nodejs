const fs = require("fs");

const info = {
    name: "Arif",
    title: "Web Developer (MERN)",
    mobile: "+8801849676331",
    address: {
        upazila: "Gobindaganj",
        district: "Gaibandha",
        city: "Rangpur",
        country: "Bangladesh"
    }
}


fs.writeFile("test.json", JSON.stringify(info), (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully write file");
    }
})