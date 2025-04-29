import { Route, Routes } from "react-router-dom"
import { AddCategory } from "./AddCategory"
import { Addcity } from "./Addcity"
import { AddDepart } from "./AddDepart"
import { AllApartment } from "./AllApartment"
import { AllCategory } from "./AllCategory"
import { AllCity } from "./AllCity"
import { Enter } from "./Enter"
import { Home } from "./Home"
import { Login } from "./Login"
import { NumBeds } from "./NumBeds"
import { Price } from "./Price"
import { UpdateDepart } from "./UpdateDepart"
import { MyDepart } from "./MyDepart"
import { Allcityid } from "./Allcityid"

export const Routing = () => {
    return <>
        <Routes>
            <Route path="AddCategory" element={<AddCategory></AddCategory>}></Route>
            <Route path="Addcity" element={<Addcity></Addcity>}></Route>
            <Route path="AddDepart" element={<AddDepart></AddDepart>}></Route>
            <Route path="AllApartment" element={<AllApartment></AllApartment>}></Route>
            <Route path="AllCategory" element={<AllCategory></AllCategory>}></Route>
            <Route path="AllCity" element={<AllCity></AllCity>}></Route>
            <Route path="Enter" element={<Enter></Enter>}></Route>
            <Route path="Login" element={<Login></Login>}></Route>
            <Route path="Home" element={<Home></Home>}></Route>
            <Route path="NumBeds" element={<NumBeds></NumBeds>}></Route>
            <Route path="Price" element={<Price></Price>}></Route>
            <Route path="UpdateDepart/:id" element={<UpdateDepart></UpdateDepart>}></Route>
            <Route path="MyDepart" element={<MyDepart></MyDepart>}></Route>
            <Route path="Allcityid/:id" element={<Allcityid></Allcityid>}></Route>

            <Route path=" " element={<Home></Home>}></Route>
          

            
        </Routes>
    </>
}