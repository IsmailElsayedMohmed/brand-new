import Layout from "@/components/Layout";
import { FaUser } from "react-icons/fa";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const { login, error } = useGlobalContext();
  const [items, setItems] = useState({ email: "", password: "" });
  const { email, password } = items;
  const handelChange = ({ target }) => {
    const { value, name } = target;
    setItems({ ...items, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    login({ identifier: email, password });
  };
  useEffect(() => error && toast.error(error + "Correct"), [error]);
  return (
    <Layout title="Login">
      <div className="h-screen flexs flex-col -mt-24  ">
        <Cart
          onSubmit={handelSubmit}
          className="py-2 px-4 border-2 bg-cyan-100 border-cyan-700 shadow-lg rounded-lg "
        >
          <ToastContainer />
          <h3 className="font-bold text-cyan-900 flex space-x-2 text-3xl mb-8">
            <FaUser />
            <span>Login</span>
          </h3>
          <div className="my-4">
            <h3 className="font-bold text-cyan-900 my-2">Email Adress</h3>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handelChange}
              className="py-1 font-bold text-cyan-900 btn w-full px-2 border-2 border-cyan-300"
            />
          </div>
          <div className="mb-8 mt-6">
            <h3 className="font-bold text-cyan-900 my-2">Password</h3>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handelChange}
              className="py-1 font-bold text-cyan-900 btn w-full px-2 border-2 border-cyan-300"
            />
          </div>
          <button className="bg-cyan-400 my-2  cursor-pointer w-full py-1 text-cyan-900 rounded-lg hover:bg-cyan-500 transition-all  font-bold">
            Login
          </button>
          <p className="text-cyan-900  py-2">
            {"Don't"} Have An Account ?{" "}
            <Link href="/register">
              <a className="text-cyan-900 font-bold text-lg">Register</a>
            </Link>
          </p>
        </Cart>
      </div>
    </Layout>
  );
}
const Cart = styled.form`
  max-width: 90vw;
  margin: auto;
  width: 600px;
`;
