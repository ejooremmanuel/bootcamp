import axios from "axios";

export const createUser = async (
  data,
  toast,
  setLoading,
  setEmail,
  setName,
  setPhone
) => {
  try {
    await axios
      .post("https://bootcampback.herokuapp.com/api/v1/user/create", data, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        toast({
          description:
            "🎉Your Seat has been booked! Someone from our team will contact you shortly!",
          status: "success",
          isClosable: true,
          duration: 11000,
          position: "top-right",
        });
        setEmail("");
        setPhone("");
        setName("");
        setLoading(false);
      });
  } catch (e) {
    console.log(e.message);
    setLoading(false);
  }
};
