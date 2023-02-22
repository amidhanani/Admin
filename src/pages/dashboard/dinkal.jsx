import { Button } from "@material-tailwind/react";


function sayHello() {
    alert('Hello!');
  }
  
export default function Dinkal(){

    return(
        <><h1>Dinkal Donda</h1>
        
        <Button onClick={sayHello}>Alert</Button></>
    );

}