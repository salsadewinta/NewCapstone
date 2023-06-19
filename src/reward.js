const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:8181/cps")
.then(()=>{
    console.log("reward connected")
})

.catch(()=>{
    console.log("failed not connected")
})
const AntarSchema= new mongoose.Schema({
    nama:{
        type:String,
        required:true
    },
    alamat:{
        type:String,
        required:true
    },
    tanggal:{
        type:Date,
        required:true
    }
})


const recollection = new mongoose.model("reward", AntarSchema)

module.exports=  recollection