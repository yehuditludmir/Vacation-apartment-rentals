import City from "../models/City.js"

export const allcity=(req,res)=>{

   City.find()
   .then(city=>{
      res.status(200).send(city)
   })
   .catch(err=>{
    res.status(404).send(err)
   })
}
export const Addcity=(req,res)=>{

    const {NameCity}=req.body

    const NewCity=new City({
        NameCity,arrDepartmemtInCity:[]  
    })
    NewCity.save()
    .then(city=>{
        res.status(200).send({messagge:`Add city ${city} succed`})
    })
    .catch(err=>{
        res.status(400).send({err})
    })
}