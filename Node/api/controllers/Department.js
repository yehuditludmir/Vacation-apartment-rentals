import advertiser from "../models/advertiser.js"
import Category from "../models/Category.js"
import City from "../models/City.js"
import Department from "../models/Department.js"

export const allDepart=(req,res)=>{

    Department.find()
    .populate({path:'CodeCategory',select:'NameCategory'})
    .populate({path:'CodeCity',select:'NameCity'})
    .populate({path:'CodeAdvertiser',select:'Email Phone otherPhone'})
    .then(dep=>{
       res.status(200).send(dep)
    })
    .catch(err=>{
      res.status(404).send({error:err})
    })
 }
 export const AddDepart=(req,res)=>{
 
     const {NameDepart,DepartDescreption,image,DepartPicture,CodeCategory,CodeCity,address
        ,Numbeds,addotions,priceDepart,CodeAdvertiser}=req.body
 
     const Newdepart=new Department({
        NameDepart,
        DepartDescreption,
        DepartPicture,
        image,
        CodeCategory,
        CodeCity,
        address,
        Numbeds,
        addotions,
        priceDepart,
        CodeAdvertiser
              
     })
     console.log("qppppppppppp");
     
     Newdepart.save()
     .then(async departm=>{
        let x = await Category.findByIdAndUpdate(CodeCategory, { $push:{aaDepartInCat:departm._id}})
        let y = await City.findByIdAndUpdate(CodeCity, { $push:{arrDepartmemtInCity:departm._id}})
        let w= await advertiser.findByIdAndUpdate(CodeAdvertiser ,{$push :{ArrDepartment:departm._id}})
        if(!x || !y ||!w)
            return res.status(200).send({message: `add ${departm} succed by the update of the arr failed`})
        res.status(200).send({message:`succedd to add ${departm} and update`})
      //  let z = await Category.findByIdAndUpdate(CodeCategory, {$push: {aaDepartInCat:Department._id}}
      console.log(departm.image);
     })
     .catch(err=>{
         res.status(400).send({error:err})
     })
 } 
 export const DelteDepart=(req,res)=>{

    const {_id} = req.query

    Department.findByIdAndDelete(_id)
        .then(async departm=>{
            let x = await Category.findByIdAndUpdate(departm.CodeCategory, { $pull:{aaDepartInCat:departm._id}})
            let y = await City.findByIdAndUpdate(departm.CodeCity, { $pull:{arrDepartmemtInCity:departm._id}})
            let w= await advertiser.findByIdAndUpdate(departm.CodeAdvertiser ,{$pull :{ArrDepartment:departm._id}})

            if(!x || !y ||!w)
                return res.status(200).send({message: `delete ${departm} succed by the update of the arr failed`})
            res.status(200).send({message:`delete to add ${departm} and update`})
    })
    .catch(err=>
        res.status(500).send({error:`delete  failed!`})
    )
 }
 
 export const updateDepart=(req,res)=>{
    console.log(req.params);
    const{id}=req.params
    console.log(id);
    
    Department.findByIdAndUpdate(id,req.body)
    .then(async d=>{
         if(req.body.CodeCategory){
            let x = await Category.findByIdAndUpdate(req.body.CodeCategory, { $push:{aaDepartInCat:d._id}})
            let y = await Category.findByIdAndUpdate(d.Category, { $pull:{aaDepartInCat:d._id}})
        
    if(!x || !y )
        return res.status(200).send({message:`succes to update and failed${d}`})}
    res.status(200).send({message:`succes to update and update${d}`})
 })
    .catch(err=>{
        res.status(404).send({error:`update ${err} failed`})
    })
 } 
 export const getDepartById=(req,res)=>{
    Department.findById(req.params.id)
        // .populate({path:'CodeCategory',select:'NameCategory'})
        // .populate({path:'CodeCity',select:'NameCity'})
        // .populate({path:'CodeAdvertiser',select:'Email Phone otherPhone'})
    .then(d=>{
        if(!d)
            return  res.status(200).send(d)
        res.status(200).send(d)
      
    })
    .catch(err=>{
        res.status(400).send(err)
    })

 }
 export const getByCategoryId=(req,res)=>{
    Category.findById(req.params.id)
    .then(d => {
        if (!d) {
          return res.status(200).send({ message: `Not found city` });
        }

        const promises = d.aaDepartInCat.map(item => {
          return Department.findById(item)
            .populate({ path: 'CodeCategory', select: 'NameCategory' })
            .populate({ path: 'CodeCity', select: 'NameCity' })
            .populate({ path: 'CodeAdvertiser', select: 'Email Phone otherPhone' })
            .then(data => {
              if (!data) {
                //    return  {  data }
                return res.status(404).send('not found')
                // res.status(404).send( data)
              }
            //   res.status(200).send( data )
                 return (data)   ;
            // return res.status(200).send({ data })
            })
            .catch(err => {
                res.status(500).send({ error: ` oof ${err.massege}` })
            });
        });

        Promise.all(promises)
          .then(results => {
            res.status(200).send(results);
          })
          .catch(err => {
            res.status(400).send({ error: err });
          });
      })
      .catch(err => {
        res.status(400).send({ error: err.message });
      }); 
   
 };
//  export const getByCityId=(req,res)=>{
    
//     City.findById(req.params.id)
//     .then(d=>{
//          if(!d)
//             return res.status(200).send({massege:`Not found city`})
//          console.log(d.arrDepartmemtInCity);
//          const fn = (item) => {
//             console.log(item);
            
//             Department.findById(item)
//         .populate({path:'CodeCategory',select:'NameCategory'})
//         .populate({path:'CodeCity',select:'NameCity'})
//         .populate({path:'CodeAdvertiser',select:'Email Phone otherPhone'})
//     .then(data=>{
//         if(!data)
//             return  res.status(200).send({massege:`Not found Depart`})
//         res.status(200).send({massege:`found ${data}`})
      
//     })
//     .catch(err=>{
//         res.status(400).send({error:err})
//     })
// }
//    d.arrDepartmemtInCity.map( fn ); 
//         //  d.arrDepartmemtInCity.find()
//         // .populate({path:'CodeCategory',select:'NameCategory'})
//         // .populate({path:'CodeCity',select:'NameCity'})
//         // .populate({path:'CodeAdvertiser',select:'Email Phone otherPhone'})
//         // .then(r=>{
//             // if(!r)
//                 // return res.status(200).send({message:`אין לעיר זו דירה`})
//             // res.status(200).send({massege:`found ${d}`})
//         // })
        
//         // res.status(400).send({massege:`failed`})
//     })
//     .catch(err=>{
//         res.status(400).send({error:err.message})
//     }) 
   
//  }
export const getByCityId = (req, res) => {
    City.findById(req.params.id)
      .then(d => {
        if (!d) {
          return res.status(200).send({ message: `Not found city` });
        }
  
        const promises = d.arrDepartmemtInCity.map(item => {
          return Department.findById(item)
            .populate({ path: 'CodeCategory', select: 'NameCategory' })
            .populate({ path: 'CodeCity', select: 'NameCity' })
            .populate({ path: 'CodeAdvertiser', select: 'Email Phone otherPhone' })
            .then(data => {
              if (!data) {
                return { message: `Not found department for item ${item}` };
              }
              return (data);
            })
            .catch(err => {
              return { error: err.message }; 
            });
        });

        Promise.all(promises)
          .then(results => {
            res.status(200).send(results);
          })
          .catch(err => {
            res.status(400).send({ error: err.message });
          });
      })
      .catch(err => {
        res.status(400).send({ error: err.message });
      });
  };
//  ????????????    
 export const getByNumBesdsId=(req,res)=>{
    Department.find()
    .populate({path:'CodeCategory',select:'NameCategory'})
    .populate({path:'CodeCity',select:'NameCity'})
    .populate({path:'CodeAdvertiser',select:'Email Phone otherPhone'})
    .where({$and:[{Numbeds:{$gte:req.params.num}}] })
    .then(d=>{
        if(d.length==0)
            return res.status(200).send({massege:`Not found`})
        res.status(200).send(d) 
    })
    .catch(err=>{
        res.status(400).send({error:err})
    }) 
 }
 
 
 export const getBycheapprice=(req,res)=>{
    Department.find()
    .populate({path:'CodeCategory',select:'NameCategory'})
    .populate({path:'CodeCity',select:'NameCity'})
    .populate({path:'CodeAdvertiser',select:'Email Phone otherPhone'})
    .where({$and:[{priceDepart:{$lte:req.params.num}}] })
    .then(d=>{
        if(d.length==0)
            return  res.status(200).send({massege:`Not found ${d}`})
        res.status(200).send(d)
      
    })
    .catch(err=>{
        res.status(400).send(err)
    }) 
   
 }
 export const getByCodeEdvertiser=(req,res)=>{
    advertiser.findById(req.params.id)
    .then(d => {
        if (!d) {
          return res.status(200).send({ message: `Not found city` });
        }
  
        const promises = d.ArrDepartment.map(item => {
          return Department.findById(item)
            .populate({ path: 'CodeCategory', select: 'NameCategory' })
            .populate({ path: 'CodeCity', select: 'NameCity' })
            .populate({ path: 'CodeAdvertiser', select: 'Email Phone otherPhone' })
            .then(data => {
              if (!data) {
                return { message: `Not found department for item ${item}` };
              }
              return (data );
            })
            .catch(err => {
              return { error: err.message }; 
            });
        });

        Promise.all(promises)
          .then(results => {
            res.status(200).send(results);
          })
          .catch(err => {
            res.status(400).send({ error: err.message });
          });
      })
      .catch(err => {
        res.status(400).send({ error: err.message });
      });
 };

