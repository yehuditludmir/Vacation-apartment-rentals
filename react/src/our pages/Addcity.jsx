import { AddCity } from '../api';
import './Form.css'
import { useDispatch } from 'react-redux'

export const Addcity=()=>{
  
    // const dis=useDispatch()
    // const status = useSelector(state => state.status);
    // const message = useSelector(state => state.message);
 const send =(event) =>{
        
        event.preventDefault();
            const c = {
                NameCity: event.target[0].value
            }
            AddCity(c).then(d=>{
                console.log("צלך");
                
            })
            .catch(err=>{
                console.log("כשל");
                
            })

    }
   
    return<>
    <div class="container">
    <form onSubmit={(e) => send(e)}>
    <label for="NameCity">שם עיר:</label>
    <input type="text" id="NameCity" name="NameCity" />

    <input type={'submit'}></input>
    </form>
</div>

    </>
}