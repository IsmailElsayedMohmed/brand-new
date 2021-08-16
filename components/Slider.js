import ContentProdcuts from "@/components/ContentProdcuts";
import styled from "styled-components";

export default function Slider({ prodcut }) {
  return (
    <div className="bg-cyan-100 py-10 my-10 shadow-lg">
      <h1 className="text-center text-3xl font-bold text-cyan-900">
        Most Consumed Products
      </h1>
      <UnderLine />
      <Container className="container my-6 items-center grid gap-8">
        {prodcut.map((prodcut, key) => {
          return <ContentProdcuts key={key} prodcut={prodcut} />;
        })}
      </Container>
    </div>
  );
}

const Container = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;
const UnderLine = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 4px;
    background-color: cyan;
  }
`;
