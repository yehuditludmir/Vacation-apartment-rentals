import { useEffect, useState } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import './allApartment.css'
// import './AllShowing.css'
import Typography from '@mui/material/Typography';
// import { useDispatch, useSelector } from 'react-redux';
// import './Nav.css'
// import './ImgMediaCard.css'
// import store from './store';
// import  Learnmore  from './Learnmore';
// import { Outlet, useNavigate } from "react-router-dom"
// import { setCurrentCar, setPage } from './state_action';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
//import { useState } from 'react';
import { allDepart, DelteDepart } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { log } from "console";
import { useNavigate } from "react-router";
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';
// import ToggleOffIcon from '@mui/icons-material/ToggleOff';
// import CableIcon from '@mui/icons-material/Cable';
// import EvStationIcon from '@mui/icons-material/EvStation';
// import GasMeterRoundedIcon from '@mui/icons-material/GasMeterRounded';
// import SolarPowerRoundedIcon from '@mui/icons-material/SolarPowerRounded';
// import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import swal from "sweetalert";


export const AllApartment=()=>{
const nav=useNavigate()
const[allApart, setApart]=useState([])
const[selected, setselected]=useState()

const currentA=useSelector(x=>x.currentAdver)
useEffect(()=>{
    allDepart()
    .then(x=>{
            console.log("succes all");
            if (Array.isArray(x.data)){
                  setApart(x.data) 
                  console.log(x.data);
               }
        })
        .catch(err=>
            {
                console.log(err);})
},[])
const del=(item)=>{

  console.log(currentA);
  console.log(item);
  
  DelteDepart(item,currentA[0])
  .then(d=>{
    console.log("delete!!!");
    // swal('Delete','דירה זו אינה שייכת לך','success')
  }
  )
  .catch(err=>{
    // swal('oops','דירה זו אינה שייכת לך','error')
    console.log(err);  
  })

}
 const upd=(item)=>{
//  console.log('item.CodeAdvertiser._id');
 console.log('currentA');
 console.log(currentA[0]._id);
 console.log(item.CodeAdvertiser);
 
  if(item.CodeAdvertiser._id!=currentA[0]._id)
     swal('oops','דירה זו אינה שייכת לך','error')
  else
    nav(`/UpdateDepart/${item._id}`)

 }


  return( <>
    <div id='cardDiv'> 
    {allApart && allApart.map((item,index)=><>
   
    <Card key={index} sx={{ maxWidth: 345 }} id="ccard">
     <CardMedia
        sx={{ height:250}}
          image={process.env.PUBLIC_URL +`/Pictures/${item.image}.jpg`}
        // image={item.image}
        
        title="Apartment"
      />
       {/* <img id='imgcar'src={`${process.env.PUBLIC_URL}/Pictures/תמונה8.jpg`}></img> */}
      <CardContent >  
        
        <Typography  gutterBottom variant="h5" component="div"  >
        {/* <h5> {item.NameDepart}</h5>
        <h5>{item.CodeCity.NameCity}</h5>
        <h5>{item.CodeCategory.NameCategory}</h5>
        <h5>{item.CodeAdvertiser.Emaill}</h5>
        <h5>{item.CodeAdvertiser.Phone}</h5>
        <h5>{item.CodeAdvertiser.otherPhone}</h5> */}
        <CardContent>

  <Typography gutterBottom variant="h5" component="div">
 
    <h5>{item.NameDepart}</h5>
    <h5>{item.CodeCity?.NameCity || "עיר לא זמינה"}</h5>
    <h5>{item.CodeCategory?.NameCategory || "קטגוריה לא זמינה"}</h5>
    <h5>{item.CodeAdvertiser?.Email || "מייל לא זמין"}</h5>
    <h7>{item.CodeAdvertiser?.Phone || "טלפון לא זמין"}</h7>
    <br></br>
    <h7>{item.CodeAdvertiser?.otherPhone || "טלפון נוסף לא זמין"}</h7>
    <h5>תיאור: {item.DepartDescreption}</h5>
    <button onClick={() => del(item._id)}>מחיקה</button>
    <button onClick={() => upd(item)}>עדכון</button>
  </Typography>
</CardContent>

         {/* NameDepart,DepartDescreption,image,CodeCategory,CodeCity,
   address,Numbeds,addotions,priceDepart,CodeAdvertiser */}
        <h5></h5>
        {/* <h5>{item.CodeAdvertiser._id}</h5> */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions  className='but'>
      </CardActions>
    </Card>
  </>)}
  </div>
    </>);
}