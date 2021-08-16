import { useGlobalContext } from "@/context/AuthContext";
import styled from "styled-components";
import Price from "@/components/Price";
import { RiDeleteBin5Line } from "react-icons/ri";
import Image from "next/image";

export default function ItemCart({ show, idItems, delteFromDashboard, token }) {
  const { numberProdcutPerCartProdcut, delteProdcutInCart } =
    useGlobalContext();
  return (
    <div className="col-span-5 border-2 border-cyan-300 mx-3 md:border-0 shadow-lg bg-cyan-100 p-2 grid justify-center items-center text-center grid-cols-3 md:grid-cols-5  my-6">
      <div className="flexs ">
        <Image
          src={show.showImage}
          alt=""
          width={96}
          height={96}
          className=" rounded-md shadow-lg object-cover "
        />
        <div className="flex flex-col ml-2  items-start ">
          <h1 className="font-bold text-cyan-900">{show.title}</h1>
          <Color className="w-3 h-3 rounded-sm" color={show.color}></Color>
          <div className="text-cyan-600 text-sm  block md:hidden">
            {Price(show.price)}
          </div>
        </div>
      </div>
      <div className="text-cyan-900 hidden md:block">{Price(show.price)}</div>
      <div className="font-bold btn text-cyan-800  text-3xl flexs">
        <button
          name="minus"
          onClick={() => {
            +show.calc > 1 && numberProdcutPerCartProdcut(show.id, "minus");
          }}
          className="btn text-4xl pr-2"
        >
          -
        </button>
        <span>{show.calc}</span>
        <button
          name="plus"
          onClick={() => {
            +show.calc < 10 && numberProdcutPerCartProdcut(show.id);
          }}
          className="btn text-4xl pl-2"
        >
          +
        </button>
      </div>
      <div className="text-cyan-600 text-xl font-bold hidden md:block">
        {Price(show.price * show.calc)}
      </div>
      <div className="ml-16 md:ml-8 text-2xl text-cyan-900 font-bold  ">
        <RiDeleteBin5Line
          onClick={() =>
            !delteFromDashboard
              ? delteProdcutInCart(show.id)
              : delteFromDashboard(idItems, token)
          }
          className="cursor-pointer text-4xl rounded-full py-1 border-2 hover:bg-gray-400 bg-gray-100 text-cyan-900 border-cyan-300 "
        />
      </div>
    </div>
  );
}
const Color = styled.div`
  background-color: ${({ color }) => color || "#000"};
`;
