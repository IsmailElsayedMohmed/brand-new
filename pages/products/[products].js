import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { API_BACK } from "@/config/index";
import { HiOutlineCheck } from "react-icons/hi";
import { useGlobalContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import styled from "styled-components";
import newPrice from "@/components/Price";
import Image from "next/image";
import Loading from "@/components/Loading";
export default function Products({ events }) {
  const [showImage, setShowImage] = useState(events.image[0].url);
  const [color, setColor] = useState(events.colors[0]);
  const [calc, setCalc] = useState(1);
  const { item, saveItems } = useGlobalContext();
  const route = useRouter();
  return (
    <Layout>
      <div className="h-36 bg-cyan-200 my-12 flex items-center">
        <div className="container ">
          <p className="font-bold text-xl text-cyan-900">
            Home
            <Link href="/products">
              <a className="text-2xl text-cyan-600">/ Prodcuts</a>
            </Link>
          </p>
        </div>
      </div>
      {events.length === 0 || !events ? (
        Loading(events)
      ) : (
        <div className="container my-4 grid lg:grid-cols-2 gap-4 ">
          <div className="flexs flex-col ">
            <div className="border-4 p-2 my-4  border-cyan-200 rounded-lg bg-cyan-100 text-center ">
              <Image
                src={showImage}
                onClick={() => setShowImage(events.image[0].url)}
                alt=""
                width={"800"}
                height={"800"}
                className="avatar"
              />
              <style jsx global>{`
                .avatar {
                  padding: 0;
                  border-radius: 15px;
                  margin: 0;
                }
              `}</style>
            </div>
            <div className="grid grid-cols-5 gap-5">
              <div
                className={`${
                  showImage === events.image[0].url &&
                  "border-2 border-cyan-400"
                } shadow-lg px-1 pt-1 rounded-lg  border-cyan-500 bg-cyan-100  object-cover cursor-pointer`}
              >
                <Image
                  src={events.image[0].url}
                  onClick={() => setShowImage(events.image[0].url)}
                  alt=""
                  width={200}
                  height={200}
                  className={"image"}
                />
                <style jsx global>{`
                  .image {
                    padding: 0;
                    border-radius: 8px;
                    margin: 0;
                  }
                `}</style>
              </div>
              {events.imageColor.map((e) => {
                return (
                  <div
                    key={e.id}
                    className={`shadow-lg  px-1 pt-1 rounded-lg  bg-cyan-100 object-cover cursor-pointer ${
                      showImage === e.url && "border-2 border-cyan-400"
                    }`}
                  >
                    <Image
                      onClick={() => setShowImage(e.url)}
                      src={e.url}
                      alt=""
                      width={200}
                      height={200}
                      className={"image"}
                    />
                    <style jsx global>{`
                      .image {
                        padding: 0;
                        border-radius: 8px;
                        margin: 0;
                      }
                    `}</style>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex relative flex-col border-2 bg-cyan-50 overflow-hidden border-cyan-300 p-8 rounded-3xl shadow-lg">
            <h1 className="font-bold text-cyan-900 text-4xl tracking-wider z-10	italic ">
              {events.title}
            </h1>
            <h4 className="font-bold text-cyan-600 my-2 text-xl tracking-wider z-10		italic ">
              EGP {events.price / 100} ({newPrice(events.price)})
            </h4>
            <p className="tracking-wide text-cyan-800 my-4  z-10 italic text-medium	 leading-7">
              {events.description}
            </p>
            <ul className="grid grid-cols-4 z-10	 ">
              <li className="block py-2 text-cyan-900 font-semibold tracking-wide">
                Available :
              </li>
              <li className="block py-2 col-span-3 font-bold text-cyan-700">
                In Stock
              </li>
              <li className="block py-2 text-cyan-900 font-semibold tracking-wide">
                Brand :
              </li>
              <li className="block py-2 col-span-3 font-bold text-cyan-700">
                {events.company}
              </li>
              <li className="text-cyan-900 font-semibold tracking-wide">
                Colors :
              </li>
              <ul className="flex space-x-2 col-span-3">
                {events.colors.map((e, index) => {
                  return (
                    <ListItem
                      key={index}
                      color={e}
                      colorPicked={color}
                      onClick={() => setColor(e)}
                      className={`flexs text-white text-xl  transition-all rounded-full w-6 h-6 cursor-pointer  mb-3`}
                    >
                      {color === e && <HiOutlineCheck />}
                    </ListItem>
                  );
                })}
              </ul>
            </ul>
            <div className="bg-cyan-900 w-full h-px"></div>
            <div className="btn text-5xl z-10 font-bold text-cyan-900 ml-4 my-4 ">
              <button
                onClick={() => calc > 1 && setCalc(+calc - 1)}
                className=" mr-2"
              >
                -
              </button>
              <span className="">{calc}</span>
              <button
                onClick={() => calc < 10 && setCalc(+calc + 1)}
                className=" ml-2 "
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                saveItems({
                  calc,
                  color,
                  showImage,
                  title: events.title,
                  price: events.price,
                  id: events.id,
                });
                localStorage.setItem("item", JSON.stringify(item));
                route.push("/cart");
              }}
              className="btn  z-10 my-5 py-1 font-bold w-36 hover:bg-cyan-400 ring-4 ring-cyan-200 px-4 bg-cyan-300 shadow-lg text-cyan-900"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getServerSideProps({ query: { products } }) {
  const res = await axios(`${API_BACK}/events?slug=${products}`);
  return {
    props: { events: res.data[0] },
  };
}
const ListItem = styled.li`
  background-color: ${({ color }) => color};
  opacity: ${({ colorPicked, color }) => (colorPicked === color ? "1" : "0.6")};
  &:hover {
    opacity: 1;
  }
`;
