import Layout from "@/components/Layout";
import Prodcuts from "@/components/Prodcuts";
import { API_BACK } from "@/config/index";
import { useGlobalContext } from "@/context/AuthContext";
import { useEffect } from "react";
export default function ProductsPage({ events }) {
  const { currentProdcuts, handelProdcuts, handelAllProdcuts } =
    useGlobalContext();
  const getProducts = () => {
    handelProdcuts(events);
    handelAllProdcuts(events);
  };
  useEffect(getProducts);
  return (
    <Layout>
      <Prodcuts prodcuts={currentProdcuts} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const res = await fetch(`${API_BACK}/events`);
  const events = await res.json();
  return {
    props: { events },
  };
}
