import React from 'react'
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: ""
   
});


const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
        return {
            ...inpval,
            [name]: value
        }
    })
};

const AdminData = async (e) => {
    e.preventDefault();

    const { name, email, password } = inpval;

    if (name === "") {
        toast.warning("fname is required!", {
            position: "top-center"
        });
    } else if (email === "") {
        toast.error("email is required!", {
            position: "top-center"
        });
    } else if (!email.includes("@")) {
        toast.warning("includes @ in your email!", {
            position: "top-center"
        });
    } else if (password === "") {
        toast.error("password is required!", {
            position: "top-center"
        });
    } else if (password.length < 6) {
        toast.error("password must be 6 char!", {
            position: "top-center"
        });
    } else {
        // console.log("user registration succes50y done");


        const data = await fetch("http://localhost:8009/admindata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password
            })
        });

        
        const res = await data.json();
        //console.log(res.status);

        if (res.status === 201) {
            // toast.success("Registration Success50y done !", {
            //     position: "top-center"
            // });
             alert("user registration done");
            setInpval({ ...inpval, name: "", email: "", password: "" });
        }
    }
    
}

  return (
     <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Name"  onChange={setVal} value={inpval.name} name="name"  size="lg" />
            <Input type="email"  onChange={setVal} value={inpval.email} name="email"  label="Email" size="lg" />
            <Input type="password" onChange={setVal} value={inpval.password} name="password"   label="Password" size="lg" />
            
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth  onClick={AdminData}>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default SignUp




