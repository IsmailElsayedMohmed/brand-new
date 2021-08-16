import Layout from "@/components/Layout";
import { useGlobalContext } from "@/context/AuthContext";
import { RiDeleteBin5Line, RiArrowGoBackLine } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import { parseCookies } from "../helpers";
import ItemCart from "@/components/ItemCart";
import Price from "@/components/Price";
import { useRouter } from "next/router";
import _ from "lodash";

export default function CartPage({ token }) {
  const { item, delteProdcutInCart, user, sendCartToDashboard } =
    useGlobalContext();
  const uniqe = _.uniqBy(item, "id");
  const totalInput = (params) => {
    return uniqe.reduce((acumlator, inital) => {
      return acumlator + inital.price * inital.calc;
    }, 0);
  };
  const router = useRouter();
  const [submitCart, setSubmitCart] = useState(false);
  const [cartInfo, setCartInfo] = useState({
    number: "",
    address: "",
    block: false,
  });
  const { number, address, block } = cartInfo;
  const handelCartInfo = ({ target }) => {
    const { value, name } = target;
    setCartInfo({ ...cartInfo, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    sendCartToDashboard(
      {
        item,
        number,
        address,
        name: user.username,
        email: user.email,
      },
      token
    );
    setCartInfo({ ...cartInfo, block: true });
    router.push("/products");
  };
  return (
    <Layout>
      <div className="text-cyan-900 font-bold h-36 my-6 flex items-center bg-cyan-200 ">
        <div className="container  text-2xl">
          <Link href="/">
            <a className="text-cyan-900 hover:text-cyan-600 transition-all">
              Home /{" "}
            </a>
          </Link>
          <span className="font-bold text-3xl text-cyan-600 ">Cart</span>
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5  ">
        <span className="font-bold text-center hidden md:inline italic">
          Item
        </span>
        <span className="font-bold text-center hidden md:inline italic">
          Price
        </span>
        <span className="font-bold text-center hidden md:inline italic">
          Quantity
        </span>
        <span className="font-bold text-center hidden md:inline italic">
          Subtotal
        </span>
        <div className="col-span-5 my-6">
          <hr />
        </div>
        {item.length !== 0 &&
          uniqe.map((show) => {
            return <ItemCart show={show} key={show.id} />;
          })}
      </div>
      {item.length === 0 && (
        <div className="text-center py-2  font-bold bg-emerald-100 text-emerald-900">
          Fill The Cart From{" "}
          <Link href="/products">
            <a className="font-bold text-xl font-serif underline text-emerald-900">
              Prdocuts
            </a>
          </Link>
        </div>
      )}
      {item.length !== 0 && (
        <>
          <div className="flex items-center justify-between gap-4 mx-10 my-4">
            <Link href="/products">
              <button className="flexs btn py-2 w-full text-cyan-900 italic font-bold hover:bg-cyan-300 transition-all  ring-2 ring-cyan-600  bg-cyan-200">
                <RiArrowGoBackLine className="text-2xl  mx-2" />
                Back to Prodcuts
              </button>
            </Link>
            <button
              onClick={() => delteProdcutInCart("all")}
              className="btn flexs py-2  w-full text-cyan-900 italic font-bold hover:bg-cyan-300 transition-all  ring-2 ring-cyan-600  bg-cyan-200"
            >
              Delte All Your Cart
              <RiDeleteBin5Line className="text-2xl text-cyan-700 mx-2" />
            </button>
          </div>
          <div className=" flex justify-center  md:justify-end  md:mr-8 mt-12 mb-2 ">
            <div className="p-12 rounded-lg shadow-lg bg-cyan-100 grid grid-cols-2 items-center  border-2 border-cyan-300">
              <div className="font-bold">Shipping Fee:</div>
              <div>FREE</div>
              <div className="font-bold">Order Total:</div>
              <div className="font-bold text-cyan-900 text-xl">
                {Price(totalInput())}
              </div>
            </div>
          </div>
          <div className="text-center  flex justify-center  md:justify-end md:mr-8 mt-4">
            <button
              style={{ width: "320px", maxWidth: "90vw" }}
              onClick={() => setSubmitCart(!submitCart)}
              className="btn hover:bg-cyan-200 bg-cyan-100 font-serif border-2 font-semibold text-cyan-900 border-cyan-700"
            >
              {!user ? (
                <Link href="/login">Login To proceed</Link>
              ) : (
                "Proceed to Submit Your Cart"
              )}
            </button>
          </div>
          {submitCart && user && (
            <form onSubmit={handelSubmit} className="flexs ">
              <div className="font-bold text-cyan-600  p-4 rounded-lg border-2 border-cyan-300">
                <h3 className="font-bold text-center font-serif  text-cyan-900">
                  You have to fill in the following so we can contact you <br />
                  يجب عليك ملئ البيانات الاتية حتي يمكننا التواصل معك
                </h3>
                <hr className="my-2" />
                <div>
                  <h3>Your Number</h3>
                  <input
                    type="text"
                    value={number}
                    name="number"
                    onChange={handelCartInfo}
                    className="btn  border-2 border-cyan-900 px-2 font-bold my-2 w-full"
                  />
                </div>
                <div>
                  <h3>Your Adress</h3>
                  <textarea
                    type="text"
                    value={address}
                    name="address"
                    onChange={handelCartInfo}
                    placeholder="you can describe your location in arbic if you want يمكنك الوصف بالغة العربية"
                    className="btn  border-2 border-cyan-900 px-2 font-bold my-2 w-full"
                  />
                </div>
                <button
                  className={`btn hover:bg-cyan-200  ${
                    block && "pointer-events-none cursor-not-allowed"
                  }
                bg-cyan-100 rounded-lg mx-auto text-center block font-bold border-2 border-cyan-300 px-3 py-1`}
                >
                  Submit your Orders
                </button>
              </div>
            </form>
          )}
        </>
      )}
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const cookie = parseCookies(req);
  return {
    props: {
      token: cookie ? cookie.token : "",
    },
  };
}
