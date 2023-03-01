import React, { useState } from 'react'

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      category: "",
      price:"",
      diprice: "",
      Quantity: "",
  };
  this.handlesubmit = this.handlesubmit.bind(this); 
}

handlesubmit(e) {
  e.preventDefault();
  const { name,description, category, price, diprice, Quantity } = this.state;
  console.log( name, description, category, price,  diprice, Quantity );
  fetch("http://localhost:5000/product",{
      method:"POST",
      crossDomain:true,
      headers:{
          "content-type":"application/json",
          Accept:"application/json",
          "Accept-Control-Allow-Origin":"'",
      },
      body:JSON.stringify({
        name,
        description,
        category,
        price,
        diprice,
        Quantity,
      }),
  })
  .then((res)  => res.json())
  .then((data) => {
      console.log(data, category);
      alert(data.status);
  });
}
  
  render() {
    return (
      <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
         
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST" onSubmit={this.handlesubmit}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Product name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        onChange={ (e)=> this.setState({name: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Product image</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                      <input
                        type="file"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                     </div>
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Product description
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        onChange={ (e)=> this.setState({description: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option  onChange={ (e)=> this.setState({category: e.target.value})}>Sofa</option>
                        <option  onChange={ (e)=> this.setState({category: e.target.value})}>Chair</option>
                        <option  onChange={ (e)=> this.setState({category: e.target.value})}>Bed</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        onChange={ (e)=> this.setState({price: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Discount Price
                      </label>
                      <input
                        type="text"
                        name="dprice"
                        id="dprice"
                        autoComplete="address-level2"
                        onChange={ (e)=> this.setState({diprice: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="qua"
                        id="qua"
                        autoComplete="address-level2"
                        onChange={ (e)=> this.setState({Quantity: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
      
    );

   
  }
}









