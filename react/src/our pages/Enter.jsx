import { useDispatch, useSelector } from 'react-redux';
import './Form.css'
import { setcurrentAdver } from './action';
import { enter } from '../api';
import swal from 'sweetalert'

export const Enter=()=>{
    const dispatch=useDispatch()
    const current = useSelector(w => w.currentAdver)
    // const  c= useSelector(x=>x.currentAdver)
    console.log("current",current);
    
    const send=(event)=>{
             event.preventDefault();
            const ad = {
                Email: event.target[0].value,
                password: event.target[1].value
            }
            console.log(ad)
             enter(ad)
             .then(async d=>{
                console.log("qqq");
                console.log(d.data);
                console.log(d.data.adver);
                localStorage.setItem('token',d.data.token)
                const  c=  await dispatch(setcurrentAdver(d.data.adver))
                // const  c= useSelector(x=>x.currentAdver)
                await console.log("aaa\n:",current);
                
                swal('Hello','you Enter in','success')
                console.log("ouououou");
                
            ;}
            )
            .catch(err=>{
                swal('oops!!!','you cant Enter in','error')
                console.log(err);
                
            })       
    }
//    Email,password
    return<>
    <h2>כניסה</h2>
    <div class="container">
        <form onSubmit={(e) => send(e)} >
    <label for="Email"> אימייל:</label>
    <input type="email" id="Email" name="Email" />

    <label for="password"> סיסמא:</label>
    <input type="text" id="password" name="password" />

    <input type={'submit'}></input>
    </form>
</div>

    </>

}

