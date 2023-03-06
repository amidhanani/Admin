
import React, { useState } from 'react'
const Product = () => {

  const [inpval, setInpval] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    diprice:"",
    quantity:"",

  });

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
        return {
            ...inpval,
            [name]: value,
          
        }
    })
};

  const addProduct = async (e) => {
    e.preventDefault();

    const { name, description, category, price, diprice, quantity } = inpval;

        const data = await fetch("http://localhost:8009/setproduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name, description, category, price, diprice, quantity
            })
        });

        
        const res = await data.json();
         //console.log(res.status);

        if (res.status === 201) {
            // toast.success("Registration Successfully done !", {
            //     position: "top-center"
            // });
             alert("Successfully AddProduct");
            setInpval({ ...inpval, name: "", description: "", category: "", price: "",  diprice: "",  quantity: "" });
        }
    }
    


  return (
    <div>
      <form >
      <div class="mb-6">
        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
        <input type="text" onChange={setVal} value={inpval.name} name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
      </div>

      <div class="mb-6">
        <label   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description </label>
        <input type="text" onChange={setVal} value={inpval.description} name="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
      </div>

      {/* <div class="mb-6">
        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product category</label>
        <select id="countries" name="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option onChange={setVal} value={inpval.category} > Bad </option>
            <option onChange={setVal} value={inpval.category} >Chair</option>
            <option onChange={setVal} value={inpval.category} >Table</option>
            <option onChange={setVal} value={inpval.category} >Console</option>
        </select>
      </div> */}

      <div class="mb-6">
        <label   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product category </label>
        <input type="text" onChange={setVal} value={inpval.category} name="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
      </div>

      <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
        <input type="text" onChange={setVal} value={inpval.price} name="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
      </div>

      <div class="mb-6">
        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product DiscountPrice</label>
        <input type="text" onChange={setVal} value={inpval.diprice} name="diprice"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
      </div>

      <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Quantity</label>
        <input type="text" onChange={setVal} value={inpval.quantity} name="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
      </div>

      <div class="mb-6">
  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
  <input type="file"   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</div>

      
      <button type="submit" onClick={addProduct} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
    </div>
  )
}

export default Product
