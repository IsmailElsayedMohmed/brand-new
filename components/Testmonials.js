import styled from "styled-components";
import Image from "next/image";

export default function Testmonials() {
  return (
    <Container
      id="opninios"
      className="bg-cyan-200 text-cyan-900 font-bold  py-10"
    >
      <div className="container">
        <h1 className="text-2xl lg:text-3xl italic ">Opninios Section</h1>
        <UnderLine></UnderLine>
        <p className="text-medium py-3">
          Here Some Opinions about our Products
          <br />
          بعض الاراء حول المنتجات
        </p>
      </div>
      <GridCarts className="container">
        <div className="border-4 border-cyan-200 rounded-lg   flexs  italic">
          <Image
            height={450}
            width={500}
            src="/images/testi.jpg"
            alt=""
            className=" rounded-lg object-cover border-4 border-cyan-600  hover:border-cyan-700 "
          />
        </div>
        <div className="border-4 border-cyan-200 rounded-lg   flexs  italic">
          <Image
            height={450}
            width={500}
            src="/images/testi1.jpg"
            alt=""
            className=" rounded-lg object-cover border-4 border-cyan-600 hover:border-cyan-700  "
          />
        </div>
        <div className="border-4 border-cyan-200 rounded-lg   flexs  italic">
          <Image
            height={450}
            width={500}
            src="/images/testi2.jpg"
            alt=""
            className=" rounded-lg object-cover border-4 border-cyan-600 hover:border-cyan-700  "
          />
        </div>
      </GridCarts>
    </Container>
  );
}
const Container = styled.div`
  background-image: linear-gradient(to bottom, #eee 60%, #ecfeff 60%);
`;
const GridCarts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
`;
const UnderLine = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    width: 200px;
    height: 4px;
    background-color: cyan;
  }
`;
