import HeaderProdcuts from "@/components/HeaderProdcuts";
import ContentProdcuts from "@/components/ContentProdcuts";
import styled from "styled-components";
import Link from "next/link";
export default function Prodcuts({ prodcuts }) {
  return (
    <div>
      <div className="bg-cyan-100 my-12">
        <div className="container  h-36 flex items-center font-bold text-xl text-cyan-900">
          <Link href="/">
            <a>Home /</a>
          </Link>{" "}
          <span className="text-2xl text-cyan-600"> Prodcuts</span>
        </div>
      </div>
      <div className="container">
        <HeaderProdcuts />
        <GridCart>
          {prodcuts.map((prodcuts) => {
            return <ContentProdcuts key={prodcuts.id} prodcut={prodcuts} />;
          })}
        </GridCart>
      </div>
    </div>
  );
}
const GridCart = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 15px;
`;
