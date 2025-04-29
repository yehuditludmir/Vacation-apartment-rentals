import { useEffect, useState } from "react"
import { allcity, getByCityId, getByCodeEdvertiser } from "../api"
import './AllShowing.css'
// import { useState } from 'react';
import { getBycheapprice, getByNumBesdsId } from '../api';
import './Form.css'
// import { useEffect, useState } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import './allApartment.css'
import './AllShowing.css'
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
import { allDepart } from "../api";
import { useSelector } from "react-redux";
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';
// import ToggleOffIcon from '@mui/icons-material/ToggleOff';
// import CableIcon from '@mui/icons-material/Cable';
// import EvStationIcon from '@mui/icons-material/EvStation';
// import GasMeterRoundedIcon from '@mui/icons-material/GasMeterRounded';
// import SolarPowerRoundedIcon from '@mui/icons-material/SolarPowerRounded';
// import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';


export const MyDepart=()=>{

    // const[allcit,getallcity]=useState([])
    const[allD,setallD]=useState([])
    const cu=useSelector(a=>a.currentAdver[0]._id)
    const cuoo=useSelector(a=>a.currentAdver._id)
    useEffect(()=>{
        console.log(cu);
        console.log(cuoo);
        
        getByCodeEdvertiser(cu)
        .then(d=>{
            if (Array.isArray(d.data))
                setallD(d.data)
        })
        .catch(err=>{
            console.log("err:city");
            
        })
    },[])

    // const sc=(id)=>{
    //     console.log("qeeeeeee");
        
    //     console.log(id);
        

    // getByCityId(id)
    //  .then(da=>{
    //     if (Array.isArray(da.data)){
    //         console.log(da.data);
    //         setallD(da.data)
    //         console.log(allD);
    //     }
    // })
    // .catch(err=>{
    //     console.log(err);
    // })
    // }

    return<>
    {/* {allcit && <table>
       <th>שם עיר</th>
    {allcit.map((item,index)=>
    <button onClick={() =>sc(item._id)} v>{item.NameCity}</button>
)}
    
    </table>} */}
    <h1>כל הדירות</h1>
   {allD.length>0 && 
    <div id='cardDiv'> 
    {allD.map((item,index)=><>
    <Card key={index} sx={{ maxWidth: 345 }} id="ccard">
     <CardMedia
        sx={{ height:250}}
        image={process.env.PUBLIC_URL +`/Pictures/${item.image}.jpg`}
        title="Apartment"
      />
      <CardContent >     
        <Typography  gutterBottom variant="h5" component="div"  >
        <h5>{item.NameDepart}</h5>
    <h5>{item.CodeCity?.NameCity || "עיר לא זמינה"}</h5>
    <h5>{item.CodeCategory?.NameCategory || "קטגוריה לא זמינה"}</h5>
    <h5>{item.CodeAdvertiser?.Email || "מייל לא זמין"}</h5>
    <h5>{item.CodeAdvertiser?.Phone || "טלפון לא זמין"}</h5>
    <h5>{item.CodeAdvertiser?.otherPhone || "טלפון נוסף לא זמין"}</h5>
    <h5>תיאור: {item.DepartDescreption}</h5>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions  className='but'>
      </CardActions>
    </Card>
  </>)}
  </div>
}
    </>

}

