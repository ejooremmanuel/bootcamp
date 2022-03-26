import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Input, useToast } from "@chakra-ui/react";
import { createUser } from "../services/createUser";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [selection, setSelection] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const classes = useStyles();
  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email,
      name,
      phone,
      selection,
    };
    createUser(data, toast, setLoading, setEmail, setName, setPhone);
  };
  return (
    <>
      <Navbar />
      <div className="registration">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="">Your Full Name</label>
            <Input
              type="text"
              value={name}
              placeholder="Full Name..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Email Address</label>
            <Input
              type="text"
              value={email}
              placeholder="Email Address..."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Valid Phone Number</label>
            <Input
              type="text"
              placeholder="Valid Phone Number..."
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">
                Choose your preferred Location
              </FormLabel>
              <RadioGroup
                aria-label="quiz"
                name="quiz"
                onChange={(e) => {
                  setSelection(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <FormControlLabel
                  value="online"
                  control={<Radio />}
                  label="Online"
                />
                <FormControlLabel
                  value="onsite"
                  control={<Radio />}
                  label="Onsite (Abuja Only)"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            {loading ? (
              <Button variant="contained" color="primary">
                Booking...
              </Button>
            ) : (
              <Button type="submit" variant="contained" color="primary">
                Book a Spot
              </Button>
            )}
          </div>
        </form>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Register;
