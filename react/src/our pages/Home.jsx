import './home.css'
import { fontGrid } from '@mui/material/styles/cssUtils'
export const Home=()=>{
    return<>
    <h1>דף הבית</h1>
    {/* <img id='imgcar'src={`${process.env.PUBLIC_URL}/Pictures/תמונה8.jpg`}></img> */}
    
    {/* <img  width="300px" src={`${process.env.PUBLIC_URL}/Pictures/תמונה20.jpg`}></img> */}
    <br></br>
    {/* {`${process.env.PUBLIC_URL}${selectedCar.CarPicture}`} */}
 <img  id="img1" src={`${process.env.PUBLIC_URL}/Pictures/תמונה20.jpg`}></img>
 <div id="allImg">
 {/* <section><img  id="imgcar" src={`${process.env.PUBLIC_URL}/Pictures/, */}
 {/* unbv1.jpg`}></img></section> */}
 <section><img  id="imgcar" src={`${process.env.PUBLIC_URL}/Pictures/תמונה8.jpg`}></img></section>
 <section><img  id="imgcar" src={`${process.env.PUBLIC_URL}/Pictures/תמונה8.jpg`}></img></section>
 <section><img  id="imgcar" src={`${process.env.PUBLIC_URL}/Pictures/תמונה8.jpg`}></img></section>
 <section><img  id="imgcar" src={`${process.env.PUBLIC_URL}/Pictures/תמונה8.jpg`}></img></section>
 <section><img  id="imgcar" src={`${process.env.PUBLIC_URL}/Pictures/תמונה8.jpg`}></img></section>
 </div>
 {/* <img src={`./רכב24.jpg`}></img> */}
   <h1 >קצת עלינו</h1>
   <h2>נוסעים לנופש?</h2>
   <h2> לטיול?</h2>
   <h2> רוצים לצאת ברוגע ובלי לשלם יותר מידי?</h2>
   <h3>  אצלנו תוכלו למצוא רכבים בכל מקום בו אתם נמצאים לכל נסיעה שהיא.</h3>
   <h2> רכבים מרווחים, ממוזגים ,</h2>
   <h2>והכי חשוב--</h2>
   <h2>מבחר גדול במיוחד בהתאמה לצרכים שלכם!</h2>
   <h3> מקווים שתהנו:)</h3>
    </>
}