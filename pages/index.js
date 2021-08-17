import Slider from "@/components/Slider";
import Layout from "@/components/Layout";
import axios from "axios";
import ProdutsInfo from "@/components/ProdutsInfo";
import Testmonials from "@/components/Testmonials";
import { API_BACK } from "@/config/index";
import { useEffect } from "react";
import { useGlobalContext } from "@/context/AuthContext";

export default function Home({ events }) {
  const { AllProdcuts, handelProdcuts, handelAllProdcuts } = useGlobalContext();
  const getProducts = () => {
    handelProdcuts(events);
    handelAllProdcuts(events);
  };
  useEffect(getProducts);
  return (
    <Layout>
      <ProdutsInfo />
      <Slider prodcut={AllProdcuts} />
      <Testmonials />
    </Layout>
  );
}
export async function getServerSideProps() {
  const res = await axios(`${API_BACK}/events?_limit=3`);
  return {
    props: { events: res.data },
  };
}
