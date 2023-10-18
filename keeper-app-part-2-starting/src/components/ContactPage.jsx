
import { FaPhone } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa'
import { FaHouseUser } from 'react-icons/fa'




const ContactPage=()=>(
    <>
    <div className='header-section'>
      
    </div>
    <div className="HomeContainer">
      <div className='text-container'>
        <h1 className='heading'>Feel Free To Contact Us</h1>
        <p className='subhead'>Contact Us</p>
        <div className='divtag'>
        <p className='paragraph'>Many desktop publishing packages and web page editors now use Lorem Lpsum as their default model text,and a search for 'Lorem ip-sum' will uncover many web</p>
        </div>
      </div>
      <div className='container text-center'>
        <div className='row'>
        <div className='service-container'>

        
            <div className='col-lg-4 concol'>
            <div className='icon'>
              <FaHouseUser color='green' size='4rem' />
              <h5>Our Head Office</h5>
              <p>123 -sed do eiusmod tempor NewYork U.S.A</p>
            </div>
            </div>
            <div className='col-lg-4 concol'>
            <div className='icon'>
              <FaRegEnvelope color='green' size='4rem' />
              <h5>EMAIL</h5>
              <p>Example@Email.com</p>
        </div>
            </div>
            <div className='col-lg-4 concol'>
            <div className='icon'>
          <FaPhone color='green' size='4rem' />
          <h5>PHONE</h5>
          <p>+91 1223456</p>
        </div>
            </div>
        </div>
        </div>
      </div>
      <div >
        

        

        
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col'>
              <p className='message'>SEND MESSAGE TO US</p>
              <p className='subhead text-center'>Message</p>
              </div>

              
          </div>
          <div className='row'>
            <div className='col'>
            <div className="form">
          <form >
            
            <label for="name">Name</label>
            <input type="text" className="form-control" placeholder="Name"  required/>
            
            
              <label for="email">Email</label>
              <input type="text" className="form-control" placeholder='Email' required/>
            
            
              <label for="message">Message</label>
              <input type='text' className="form-control" placeholder='Type Your Message' required/>
            
            <div className='button-class'>
              <button class="btn">Send</button>
            </div>
          </form>
        
        </div>
            </div>
          </div>
      </div>
    </div>
    </>

)

export default ContactPage;