import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./components.styles.css";
import Payment from "./Payment";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Registration({ open, handleClose }) {
  const classes = useStyles();

  const [email, setEmail] = React.useState("");

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={`${classes.paper} modal__container`}>
            <form action="">
              <div>
                <h4>Super Charge Your Coding Skill ❤</h4>
              </div>
              <div>
                <label htmlFor="" style={{ fontSize: "1.2rem" }}>
                  Email Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              {email ? (
                <Payment email={email} />
              ) : (
                <button disabled>Continue</button>
              )}
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
