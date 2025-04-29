import { useState } from 'react';
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
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';
// import ToggleOffIcon from '@mui/icons-material/ToggleOff';
// import CableIcon from '@mui/icons-material/Cable';
// import EvStationIcon from '@mui/icons-material/EvStation';
// import GasMeterRoundedIcon from '@mui/icons-material/GasMeterRounded';
// import SolarPowerRoundedIcon from '@mui/icons-material/SolarPowerRounded';
// import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';


export const Price=()=>{
   const[allD,setallD]=useState([])
    const send=(event)=>{

        event.preventDefault();
        getBycheapprice(event.target[0].value)
        .then(d=>{
            if (Array.isArray(d.data)){
            console.log(d.data);
            setallD(d.data)}
        })
        .catch(err=>{
            console.log(err);
            
        },[])
    }
   return<>
 <div class="container">
    <form onSubmit={(e) => send(e)}>
    <label for="nb"> המחיר הרצוי  </label>
    <input type="text" id="nb" name="nb" />

    <input type={'submit'}></input>

    </form>
</div>
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
        <h5> {item.NameDepart}</h5>
       <h5>תיאור:{item.DepartDescreption}</h5>
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

