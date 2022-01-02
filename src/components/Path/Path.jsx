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
            url: "assets/logos/paypal.jpg"
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
            url: "assets/logos/paypal.jpg"
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
      <div className="chrono">
        <div className="path" id="path" style={{backgroundColor:'white'}}>  
          <h1>Career Timeline</h1>
        {/* <Chrono style={{padding:"10%"}} items={items} mode="VERTICAL" cardHeight={300} scrollable={{scrollbar: false}}>
        </Chrono> */}
        </div>
        <div className="timeline-section">
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot-1"></div>
            <div className="timeline-date">Aug 2020</div>
            <div className="timeline-content">
              <h3>Paypal</h3>
              <p>Software Engineer 1</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot-2"></div>
            <div className="timeline-date">Feb 2020</div>
            <div className="timeline-content">
              <h3>Paypal</h3>
              <p>Software Engineer Intern</p>
              <p></p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot-3"></div>
            <div className="timeline-date">June 2016</div>
            <div className="timeline-content">
              <h3>Jeppiaar Eng. College</h3>
              <p>B.Tech in Information Technology</p>
            </div>
          </div>


        </div>
      </div>
      </div>
      );
}