const mongoose = require('mongoose');
const initData = require("./data.js");
const Listing = require('../models/listing');

const dbUrl=process.env.ATLASDB_URL;
main().then(()=>{console.log("Connected to DB");}).catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect(dbUrl);
};

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) =>({
        ...obj,
        owner: "66c41668415d4172536bc667"
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was Initialized");
}
initDB();