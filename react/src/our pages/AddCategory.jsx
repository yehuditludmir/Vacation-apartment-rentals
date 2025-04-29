import { addCategory } from '../api';
import './Form.css'

export const AddCategory=()=>{
   
    const send=(event)=>{
        event.preventDefault();
            const cat = {
                NameCategory: event.target[0].value
            }
            addCategory(cat).then(d=>{
                console.log("צלח");
                
            })
            .catch(err=>{
                console.log("כשל");
                
            })

    }
   
   
   return<>
     <div class="container">
        <form onSubmit={(e) => send(e)}>
    <label for="NameCategory">שם קטגוריה:</label>
    <input type="text" id="NameCategory" name="NameCategory" />

    <input type={'submit'}></input>
    </form>
</div>
    </>
}