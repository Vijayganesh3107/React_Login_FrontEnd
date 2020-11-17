import React from 'react'
import "../Styles/home.css"
import image from "../Images/Best-URL-Shortening-Tools-For-2018--1024x768.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen,faPhoneSquareAlt,faMapMarker} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare,faInstagramSquare,faTwitterSquare} from "@fortawesome/free-brands-svg-icons"

export default function HomeComponent() {
    return (
        <>
        <h1 className="text-center">URL Shortner</h1>
        <div className="history mt-xl-5">
          <div className="row">
            <div className="col-xl-6">
              <div className="images">
               <img src={image}></img>
              </div>
            </div>
            <div className="col-xl-6 mt-xl-5 history-content">
              URL shortening is a technique on the World Wide Web in which a
              Uniform Resource Locator (URL) may be made substantially shorter and
              still direct to the required page. This is achieved by using a
              redirect which links to the web page that has a long URL. For
              example, the URL
              "https://example.com/assets/category_B/subcategory_C/Foo/" can be
              shortened to "https://example.com/Foo", and the URL
              "https://en.wikipedia.org/wiki/URL_shortening" can be shortened to
              "https://w.wiki/U". Often the redirect domain name is shorter than
              the original one. A friendly URL may be desired for messaging
              technologies that limit the number of characters in a message (for
              example SMS), for reducing the amount of typing required if the
              reader is copying a URL from a print source, for making it easier
              for a person to remember, or for the intention of a permalink
            </div>
          </div>
        </div>
        <div className="contact-us mt-xl-5">
          <div className="row">
            <div className="col-xl-3 offset-xl-1">
              <h2>Address</h2>
              <FontAwesomeIcon icon={faMapMarker}/>2/41, Resolute
              Towers, 2nd Lane, MC Nicholas Rd, Chennai, 600031
            </div>
            <div className="col-xl-3 offset-xl-1">
              <h2>Contact us</h2>
              <div className="email">
                <FontAwesomeIcon icon={faEnvelopeOpen}/>
                <a href="mailto:myrecepie@gmail.com">myrecepie@gmail.com</a>
              </div>
              <div className="phone">
              <FontAwesomeIcon icon={faPhoneSquareAlt}/>
                <a href="tel:+919678187743">9678187743</a>
              </div>
            </div>
            <div className="col-xl-3 offset-xl-1 text-center social-media">
              <h2>Social Media</h2>
              <div className="faceboook">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
              </div>
              <div className="insta">
              <FontAwesomeIcon icon={faInstagramSquare} size="2x"/>
              </div>
              <div className="twitter">
              <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
              </div>
            </div>
          </div>
        </div>
        <footer className="col-xl-3">
          <div className="footer mt-5">
            MyRecipie&#174;<br />
            2/41, Resolute Towers, 2nd Lane, MC Nicholas Rd, Chennai, 600031
          </div>
        </footer>
        </>
    )
}
