// import { useEffect, useState } from 'react';
// import { addDepart, allcCategory, allcity } from '../api';
// import './Form.css'
// import { useSelector } from 'react-redux';

// export const AddDepart=()=>{

//   const[allcit,getallcity]=useState([])
//   const[allD,setallD]=useState([])
//   const currentA=useSelector(z=>z.currentAdver)
//   useEffect(()=>{
//           allcity()
//           .then(d=>{
//               if (Array.isArray(d.data))
//                  getallcity(d.data)
//           })
//           .catch(err=>{
//               console.log("err:city");
              
//           })

//           allcCategory()
//           .then(d=>{
//               if (Array.isArray(d.data))
//                 setallD(d.data)
//           })
//           .catch(err=>{
//               console.log("error!!!");
              
//           })
  
//       },[])
  
// const send=(event)=>{
//   event.preventDefault();
//   // const [file, setFile] = useState();

//   // const handleFileChange = (event) => {
//   //     setFile(event.target.files[0]); 
//   // };
  
//               const d = {
//                 NameDepart: event.target[0].value,
//                 DepartDescreption: event.target[1].value,
//                 // image:file,
//                 CodeCategory:event.target[2].value,
//                 CodeCity:event.target[3].value,
//                 address:event.target[4].value,
//                 Numbeds:event.target[5].value,
//                 addotions:event.target[6].value,
//                 priceDepart:event.target[7].value,
//                 CodeAdvertiser:event.target[8].value

//               }

//                addDepart(d).then(z=>{
//                   console.log("צלח");  
//               })
//               .catch(err=>{
//                   console.log(err);  
//               })

//      }
    
//    return<>
//    {/* NameDepart,DepartDescreption,image,CodeCategory,CodeCity,
//    address,Numbeds,addotions,priceDepart,CodeAdvertiser */}
// <div class="container">
//   <form onSubmit={(e) => send(e)} >
//     <label for="dname">שם הדירה:</label>
//     <input type="text" id="dname" name="dname" />

//     <label for="ddesc">תיאור:</label>
//     <input type="text" id="ddesc" name="ddesc"/>

//     {/* <label for="fname">תמונה:</label>
//     <input type="file" id="fname" name="firstname" placeholder="Your name.."/> */}

//     <label for="ccode">קוד קטגוריה:</label>
//     {/* <input type="text" id="ccode" name="ccode"/> */}
//     <select id="country" name="country">
//     {allD && 
//     allD.map((item,index)=>
//     <option >{item.NameCategory}</option>
// )}
//   </select>
//     <label for="citycode">קוד עיר :</label>
//     {/* <input type="text" id="citycode" name="citycode"/> */}
//     <select id="country" name="country">
//     {allcit && 
//     allcit.map((item,index)=>
//     <option >{item.NameCity}</option>
// )}
//     </select>

//     <label for="address">כתובת:</label>
//     <input type="text" id="address" name="address"/>

//     <label for="numbeds"> מספר מיטות :</label>
//     <input type="number" id="numbeds" name="numbeds"/>

//     <label for="addotions">תוספות:</label>
//     <input type="text" id="addotions" name="addotions" />

//     <label for="price"> מחיר:</label>
//     <input type="number" id="price" name="price" />

//     <label for="cadver">קוד מפרסם:</label>
//     <input type="text" id="cadver" name="cadver" value={currentA._id}/>

//     <label for="country">תמונה:</label>

//     <input type={'submit'}></input>
// </form> 
//  </div> 
//     </>
// }

import { useEffect, useState } from "react";
import { addDepart, allcCategory, allcity } from "../api";
import "./Form.css";
import { useSelector } from "react-redux";

export const AddDepart = () => {
  const [allCities, setAllCities] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [file, setFile] = useState(null); // לשמירת קובץ התמונה
  const currentAdvertiser = useSelector(x=>x.currentAdver);

  // שליפת נתונים מהשרת
  useEffect(() => {
    allcity()
      .then((response) => {
        if (Array.isArray(response.data)) setAllCities(response.data);
      })
      .catch((err) => {
        console.error("Error fetching cities:", err);
      });

    allcCategory()
      .then((response) => {
        if (Array.isArray(response.data)) setAllCategories(response.data);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  // טיפול בטופס ושליחה לשרת
  const send = (event) => {
    event.preventDefault();
console.log(currentAdvertiser);

    // const formData = new FormData();

    // formData.append("NameDepart", event.target["dname"].value);
    // formData.append("DepartDescreption", event.target["ddesc"].value);
    // formData.append("CodeCategory", event.target["ccode"].value);
    // formData.append("CodeCity", event.target["citycode"].value);
    // formData.append("address", event.target["address"].value);
    // formData.append("Numbeds", event.target["numbeds"].value);
    // formData.append("addotions", event.target["addotions"].value);
    // formData.append("priceDepart", event.target["price"].value);
    // formData.append("CodeAdvertiser", currentAdvertiser._id);
    const formData = {
      "NameDepart": event.target["dname"].value,
    "DepartDescreption":event.target["ddesc"].value,
   "CodeCategory": event.target["ccode"].value,
   "CodeCity": event.target["citycode"].value,
  "address":event.target["address"].value,
    "Numbeds":event.target["numbeds"].value,
    "addotions": event.target["addotions"].value,
   "priceDepart":event.target["price"].value,
   "CodeAdvertiser": currentAdvertiser[0]?._id,
   "image":event.target["image"].value
                      // NameDepart: event.target[0].value,
                      // DepartDescreption: event.target[1].value,
                      // // image:file,
                      // CodeCategory:event.target[2].value,
                      // CodeCity:event.target[3].value,
                      // address:event.target[4].value,
                      // Numbeds:event.target[5].value,
                      // addotions:event.target[6].value,
                      // priceDepart:event.target[7].value,
                      // CodeAdvertiser:event.target[8].value
      
                    }
    // if (file) {
    //   formData.append("image", file); // הוספת התמונה ל-FormData
    // }

    addDepart(formData)
      .then(() => {
        console.log("הדירה נוספה בהצלחה!");
      })
      .catch((err) => {
        console.error("Error adding apartment:", err);
      });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={send} encType="multipart/form-data">
          <label htmlFor="dname">שם הדירה:</label>
          <input type="text" id="dname" name="dname" required />

          <label htmlFor="ddesc">תיאור:</label>
          <input type="text" id="ddesc" name="ddesc" required />

          <label htmlFor="ccode">קטגוריה:</label>
          <select id="ccode" name="ccode" required>
            {allCategories.map((item, index) => (
              <option key={index} value={item._id}>
                {item.NameCategory}
              </option>
            ))}
          </select>

          <label htmlFor="citycode">עיר:</label>
          <select id="citycode" name="citycode" required>
            {allCities.map((item, index) => (
              <option key={index} value={item._id}>
                {item.NameCity}
              </option>
            ))}
          </select>

          <label htmlFor="address">כתובת:</label>
          <input type="text" id="address" name="address" required />

          <label htmlFor="numbeds">מספר מיטות:</label>
          <input type="number" id="numbeds" name="numbeds" required />

          <label htmlFor="addotions">תוספות:</label>
          <input type="text" id="addotions" name="addotions" />

          <label htmlFor="price">מחיר:</label>
          <input type="number" id="price" name="price" required />

          <label htmlFor="image">תמונה:</label>
          <input type="text" id="image" name="image" />
          {/* <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          /> */}

          <input type="submit" value="שלח" />
        </form>
      </div>
    </>
  );
};