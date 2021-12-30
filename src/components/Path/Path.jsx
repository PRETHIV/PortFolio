import { Chrono } from "react-chrono";
// https://github.com/prabhuignoto/react-chrono
import "./Path.scss";
export default function Path(){

    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg"
          }
        }
      },{
        title: "Feb 2020",
        cardTitle: "PayPal",
        url: "https://www.paypal.com/in/home",
        cardSubtitle:"Started Internship at paypal",
        cardDetailedText: "",
        media: {
          type: "IMAGE",
          source: {
            url: "assets/logos/paypal.png"
          }
        }
      },{
        title: "July 2016",
        cardTitle: "Jeppiaar Engineering College",
        url: "https://jeppiaarcollege.org/jeppiaar/",
        cardSubtitle:"Started B.Tech in Information Technology",
        cardDetailedText: "Started Bachelors of  Technology in Information Technology",
        media: {
          type: "IMAGE",
          source: {
            url: "assets/logos/jpr.jpg"
          }
        }
      }
    ];
  
      return (
        <div className="path" id="path" style={{backgroundColor:'white'}}>  
          <h1>Career Timeline</h1>
        <Chrono items={items} mode="VERTICAL" scrollable={{scrollbar: false}} />
        </div>
      );
}