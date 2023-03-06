import React, { useEffect, useState } from 'react'

 //import Card from 'react-bootstrap/Card';
// import { NavLink } from "react-router-dom"
// import axios from "axios"
// import moment from "moment"
// import Alert from 'react-bootstrap/Alert';

const Notifications = () => {

    // const [data, setData] = useState([]);
    // console.log(data)

    // //const [show, setShow] = useState(false);

    // const getUserData = async () => {
    //     const res = await axios.get("http://localhost:8009/getproduct", {
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });
    //     console.log(res)
    //     if (res.data.status === 401 || !res.data) {
    //         console.log("errror")
    //     } else {
    //         setData(res.data.getUser)
    //     }

    // }


    const [data, setData] = useState();

  useEffect(() => {
    const callData = async () => {
      const data = await fetch('http://localhost:8009/getproduct').then(data => data.json())
      console.log(data);
      setData(data)
    }
    callData()
  }, [])
 
    // const dltUser = async (id) => {
    //     const res = await axios.delete(`/${id}`, {
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });

    //     if (res.data.status === 401 || !res.data) {
    //         console.log("errror")
    //     } else {
    //         getUserData()
    //         setShow(true)
    //     }
    // }

    // useEffect(() => {
    //     getUserData()
    // }, [])

    return (
        <>
            {/* {
                show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    User Delete
                </Alert> : ""
            } */}
            <div className='container mt-2'>
                <h1 className='text-center mt-2'>MERN Product Upload</h1>
                <div className='text-end'>
                   
                </div>

                <div className='row d-flex justify-content-between align-iteams-center mt-5'>

                    {
                        // data.length > 0 ? data.map((data, i) => {
                        //     return (
                        //         <>
                        //             <Card style={{ width: '22rem', height: "18rem" }} className="mb-3">
                        //                 <Card.Img variant="top" style={{ width: "100px", textAlign: "center", margin: "auto" }} src={`/uploads/${data.imgpath}`} className='mt-2' />
                        //                 <Card.Body className='text-center'>
                        //                     <Card.Title>product Name : {data.name}</Card.Title>
                        //                     <Card.Text>
                        //                         product description :{data.description}
                        //                     </Card.Text>
                        //                     {/* <Card.Text>
                        //                         product Category :{el.Category}
                        //                     </Card.Text>
                        //                     <Card.Text>
                        //                          product Price :{el.Price}
                        //                     </Card.Text>
                        //                     <Card.Text>
                        //                          product dprice :{el.dprice}
                        //                     </Card.Text> */}
                        //                     {/* <Button variant="danger" className='col-lg-6 text-center' onClick={() => dltUser(el._id)}>Delete</Button> */}
                        //                 </Card.Body>
                        //             </Card>
                        //         </>
                        //     )
                        // }) : ""
                    }

            {data?.data?.length ? (
                    data.data.map((data) => (
                    
                        <div style={{ width: '22rem', height: "18rem" }} className="mb-3">
                        <div variant="top" style={{ width: "100px", textAlign: "center", margin: "auto" }} src={`/uploads/${data.imgpath}`} className='mt-2' />
                        <div className='text-center'>
                            <div>product Name : {data.name}</div>
                            <div>
                                product description :{data.description}
                            </div>
                            
                        </div>
                    </div>
                    
                    ))
                ) : (
                    <h3>There are no records yet</h3>
                )}
                </div>
            </div>
        </>
    )
}

export default Notifications
