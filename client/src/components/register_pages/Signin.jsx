import {React,useState} from "react";
import black_logo from "../../Assets/blacklogo.png";
import "./Signup.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const senddata = async(e)=>{
    e.preventDefault();
    const {email,password} = logdata;
    const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
        body: JSON.stringify({
            email,
            password
        }),
    });
    const data = await res.json();
    console.log(data);

    if(res.status === 400 || !data){
        toast.error("Invalid Details! 😒👎", {
            position: "top-right",
        });
    } else if (res.status === 401) {
        toast.warn("Incorrect password! 🧐", {
            position: "top-right",
        });
    } else if (res.status == 404) {
        toast.error("User not found! 😶‍🌫️", {
            position: "top-right",
        });
    }
    else {
        toast.success("login Successfull! 😎", {
            position: "top-right",
        });
        setData({...logdata,email:"",password:""});
    }
  }

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src={black_logo} alt="AMAZON-LOGO" />
                </div>
                <div className="sign_form">
                    <form method="POST">
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
                        <button className="signin_btn" onClick={senddata}>Continue</button>
                    </form>
                </div>
                <div className="create_accountinfo">
                    <p>New to Amazon?</p>
                    <Link to="/register">
                        <button>Create your Amazon account</button>
                    </Link>
                </div>
            </div>
            <ToastContainer/>
        </section>
    );
}

export default Signin;
