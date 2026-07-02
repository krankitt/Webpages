import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Course = () => {
  const api = "http://localhost:8080/products";

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    discount: "",
    category: "",
    image: "",
  });

  const [items, setItems] = useState([]);
  const [updateCount, setupdatecount] = useState(0);

  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(api);
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [updateCount]);

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(api, product);
      console.log(response.data);
      // alert("Product Added Successfully");
      toast.success("Product added", { position: "bottom-right" });
      setupdatecount(updateCount + 1);
      setProduct({
        title: "",
        description: "",
        price: "",
        discount: "",
        category: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
      console.log(error.response?.data);
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="bg-white p-12 rounded-2xl w-10/12 mx-auto flex gap-2">
        <div className="w-[350px] border border-gray-300 p-6 rounded-lg">
          <h1 className="text-lg font-semibold mb-3">Add Products</h1>
          <form action="" className="space-y-5" onSubmit={createProduct}>
            <input
              required
              placeholder="Title"
              className="border border-gray-300 w-full p-2.5 rounded-lg"
              name="title"
              onChange={handleChange}
              value={product.title}
            />
            <input
              required
              placeholder="Price"
              className="border border-gray-300 w-full p-2.5 rounded-lg"
              name="price"
              type="number"
              onChange={handleChange}
              value={product.price}
            />
            <input
              required
              placeholder="Discount"
              className="border border-gray-300 w-full p-2.5 rounded-lg"
              name="discount"
              type="number"
              onChange={handleChange}
              value={product.discount}
            />
            <input
              required
              placeholder="Category"
              className="border border-gray-300 w-full p-2.5 rounded-lg"
              name="category"
              onChange={handleChange}
              value={product.category}
            />
            <input
              required
              type="url"
              placeholder="Image"
              className="border border-gray-300 w-full p-2.5 rounded-lg"
              name="image"
              onChange={handleChange}
              value={product.image}
            />
            <textarea
              required
              placeholder="Description"
              className="border border-gray-300 w-full p-2.5 rounded-lg"
              name="description"
              onChange={handleChange}
              value={product.description}
            />
            <button className="border bg-indigo-500 px-4 py-2.5 w-full rounded-lg hover:scale-110 trasition duration-300">
              Submit
            </button>
          </form>
        </div>
        <div className="flex-1 border border-gray-300 p-6 rounded-lg grid grid-cols-2 gap-2">
          {items.map((item) => (
            <div key={item.id} className="border border-gray-300 rounded-lg">
              <img src={item.image} alt="product" />
              <div className="p-4">
                <h1 className="capitalize font-medium">{item.title}</h1>
                <p className="text-black/60">{item.description.slice(0, 30)}</p>
                <div className="mt--2 flex items-center gap-3">
                  <h1>
                    ₹
                    {(item.price - (item.price * item.discount) / 100).toFixed(
                      2
                    )}
                  </h1>
                  <del>₹{item.price}</del>
                  <p>({item.discount}%)</p>
                </div>
                <button className="bg-green-500 py-2.5 w-full mt-3 rounded text-white font-medium active:scale-80 trasition duration-300">
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
