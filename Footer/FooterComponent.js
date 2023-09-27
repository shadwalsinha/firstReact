import "../Footer/Footer.css"
import logo from "../assets/logo.png";
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <div className="FooterBody">
    <div className="FooterContent">
      <div>
        <img src={logo} className="logoImage1"></img>
      </div>
      <ul className="FooterElements">
        <li>About Us</li>
        <li>Who We Are</li>
        <li>Blogs</li>
        <li>Contact Us</li>
      </ul>
      <ul className="FooterElements">
        <li>Investor Relation</li>
        <li>Report Fraud</li>
        <li>About Delivery Partner</li>
        <li>Donation</li>
      </ul>
      <div>
        <h3> Social Links</h3>
        <ul className="SocialIcons">
          <li><InstagramIcon size="large"/></li>
          <li><FacebookIcon size="large"/></li>
          <li><YouTubeIcon size="large"/></li>
          <li><LinkedInIcon size="large"/></li>
        </ul>
      </div>
    </div>
    </div>
  );
};
