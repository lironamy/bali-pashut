// import { CLIENT_ID } from './Config'
import React, { useState, useEffect } from "react" ;
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";



const Paypal = () => {
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    // console.log(process))
    const CLIENT_ID = "AeNnB8SfRNJn3NDB12IdZRlnmWF9f-5G2iHmdVyD_E8vRI1Krw8arly1m-lLOolmTtWGuDq-Ml9O4Wuc";
    // const APP_SECRET = process.env.APP_SECRET || "EHXgGZvWsEhCwzJw35kjWiEvmcqFZqjC57Vrptz7mkYLd--0PJCRPtT49yixFLNOpOPDwdQ8d84Uftr_"
    
    // creates a paypal order
    const getPurchaseUnits = (cart) => {
      const purchaseUnits = [];
      let total = 0;
      let title = '';
    
      for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const price = parseFloat(item.price);
        const amount = parseFloat(item.amount);
    
        total += price * amount;
        title += item.title;
        if (i < cart.length - 1) {
          title += ', ';
        }
      
    
        purchaseUnits.push({
          amount: {
            currency_code: 'ILS',
            value: (price * amount).toFixed(2),
          },
          description: item.title,
          quantity: item.amount,
          reference_id: item.id,
        });
      }
      
      return { purchaseUnits, total, title };
      
    };
    
    
    const createOrder = (data, actions) => {
      const currentCart = JSON.parse(localStorage.getItem('cart'));
      const { purchaseUnits, total, title } = getPurchaseUnits(currentCart);
    
      return actions.order.create({
        purchase_units: purchaseUnits,
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
        <PayPalScriptProvider options={{ "client-id": CLIENT_ID, currency: "ILS" }}>
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