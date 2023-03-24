// import { CLIENT_ID } from './Config'
import React, { useState, useEffect } from "react" ;
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = () => {
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    // console.log(process))
    const CLIENT_ID = "ARXGQaFlbRd32MZ0S7pXTein_tW_-KU2X4HxzTSoxVh_Hb6LDjJczFksqgKln9Zh87zoHdW6B9SZncrQ"
    // const APP_SECRET = process.env.APP_SECRET || "EHXgGZvWsEhCwzJw35kjWiEvmcqFZqjC57Vrptz7mkYLd--0PJCRPtT49yixFLNOpOPDwdQ8d84Uftr_"
    
    // creates a paypal order
    const createOrder = (data, actions) => {
      
  
        let currentCart = localStorage.getItem('cart');

        currentCart = JSON.parse(currentCart);


        // The function to create an order
        var total = 0;

        for (var i = 0; i < currentCart.length; i++) {
          let item = currentCart[i];

          total += parseFloat(item.price) * parseFloat(item.amount);
        }

        console.log(total);

        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: 'USD',
              value: total.toFixed(2)
            }
          }],
        }).then((orderID) => {
            setOrderID(orderID);
            return orderID;
        });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment");
    };

    useEffect(() => {
        if (success) {
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    },[success]);

    return (
        <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
            <div>
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={createOrder}
                onApprove={onApprove}
              />
            </div>
        </PayPalScriptProvider>
    );
}

export default Paypal;