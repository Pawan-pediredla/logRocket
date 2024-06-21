const monggose = require("mongoose")
const db = "mongodb+srv://pawannk1ng:rfdRdu1DHjzOAswn@cluster0.lmm4mc2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
monggose.set("strictQuery", true, "useNewUrlParser", true)
const connectdb  =  async ()=>{
    try{
        await monggose.connect(db);
        console.log("connected to db")

    }
    catch(err){
        console.log(`${err.message}`)
        process.exit(1)
    }
}
module.exports=connectdb