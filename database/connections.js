const mongoose=require('mongoose')

mongoose.connect(process.env.baseUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("____Mongodb Atlas Connected_____");
}).catch((err)=>{
    console.log(`....Mongodb connection error....${err}`);
})