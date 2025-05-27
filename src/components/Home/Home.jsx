import React , {useState} from "react";

import { BsSearch } from "react-icons/bs";

import imgMan from "../../assets/man.png";
 import imgDoctor from "../../assets/doctor.jpg";
import imgLaugh from "../../assets/lungh.png";
import imgTeeth from "../../assets/teeth.png";
import imgBone from "../../assets/bone.png";
import imgEye from "../../assets/eye.png";

function Home() {
  return (
    <div className="home-main">
      <div className="home-main-one">
        <div className="dash-h1-name">
          <div className="section-one-name">Dashboard</div>
          <div className="section-one-name2"> This week&#8965; </div>
        </div>

        <div className="man-body-weight">
          <div className="man-body">
            <div className="head-search">
              <BsSearch className="icon home-search"></BsSearch>
            </div>

            <div>
              <div className="body-name-one">
                {" "}
                <span style={{ color: "red" }}>&#10084; </span> Healthly Heart{" "}
              </div>
              <div className="man-all-body">
                {" "}
                <img
                  src={imgMan}
                  alt="man"
                  style={{
                    width: " 139px",
                    marginTop: "-31px",
                    marginLeft: "65px",
                  }}
                />{" "}
              </div>
              <div className="body-name-on">
                {" "}
                <span> &#129469; </span> Healthly Leg{" "}
              </div>
            </div>
          </div>

          <div className="man-weightws">
            <div className="man-weightws-box1">
              <div className="laungs-name">
                <div>
                  <img
                    id="lung-img"
                    src={imgLaugh}
                    alt=""
                    style={{ width: "30px" }}
                  />
                </div>
                <div className="laungs-name-h1">Lungs</div>
              </div>
              <div className="laungs-name-date">Date: 26 Oct 2021</div>
              <div className="laungs-name-border"></div>
            </div>
            <div className="man-weightws-box1">
              <div className="laungs-name">
                <div>
                  <img
                    id="lung-img"
                    src={imgTeeth}
                    alt=""
                    style={{ width: "30px" }}
                  />
                </div>
                <div className="laungs-name-h1">Teeth</div>
              </div>
              <div className="laungs-name-date">Date: 26 Oct 2021</div>
              <div
                className="laungs-name-border"
                style={{
                  background:
                    "linear-gradient(to right, #3da6d2 80%, #e8eaf6 80%)",
                }}
              ></div>
            </div>
            <div className="man-weightws-box1">
              <div className="laungs-name">
                <div>
                  <img
                    id="lung-img"
                    src={imgBone}
                    alt=""
                    style={{ width: "30px" }}
                  />
                </div>
                <div className="laungs-name-h1">Bone</div>
              </div>
              <div className="laungs-name-date">Date: 26 Oct 2021</div>
              <div
                className="laungs-name-border bor3"
                style={{
                  background:
                    "linear-gradient(to right,    hsl(10, 90%, 54%) 80%, #e8eaf6 80%)",
                }}
              ></div>
            </div>
            <span className="detail-name">Details&#8594;</span>
          </div>
        </div>

        <div className="man-activity-all">
          <div
            style={{
              display: "flex",
              padding: "14px 33px",
              justifyContent: "space-between",
            }}
          >
            <div className="activity-name">Activity</div>
            <div className="act-name-week">3 appointment on this week</div>
          </div>
          <div className="lines-div">
            {" "}
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
            <div className="activity-days-line"></div>
            <div className="activity-days-lines"></div>
          </div>
          <div className="activity-days">
            <div className="activity-days">Mon</div>
            <div className="activity-days">Tues</div>
            <div className="activity-days">Wed</div>
            <div className="activity-days">Thurs</div>
            <div className="activity-days">Fri</div>
            <div className="activity-days">Sat</div>
            <div className="activity-days">Sun</div>
          </div>
        </div>
      </div>
      {/* ------------------- */}
      <div className="home-main-two">
        <div className="dash-h2-name">
          <div className="section-two-name">October 2021</div>
          <div className="section-two-name2">
            <span> &rarr;</span> <span>&larr;</span>
          </div>
        </div>
        <div className="section-second-days">
          <div className="section-second-days1">
            <span>Mon</span>
            <span className="days-no">25</span>
            <span>10.00</span>
            <span>11.00</span>
            <span>12.00</span>
          </div>
          <div className="section-second-days1 tue">
            <span className="days-no">Tues</span>
            <span className="days-no"> 26</span>
            <span className="days-no"> 08.00</span>
            <span className="days-no-w"> 09.00</span>
            <span className="days-no"> 10.00</span>
          </div>
          <div className="section-second-days1">
            <span> wed</span>
            <span> 27</span>
            <span className="thurs-no">12.00</span>
            <span> --</span>
            <span> 13.00</span>
          </div>
          <div className="section-second-days1">
            <span> Thurs</span>
            <span className="zero-nine">28</span>
            <span> 10.00</span>
            <span className="thur">11.00</span>
            <span>--</span>
          </div>
          <div className="section-second-days1">
            <span> Fri</span>
            <span>29</span>
            <span> --</span>
            <span className="">14.00</span>

            <span>16.00</span>
          </div>
          <div className="section-second-days1">
            <span>Sat</span>
            <span>30</span>
            <span>12.00</span>
            <span className="sat">14.00</span>

            <span>15.00</span>
          </div>
          <div className="section-second-days1">
            <span>Sun</span>
            <span>31</span>
            <span>09.00</span>
            <span className="sun"> 10.00</span>

            <span>11.00</span>
          </div>
        </div>
        {/* ---------------------- */}

        <div className="dentist-amd-appo">
          <div className="dentist">
            <div className="dentist-teeth">
              <div className="dentist-name name-one-teeth">Dentist</div>
              <div className="dentist-name">
                <img src={imgTeeth} alt="" style={{ width: "15px" }} />
              </div>
            </div>
            <div className="dentist-date">09-00-11.00</div>
            <div className="dentist-date-name"> Dr.Cameron Williamson</div>
          </div>
          <div className="appointment">
            <div className="dentist-teeth">
              <div className="dentist-name  name-one-teeth">
                Physiotherapy Appoinment
              </div>
              <div className="dentist-name dentist-name-ph">
                <img src={imgBone} alt="" style={{ width: "15px" }} />
              </div>
            </div>
            <div className="dentist-date">11-00-12.00</div>
            <div className="dentist-date-name"> Dr.Kevin Djones</div>
          </div>
        </div>
        {/* --------------------- */}
        <div className="schedule-name">The Upcoming Schedule</div>
        <div className="schedule-name-on">On Thursday</div>
        {/* ---------------------- */}
        <div className="dentist-and-appo" style={{marginTop:'9px'}}>
          <div className="appointment-health">
            <div className="dentist-teeth-check">
              <div className="dentist-name  name-one-teeth">
                Health Checkup complete
              </div>
              <div className="dentist-name">
                <img src={imgBone} alt="" style={{ width: "15px" }} />
              </div>
            </div>
            <div className="dentist-date">11-00AM </div>
          </div>

          <div className="dentist-health">
            <div className="dentist-teeth-health-oph">
              <div className="dentist-name name-one-teeth">Ophthalmologist</div>
              <div className="dentist-name">
                <img src={imgEye} alt="" style={{ width: "15px" }} />
              </div>
            </div>
            <div className="dentist-date"> 11.40 PM</div>
          </div>

          
        </div>
         <div className="schedule-name-on" style={{marginTop:'15px'}}>On Saturday</div>
          <div className="dentist-amd-appo"  style={{marginTop:'9px'}}>
            <div className="dentist-health">
              <div className="dentist-teeth-health">
                <div className="dentist-name name-one-teeth"> Cardiologist</div>
                <div className="dentist-name" style={{color:'Highlightred'}}>&#10084;
                  
                </div>
              </div>
              <div className="dentist-date">12.00PM </div>
            </div>

            <div className="dentist-health">
              <div className="dentist-teeth-health">
                <div className="dentist-name name-one-teeth">Neurologist</div>
                <div className="dentist-name">
                  <img src={imgDoctor} alt="" style={{ width: "15px" }} />
                </div>
              </div>
              <div className="dentist-date">16.00PM </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
 