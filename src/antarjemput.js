const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:8181/cps")
.then(()=>{
    console.log("antarjemput connected")
})

.catch(()=>{
    console.log("failed not connected")
})
const AntarSchema= new mongoose.Schema({
    nama:{
        type:String,
        required:true
    },
    berat:{
        type:String,
        enum : ['kresek','karung', 'lbh'],
        default: 'kresek',
        required:true
    },
    alamat:{
        type:String,
        required:true
    },
    tanggal:{
        type:Date,
        required:true
    },
    jenis:{
        type:String,
        required:true
    },
    total_bayar:{
        type:Number
    }
})


const collections = new mongoose.model("trasaksiantar", AntarSchema)

module.exports=  collections