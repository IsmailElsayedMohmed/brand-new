import Layout from "@/components/Layout";
import axios from "axios";
import { parseCookies } from "../helpers";
import { API_BACK } from "../config";

import ItemCart from "@/components/ItemCart";
import { useGlobalContext } from "@/context/AuthContext";
import _ from "lodash";
export default function DashboardPage({ items, token }) {
  const { delteFromDashboard } = useGlobalContext();
  const uniqe = _.uniqBy(items, "id");
  return (
    <Layout title="DashBoard">
      <div>
        <h3 className=" text-xl font-bold text-center  p-4  my-8 bg-cyan-100 text-cyan-900">
          Requsted Orders
        </h3>
        {uniqe.map(({ items: { address, name, item, number, email }, id }) => {
          return (
            <div
              key={id}
              className="border-2 border-cyan-300 p-2 rounded-lg m-2 my-6 bg-cyan-200"
            >
              <ul className="border-2 w-96 mx-auto p-4 border-cyan-300  rounded-lg m-2 my-3 text-center text-cyan-900 font-bold font-mono">
                <li>{email}</li>
                <li>{name}</li>
                <li>{number}</li>
                <li>{address}</li>
              </ul>
              {item.map((show) => (
                <ItemCart
                  show={show}
                  key={show.id}
                  token={token}
                  idItems={id}
                  delteFromDashboard={delteFromDashboard}
                />
              ))}
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  const { data: items } = await axios.get(`${API_BACK}/items`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    props: {
      items,
      token,
    },
  };
}
