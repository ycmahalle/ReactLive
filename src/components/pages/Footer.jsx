import React from "react";
import "../../css/footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Footer =()=>{
   return(
       <>
            <div  id="footer" className="d-flex justify-content-md-around align-items-center mt-5  bg-light w-100">
                <div className="row container-lg mt-3">
                <div className="email col-lg-3 text-center">
                    <EmailIcon /> &nbsp; &nbsp;
                    <a href="mailto:contact@hashstar.in" className="text-muted">contact@hashstar.in</a>
                </div>
                <div className="icons col-lg-6 text-center">
                    <a href="https://www.facebook.com/hashstarindia" target="_blank">
                        <FacebookIcon className="icon" style={{fontSize:30}} />
                    </a>
                    <a href="https://www.instagram.com/hashstar.amravati/"  target="_blank">
                        <InstagramIcon className="icon" style={{fontSize:30}} />
                    </a>
                    <a href="https://www.linkedin.com/company/hashstar-india/"  target="_blank">
                        <LinkedInIcon className="icon" style={{fontSize:30}} />
                    </a>
                    <a href="https://twitter.com/hashstarindia"  target="_blank">
                        <TwitterIcon className="icon" style={{fontSize:30}} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCXl5NzxfowhMTLp7w7AMBgw"  target="_blank">
                        <YouTubeIcon className="icon" style={{fontSize:30}} />
                    </a>
                    
                </div>
                <div className="email col-lg-3 text-center">
                    <CallIcon className="tel"
                    />  &nbsp;
                    <a href="tel:7066269269" className="text-muted">7066269269</a>
                </div>
                </div>
            </div>
       </>
   )
}

export default Footer;