import axios from "axios"

const basicUrl='http://localhost:3009'
//--------Department------
export const allDepart=()=>{
     return axios.get(`${basicUrl}/Department`)
}
export const addDepart=(dep)=>{
    const h={Authorization:`Bearer ${localStorage.getItem('token')}`}
    return axios.post(`${basicUrl}/Department`,dep,{headers:h})
}
export const DelteDepart=(_id,aid)=>{
    const h={Authorization:`Bearer ${localStorage.getItem('token')}`}
    return axios.delete(`${basicUrl}/Department`,
        {params: {_id,aid}},{headers:h}
    )
}
export const updateDepart=(id,dp)=>{
    const h={Authorization:`Bearer ${localStorage.getItem('token')}`}
    return axios.patch(`${basicUrl}/Department/${id}`,dp,{headers:h})
}
export const getDepartById=(id)=>{
    return axios.get(`${basicUrl}/Department/getDepartById/${id}`)
}
export const getByCategoryId=(id)=>{
    return axios.get(`${basicUrl}/Department/getByCategoryId/${id}`)
}
// export const getBigByNumBesdsId=(num)=>{
//     return axios.get(`${basicUrl}/Department/getBigByNumBesdsId/${num}`)
// }
export const getByNumBesdsId=(num)=>{
    return axios.get(`${basicUrl}/Department/getByNumBesdsId/${num}`)
}
export const getByCityId=(id)=>{
    return axios.get(`${basicUrl}/Department/getByCityId/${id}`)
}
// export const getByLessNumBesdsId=(num)=>{
//     return axios.get(`${basicUrl}/Department/getByLessNumBesdsId/${num}`)
// }
export const getBycheapprice=(num)=>{
    return axios.get(`${basicUrl}/Department/getBycheapprice/${num}`)
}
// export const getByExpensivePrice=(num)=>{
//     return axios.get(`${basicUrl}/Department/getByExpensivePrice/${num}`)
// }
export const getByCodeEdvertiser=(id)=>{
    const h={Authorization:`Bearer ${localStorage.getItem('token')}`}
    return axios.get(`${basicUrl}/Department/getByCodeEdvertiser/${id}`,{headers:h})
}
//------------City------
export const allcity=()=>{
    return axios.get(`${basicUrl}/City`)
}
export const AddCity=(city)=>{
    const h={Authorization:`Bearer ${localStorage.getItem('token')}`}
    return axios.post(`${basicUrl}/City`,city,{headers:h})
}
// export const Addcity = (city) => {
//     return axios.post(`${basicUrl}/City`, city)
//         .then(d => {
//             console.log("העיר נוספה בהצלחה", d.data);
//             return d.data; // החזרת התשובה מהשרת
//         })
//         .catch(err => {
//             console.error("שגיאה בהוספת העיר", err);
//             throw err;
//         });
// };
//-----Category-----
export const allcCategory=()=>{
    return axios.get(`${basicUrl}/Category`)
}
export const addCategory=(cat)=>{
    const h={Authorization:`Bearer ${localStorage.getItem('token')}`}
    return axios.post(`${basicUrl}/Category`,cat,{headers:h})
}
//-------------Advertiser------
export const enter=(advertise)=>{
    console.log("apienter",advertise);
    return axios.post(`${basicUrl}/Advrtiser/Enter`,advertise)
}
export const login=(advertise)=>{
    return axios.post(`${basicUrl}/Advrtiser`,advertise)
}

