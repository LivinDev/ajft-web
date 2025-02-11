import Style from './style.module.css';
import ContactForm from './ContactForm';
import { FaHome, FaWhatsapp } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { useEffect } from 'react';
const ContactPage = () => {
    useEffect(() => {
      document.title = "Contact | Anand Jivan Foundation";
    }, []);
  return (
    <div className={Style.contactouter}>
      <div className={Style.contactinner}>
        <div className={Style.leftsection}>
          <div className={Style.item}>
            <div className={Style.itemcircle}>
              <FaHome size={40} color="white" />
            </div>
            <div className={Style.contactdetails}>
              <h1>Address</h1>
              <p>Mabbi Bealuna , Lalshahpur Darbhanga,</p>
              <p> Bihar- INDIA, 846005</p>
            </div>
          </div>
          <div className={Style.item}>
            <div className={Style.itemcircle}>
              <FaWhatsapp size={40} color="white" />
            </div>
            <div className={Style.contactdetails}>
              <h1>Phone</h1>
              <p> +91 9155751363</p>
              <p>+91 06272 277721</p>
            </div>
          </div>
          <div className={Style.item}>
            <div className={Style.itemcircle}>
              <FaMapLocationDot size={40} color="white" />
            </div>
            <div className={Style.contactdetails}>
              <h1>WhatsApp</h1>
              <p>+919155751363</p>
            </div>
          </div>
          <div className={Style.item}>
            <div className={Style.itemcircle}>
              <IoIosMail size={40} color="white" />
            </div>
            <div className={Style.contactdetails}>
              <h1>Email</h1>
              <p>info@ajftrust.org</p>
            </div>
          </div>
        </div>
        <div className={Style.rightsection}>
          <ContactForm />
        </div>
      </div>
      <div className={Style.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1020711456717!2d77.64628197792966!3d12.901157754939469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15376b8c95cf%3A0xcb4c1526029a60d3!2sHustlehub%20Tech%20Park!5e0!3m2!1sen!2sin!4v1719681563984!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
