import { useEffect, useState } from "react";
//import Alert from 'react-bootstrap/Alert';

const Productview = () => {

    const [data, setData] = useState();

    useEffect(() => {

        getproduct();

    }, []);

    const getproduct =() => {
        const callData = async () => {
            const data = await fetch('http://localhost:8009/getproduct').then(data => data.json())
            console.log(data);
            setData(data)
          }
          callData()
    };

    const deleteproduct = (id,name) => {
        if(window.confirm(`Are you sure you want to delete ${name}`)){
             fetch("http://localhost:8009/deleteproduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              userid: id,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.data);
            getproduct();
        })
        }else{
           
        }
    }

  return (
        <>
        {/* {
                show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    User Delete
                </Alert> : ""
            } */}

        <div className="flex flex-wrap sm:flex-no-wrap items-center ml-10  w-full">

        {data?.data?.length ? (
                    data.data.map((data) => (
                    
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div>
                            <h1> Image </h1>
                            </div>
                            <div class="p-5">
                                <div class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">  Name: {data.name}</div>
                                <div class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Description : {data.description}</div>
                                <div class="mb-3 font-normal text-gray-700 dark:text-gray-400"> category: {data.category}</div>
                                <div class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Price: {data.price}</div>
                                <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">  DiscountPrice: {data.diprice}</div>
                                <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">  Quantity: {data.quantity}</div>
                                <div className=' grid-flow-col justify-between'>
                                    <button type="submit"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                                    <button type="submit" onClick= {() => deleteproduct(data._id, data.name)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                                </div>
                                
                            </div>
                        </div>
                    
                    ))
                ) : (
                    <h3>There are no records yet</h3>
            )}
            
            
        </div>
        </> 
  )
}

export default Productview