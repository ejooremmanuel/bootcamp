import React from "react";
import Navbar from "../components/Navbar";
import gif from "../assets/animate.gif";
import { CodeSharp, MeetingRoom } from "@material-ui/icons";
import Invitation from "../components/Invitation";
import Footer from "../components/Footer";
// import Registration from "../components/Modal";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate("/register");
  };

  return (
    <>
      <Navbar />
      <div className="landing__container">
        <div className="landing__content">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gridGap: "40px",
            }}
          >
            <h2 style={{ fontSize: "2rem", fontWeight: "500" }}>
              Become a Software Developer
            </h2>
            <div className="btn__holder">
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Get Started
              </Button>
            </div>
          </div>
          <div>
            <img src={gif} alt="gif" />
          </div>
        </div>
        <div className="landing__content__1">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gridGap: "20px",
              flex: 1,
              padding: "0px 20px",
              width: "80%",
            }}
          >
            <div>
              <h2 className="heading">What we do?</h2>
              <p>
                Abj Boot Camp is an initiative to help people to grow their
                knowledge on developer technologies and more through peer to
                peer workshops, bootcamps and events, and gain relevant industry
                experience.
              </p>
            </div>
            <div className="btn__holder">
              <Button variant="outlined" color="primary" onClick={handleOpen}>
                SIGN UP
              </Button>
            </div>
          </div>
          <div className="what__we__do">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gridGap: "10px",
              }}
            >
              <div style={{ fontSize: "2.5rem" }}>
                <CodeSharp />
              </div>
              <h2>Bootcamps</h2>
              <p>Learn & Implement with us in detailed bootcamps.</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gridGap: "10px",
              }}
            >
              <div style={{ fontSize: "2.5rem" }}>
                <MeetingRoom style={{ fontSize: "1.2rem" }} />
              </div>
              <h2>Webinars</h2>
              <p>Join live coding sessions.</p>
            </div>
          </div>
        </div>

        <div>
          <Invitation />
        </div>
        <div>
          <Footer />
        </div>
        {/* <Registration open={open} handleClose={handleClose} /> */}
      </div>
    </>
  );
};

export default Landing;
