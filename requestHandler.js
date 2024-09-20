import donorSchema from './models/donor.model.js'

export async function Home(req,res){
    try{
        console.log(req.body);
        const{...donor}=req.body;
        const {phone}=req.body;
        const check =await donorSchema.findOne({phone})
        console.log(check);
if(!check){

    const data=await donorSchema.create({...donor});
    res.status(201).send({msg:data})

}
return res.status(400).send({msg:"data exist"})

    }catch(error){
        res.status(404).send({msg:error})
    }
}

export async function getDonors(req,res){
    try {
        const donors=await donorSchema.find();
        res.status(200).send(donors)
        
    } catch (error) {
        res.status(404).send({msg:error})
    }
}