import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { allcCategory, getDepartById, updateDepart } from "../api"
import { useSelector } from "react-redux"

 
 export const UpdateDepart=()=>{

    const params = useParams()
    const  depa  = params
    const [tid,settid]=useState({})
    console.log("000000000000");
    console.log(depa);
    console.log(depa.id);

    const[allD,setallD]=useState([])
    const currentA=useSelector(z=>z.currentAdver)

     useEffect(()=>{
              
              allcCategory()
              .then(d=>{
                  if (Array.isArray(d.data))
                    setallD(d.data)
              })
              .catch(err=>{
                  console.log("error!!!");
                  
              })
      
          },[])
    
    

const send=(event)=>{

    const dp = {
        NameDepart: event.target[0].value,
        DepartDescreption: event.target[1].value,
        // // image:file,
        //  CodeCategory:event.target[2].value,
         address:event.target[2].value,
        Numbeds:event.target[3].value,
        addotions:event.target[4].value,
        priceDepart:event.target[5].value,
         CodeAdvertiser:event.target[6].value
      }
      const filteredDepart = Object.fromEntries(
        Object.entries(dp).filter(([key, value]) => value !== "")
    );

   console.log(dp);
    updateDepart(depa.id,filteredDepart)
    .then(d=>{
        console.log("gooooooooooooooood");
        console.log(d.data);    
    })
    .catch(err=>{
        console.log(err);
        
    })
}
    return<>
    {/* NameDepart,DepartDescreption,image,CodeCategory,CodeCity,
   address,Numbeds,addotions,priceDepart,CodeAdvertiser */}
    <h1>עדכון דירה</h1>
    <div class="container">
  <form onSubmit={(e) => send(e)} >
    <label for="dname">שם הדירה:</label>
    <input type="text" id="dname" name="dname"  />

    <label for="ddesc">תיאור:</label>
    <input type="text" id="ddesc" name="ddesc"/>


    <label for="address">כתובת:</label>
    <input type="text" id="address" name="address"/>

    <label for="numbeds"> מספר מיטות :</label>
    <input type="number" id="numbeds" name="numbeds"/>

    <label for="addotions">תוספות:</label>
    <input type="text" id="addotions" name="addotions" />

    <label for="price"> מחיר:</label>
    <input type="number" id="price" name="price" />

    <label for="cadver">קוד מפרסם:</label>
    <input type="text" id="cadver" name="cadver" value={currentA._id}/>

    <input type={'submit'}></input>
</form> 
 </div> 
    </>

 }