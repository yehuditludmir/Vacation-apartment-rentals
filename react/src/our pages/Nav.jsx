import { Link, NavLink } from 'react-router-dom'
import { Outlet, useNavigate } from "react-router-dom"
import './Nav.css'
import { useDispatch, useSelector } from 'react-redux'
//  import Grouped from './Grouped'
//  import FreeSolo from './BasicTextFields'
//  import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
//  import SearchIcon from '@mui/icons-material/Search';
import BasicSelect from './BasicSelect'
import Adds from './adds'

// import { setCurrentBox } from './state_action'



export const Nav=()=>{

     const adver = useSelector(x =>x.currentAdver)
   
  
    return<>
    <div className="divnav">
    {adver.Email && <label id='username'>שלום ל{adver.Email}:)</label>}
        <NavLink to={'AllApartment'} className='menu'>דירות הנופש</NavLink>
        <NavLink to={'Enter'} className='menu'> כניסה</NavLink>
        <NavLink to={'Login'} className='menu'>הרשמה</NavLink>
        <NavLink to={'Home'} className='menu'>דף הבית</NavLink>
    
      <BasicSelect></BasicSelect>
     <Adds></Adds>
        {/* <Grouped className='menu'></Grouped> */}
        {/* <YoutubeSearchedForIcon onClick={newSearch}  ></YoutubeSearchedForIcon> */}
         {/* < SearchIcon></SearchIcon> */}
     
     
    </div>
    </>
}



