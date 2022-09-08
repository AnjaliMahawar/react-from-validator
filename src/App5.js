import { useState} from "react";
import "./App1.css";

function App5() {
  const initialValues = { 
                        username: "",
                        email: "", 
                        password: "",
                        Mobile:"",
                        Age:"",
                        cpassword:"",
                        address:""
                    };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    console.log(name,value);
    if(name === 'username'){
        console.log(value,value.length)
        if(value.length < 6){
            setFormErrors({
                username:"Lenght must be 6 character long"
            })
        }else{
            setFormErrors({
                username:""
            })
        }
    }

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };   

 
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    var paswd=  /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{7,15}$/;
    if ((!values.username)&&(values.username.length<=0)) {
      errors.username = "Username is required!";
    }
    
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } 
    else if(!paswd.test(values.password)){
        errors.password="password should be contains numbers, letters, and special charecter"
        
    }
    if(!values.Mobile){
        errors.Mobile="Mobile No. is required"
    }else if(values.Mobile.length!==10){
        errors.Mobile="mobile no must contain 10 digit";
    }
    if(!values.Age){
        errors.Age="Age is required"
    }
    if(!values.cpassword){
        errors.cpassword="please enter your password again"
    }
    else if(values.cpassword!==values.password){
        errors.cpassword="password and confirm password should be same"
    }
   
    if(!values.address){
        errors.address="address is required"
    }
    else if(values.address.length<=10){
        errors.address="please enter your proper address"
    }
    return errors;
  };

  return (
    

      <form onSubmit={handleSubmit}>
        <h1>Registration From</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label >Username : </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email : </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password : </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.cpassword}</p>
          <div className="field">
            <label>Confirm Password : </label>
            <input
              type="password"
              name="cpassword"
              placeholder="Confirm Password"
              value={formValues.cpassword}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
        </div>
        <div className="field">
            <label>Mobile No. : </label>
            <input
              type="number"
              name="Mobile"
              placeholder="Mobile Number"
              value={formValues.Mobile}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.Mobile}</p>
          <div className="field">
            <label>Age : </label>
            <input
              type="number"
              name="Age"
              placeholder="Age"
              value={formValues.Age}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.Age}</p>
          <div className="field">
            <label>Address : </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formValues.address}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.address}</p>

          <button className="fluid ui button blue">Submit</button>
      </form>
   // </div>
  );
}

export default App5;