import Style from "./style.module.css";
import ContactForm from "./ContactForm";
import { FaHome, FaWhatsapp } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { useEffect } from "react";
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
              <p>ajftrusts@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={Style.rightsection}>
          <ContactForm />
        </div>
      </div>
      <div className={Style.map}>
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54589.926294447396!2d85.894058!3d26.207499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb7a602a9ae31%3A0x4e6a6245083be13d!2sBelauna%2C%20Bihar%20847306!5e1!3m2!1sen!2sin!4v1739851067053!5m2!1sen!2sin"
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
