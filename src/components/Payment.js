import React from "react";
import { PaystackButton } from "react-paystack";

const Payment = ({ email, amount = 50000 }) => {
  console.log(email);
  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount,
    publicKey: "pk_test_dsdfghuytfd2345678gvxxxxxxxxxx",
  };

  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Continue to Paystack",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div>
      <PaystackButton {...componentProps} />
    </div>
  );
};

export default Payment;
