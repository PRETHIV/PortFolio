import { Chrono } from "react-chrono";
// https://github.com/prabhuignoto/react-chrono
import "./Path.scss";
export default function Path(){

    const items = [{
        title: "August 2020",
        cardTitle: "PayPal Software Engineer 1",
        url: "https://www.paypal.com/in/home",
        cardSubtitle:"Started my career with paypal as software engineer",
        cardDetailedText: "Got offered by paypal as software engineer 1 ",
        media: {
          type: "IMAGE",
          source: {
            url: "assets/logos/paypal.png"
          }
        }
      },{
        title: "Feb 2020",
        cardTitle: "PayPal Software Engineer Intern",
        url: "https://www.paypal.com/in/home",
        cardSubtitle:"Started Internship at paypal",
        cardDetailedText: "Joined paypal as software engineer intern",
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