import { useDispatch } from 'react-redux';
import { login } from '../api';
import './Form.css'
import { setcurrentAdver } from './action';
import swal from 'sweetalert'

export const Login=()=>{
    const dispatch=useDispatch()
    const send=(event)=>{
        event.preventDefault();
        const adver = {
            Email: event.target[0].value,
            password: event.target[1].value,
            Phone: event.target[2].value,
            otherPhone:event.target[3].value
        }
        console.log(adver);
        login(adver)
        .then(d=>{
            console.log(d.data); 
            console.log(d.data.adve._id);
            swal('Hello','you Enter in','success')
            dispatch(setcurrentAdver(d.data.adve))
            localStorage.setItem('token',d.data.token) 
        })
        .catch(err=>{
            swal('oops!!!','you cant Enter in','error')
            console.log("כשלון");
            
        })

    }
    return<>
    <h2>הרשמה</h2>
    <div class="container">
        <form onSubmit={(e) => send(e)} >
    <label for="Email">אימייל:</label>
    <input type="email" id="Email" name="Email" />
   
    <label for="password">סיסמא :</label>
    <input type="text" id="password" name="password" />

    <label for="Phone">פלאפון :</label>
    <input type="text" id="Phone" name="Phone" />

    <label for="otherPhone">טלפון :</label>
    <input type="text" id="otherPhone" name="otherPhone" />

    <input type={'submit'}></input>
    </form>
</div>
</>
}