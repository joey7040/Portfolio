import React, {Component} from 'react';
import "./DonateDirectly.css"
import PaypalExpressBtn from 'react-paypal-express-checkout';


export default class DonateDirectly extends Component {

    constructor(props){
        super();
        this.state = {
          monies: ''
        };
      }
      handleChange(e){
        this.setState({
          monies: e.target.value
        });
      }
    


      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    

    render(){
        
		const onSuccess = (payment) => {
			// 1, 2, and ... Poof! You made it, everything's fine and dandy!
            		console.log("Payment successful!", payment);
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
		}

		const onCancel = (data) => {
			// The user pressed "cancel" or closed the PayPal popup
			console.log('Payment cancelled!', data);
			// You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
		}

		const onError = (err) => {
			// The main Paypal script could not be loaded or something blocked the script from loading
			console.log("Error!", err);
			// Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
			// => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
		}

		let env = 'sandbox'; // you can set this string to 'production'
		let currency = 'USD'; // you can set this string from your props or state  
		// Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

        const client = {
            sandbox: process.env.REACT_APP_PAYPAL_API_KEY,
            production: process.env.REACT_APP_LIVE_PAYPAL_KEY,
        }  
        return (

            <div className="container text-center">
                    <h2 className="mt-5 thankyou">You're contribution is greatly apprechiated.</h2>
                    <div className="row mt-5">
                        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
                            <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">$5</h1>
                                <p className="card-text">Click below to donate.</p>
                                <PaypalExpressBtn env={env} client={client} currency={currency} total={5.00} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
                            <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">$10</h1>
                                <p className="card-text">Click below to donate.</p>
                                <PaypalExpressBtn env={env} client={client} currency={currency} total={10.00} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
                            <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">$15</h1>
                                <p className="card-text">Click below to donate.</p>
                                <PaypalExpressBtn env={env} client={client} currency={currency} total={15.00} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
                            <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">$20</h1>
                                <p className="card-text">Click below to donate.</p>
                                <PaypalExpressBtn env={env} client={client} currency={currency} total={20.00} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-sm-12 col-md-12 col-lg-12  text-center">
                            <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Custom Amount</h2>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Amount of $ to the nearest dollar" value={this.state.monies}
          onChange={this.handleChange.bind(this)} />
                                    <div className="input-group-append"> 
                                        <span className="input-group-text">.00</span>
                                    </div>
                                    </div>
                                    <PaypalExpressBtn type="submit" env={env} client={client} currency={currency} total={this.state.monies} onError={onError} onSuccess={onSuccess} onCancel={onCancel} onClick='()=>{ console.log("this.state.value") }' />
                            </div>
                            </div>
                        </div>
                    </div>



            </div>
        )
    }
}