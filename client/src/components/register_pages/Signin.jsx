import {React,useState} from "react";
import black_logo from "../../Assets/blacklogo.png";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signin() {
  const [logdata,setData] = useState({
    email:"",
    password:""
  })

  console.log(logdata)

  const adddata = (e) => {
    const {name,value} = e.target;
    setData(()=> {
      return {
        ...logdata,
        [name]:value
      }
    })
  }
    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src={black_logo} alt="AMAZON-LOGO" />
                </div>
                <div className="sign_form">
                    <form>
                        <h1>Sign in</h1>
                        <div className="form_data">
                            <label htmlFor="">Email</label>
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            onChange={adddata}
                            value={logdata.email}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Atleast 8 characters"
                                onChange={adddata}
                                value={logdata.password}
                            />
                        </div>
                        <button className="signin_btn">Continue</button>
                    </form>
                </div>
                <div className="create_accountinfo">
                    <p>New to Amazon?</p>
                    <Link to="/register">
                        <button>Create your Amazon account</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Signin;
