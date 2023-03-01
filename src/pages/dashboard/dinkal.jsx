import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function Dinkal() {
  const [data, setData] = useState();

  useEffect(() => {
    const callData = async () => {
      const data = await fetch('http://localhost:8009/getAllUser').then(data => data.json())
      console.log(data);
      setData(data)
    }
    callData()
  }, [])
 

  return (
    <>
      <h1> Registration Details</h1>
      <div>
        <table className="mt-10 border " style={{ width: 800 }}>
          <tr>
            <th> Name </th>
            <th> Email </th>
            <th> Password </th>
          </tr>
          {data?.data?.length ? (
            data.data.map((data) => (
              
              <tr>
                <td>{data.fname}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
              </tr>
             
            ))
          ) : (
            <h3>There are no records yet</h3>
          )}
        </table>
      </div>
    </>
  );
}
