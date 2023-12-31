import SucessMark from '../../assets/images/icon-list.svg';
import Styles from './Thankspage.module.css';
// import { useParams } from 'react-router-dom';

export default function Thankspage({mailid, toCloseThanksPage}) {
const handleClick=()=>{
  toCloseThanksPage()
}
  return (
    <div style={{ width: '100%', height: '100%', marginLeft: '40%', marginTop: '150px' }}>
      <div className={Styles.ThanksmainContainer}>
        <img className={Styles.Thanksimg} src={SucessMark} alt="success" />
        <h1 style={{ padding: '2px' }}>Thanks for Subscribing!</h1>
        <p>A confirmation email has been sent to <b>{mailid}</b>. Please open it and click the button to continue.</p>
        <button onClick={handleClick} className='thanksButton'>Dismiss Message</button>
      </div>
    </div>
  );
}
