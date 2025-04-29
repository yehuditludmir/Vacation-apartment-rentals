// immer - ספריה שמטפלת במשתנים קונסטיים
import { produce } from 'immer'
import { createStore } from 'redux';
import { Addcity, allcity, login } from '../api';

// redux
// יצירת מערכת לשמירת המשתנים הגלובליים של הפרויקט
// כל קומפוננטה תוכל לגשת אליהם
// לקרוא, להוסיף, לשנות, למחוק...

//1.
// initialState - סטייט מאותחל
// שם מקובל - לא חובה
// אובייקט ג'סון שיכיל את כל המשתנים הגלובליים
const initialState = {
    // רשימת המשתמשים לא תהיה מאותחלת כאן
    // אלא במסד הנתונים
    
    currentAdver:{ 
     //   _id: "676420019bd9380c3661ceec",
    //  _id: "676420019bd9380c3661ceec",
    //     Email: "qwqw@22343",
    //     Phone: "0342424322",
    //     otherPhone: "025353543"
    } ,
    
}

// 3.
// reducer - פונקציה שמטפלת בכל השינויים של הסטייט
// מקבלת שני ארגומנטים:
// 1. callback פונקציית 
// 2. state - הסטייט שעליו רוצים להפעיל את השינויים
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_ADVER':
            state.currentAdver = action.payload
            return;
        // case 'ADD_ADVER':
        //     login()
        //     .then(d=>{
        //         console.log("נרשמת בהצלחה");  
        //      })
        //      .catch(err=>{
        //         console.log("הרשמתך נכשלה");
                
        //      })
        //      return;
        //     case 'ADD_CITY_SUCCESS':
        //     console.log("העיר נוספה בהצלחה לשרת", action.payload);
        //     state.status = 'success';
        //     state.message = `העיר ${action.payload.NameCity} נוספה בהצלחה`;
        //     return;
        // case 'ADD_CITY_FAILURE':
        //     console.error("שגיאה בהוספת העיר לשרת", action.payload);
        //     state.status = 'failure';
        //     state.message = "שגיאה בהוספת העיר";
        //     return;
        // case 'ADD_CITY':
        //     Addcity()
        //     .then(d=>{ console.log(" עיר הצלחה" );
        //     })
        //     .catch(err=>{console.log(err);
        //      })
        //     return;
        // case 'UPDATE_PRODUCT':
        //     state.products[action.payload.index] = action.payload.product
        //     return;
        // case 'DELETE_PRODUCT':
        //     state.products.splice(action.payload, 1)
        //     return;
        default:
            break;
    }
}, initialState)

// 4. store
const store = createStore(reducer)
export default store