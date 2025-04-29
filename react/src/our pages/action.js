// 2. actions - פעולות לשינוי הסטייט

// import { Addcity } from "../api";

//-----Adver-----
export const setcurrentAdver = (adver) => {
    return { type: 'SET_CURRENT_ADVER', payload: adver }
}

// export const AddAdver = (adver) => {
//     return { type: 'ADD_ADVER', payload: adver }
// }
//----City-----
// export const addCity = (city) => {
//     return { type: 'ADD_CITY', payload: city }
// }
// export const addCity = (city) => {
//     return async (dispatch) => {
//         try {
//             const response = await Addcity(city);
//             dispatch({ type: 'ADD_CITY_SUCCESS', payload: response });
//         } catch (error) {
//             console.error("שגיאה בהוספת העיר", error);
//             dispatch({ type: 'ADD_CITY_FAILURE', payload: error });
//         }
//     };
// };
// //------category----
// export const AddCategory = (category) => {
//     return { type: 'ADD_CATEGORY', payload: category }
// }
// //
// export const addDepart = (depart) => {
//     return { type: 'ADD_DEPART', payload: depart }
// }

// export const updareDepart = (depart, index) => {
//     return { type: 'UPDART_DEPART', payload: {depart, index} }
// }

// export const deleteDepart = (depart) => {
//     return { type: 'DELETE_DEPART', payload: depart }
// }


//-----------------------------------------
// export const allDepart=()=>{
//     return axios.get(`${basicUrl}/Department`)
// }

// export const AddDepart=()=>{
//     return axios.post(`${basicUrl}/Department`)
// }
// export const DelteDepart=(id)=>{
//     return axios.delete(`${basicUrl}/Department/${id}`)
//  }
// export const getDepartById=(id)=>{
//     return axios.get(`${basicUrl}/Department/getDepartById/${id}`)
// }
// export const getByCategoryId=(id)=>{
//     return axios.get(`${basicUrl}/Department/getByCategoryId/${id}`)
// }
// export const getBigByNumBesdsId=(num)=>{
//     return axios.get(`${basicUrl}/Department/getBigByNumBesdsId/${num}`)
// }
// export const getByNumBesdsId=(num)=>{
//     return axios.get(`${basicUrl}/Department/getByNumBesdsId/${num}`)
// }
// export const getByCityId=(id)=>{
//     return axios.get(`${basicUrl}/Department/getByCityId/${id}`)
// }
// export const getByLessNumBesdsId=(num)=>{
//     return axios.get(`${basicUrl}/Department/getByLessNumBesdsId/${num}`)
// }
// export const getBycheapprice=(num)=>{
//     return axios.get(`${basicUrl}/Department/getBycheapprice/${num}`)
// }
// export const getByExpensivePrice=(num)=>{
//     return axios.get(`${basicUrl}/Department/getByExpensivePrice/${num}`)
// }
// export const getByCodeEdvertiser=(id)=>{
//     return axios.get(`${basicUrl}/Department/getByCodeEdvertiser/${id}`)
// }
//------------City------
// export const allcity=()=>{
//     return axios.get(`${basicUrl}/City`)
// }
// export const Addcity=()=>{
//     return axios.post(`${basicUrl}/City`)
// }
// //-----Category-----
// export const allcCategory=()=>{
//     return axios.get(`${basicUrl}/Category`)
// }
// export const AddCategory=()=>{
//     return axios.post(`${basicUrl}/Category`)
// }
// //-------------Advertiser------
// export const Enter=()=>{
//     return axios.get(`${basicUrl}/Advrtiser`)
// }
// export const Login=()=>{
//     return axios.post(`${basicUrl}/Advrtiser`)
// }