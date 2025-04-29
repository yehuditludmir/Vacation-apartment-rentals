
// import { Provider } from "react-redux";

import { AllApartment } from "./AllApartment"
import { Addcity } from "./Addcity"
// import { AllApartment } from "./AllApartment"
 import { AllCity } from "./AllCity"
import { AllCategory } from "./AllCategory"
import { AddDepart } from "./AddDepart"
import { Provider } from "react-redux"
//  import { AddDepart } from "../api"
// import { AllcCategory } from "./AllCategory"
import {BrowserRouter} from 'react-router-dom'
import store from "./store.js"
import { AddCategory } from "./AddCategory"
import { Nav } from "./Nav"
import { Routing } from "./Routing"

export const Main=()=>{
    return <>
    {/* <AllCategory></AllCategory> */}
    
   
    {/* <AllApartment></AllApartment> */}
  <Provider store={store}> 
    <BrowserRouter>
    
     <Routing></Routing>
     <Nav></Nav> 
    {/* <AddCategory></AddCategory> */}
    {/* <AllCategory></AllCategory> */}
    {/* <AllApartment></AllApartment> */}
    {/* <AddDepart></AddDepart> */}
    {/* <Addcity></Addcity>  */}
    {/* <AllCity></AllCity>  */}
     </BrowserRouter>
 </Provider>    
     </>
}