import styled from "styled-components";
import { BsBoxArrowInLeft } from "react-icons/bs";
import newPrice from "@/components/Price";
import { HiOutlineCheck } from "react-icons/hi";
import { ImTruck } from "react-icons/im";
import Link from "next/link";
import Image from "next/image";
export default function ContentProdcuts({ prodcut }) {
  return (
    <div className="font-serif tracking-wide">
      <ImageStyle className="relative transition-all">
        <div className="shadow-lg rounded-lg hey  h-96 object-cover hover:bg-cyan-100">
          <Imagee src={prodcut.image[0].url} layout="fill" objectFit="cover" />
        </div>
        <div
          style={{ borderBottomRightRadius: 25 }}
          className="absolute flexs  text-cayn-900 text-xl inset-0 border-t-4 border-cyan-200  bg-cyan-200 w-12 h-12"
        >
          <ImTruck className="text-gray-800 text-2xl" /> <HiOutlineCheck />
        </div>
        <div className="flexs absolute opacity-0  inset-0 w-full h-full bg-cyan-900 bg-opacity-75 transition-all rounded-lg">
          <Link href={`/products/${prodcut.slug}`}>
            <a
              className="
            z-10 text-cyan-400 font-bold text-4xl cursor-pointer bg-cyan-50 transition-all hover:bg-cyan-900
            border-2 border-cyan-400 p-2 rounded-full "
            >
              <BsBoxArrowInLeft />
            </a>
          </Link>
        </div>
      </ImageStyle>
      <div className="flex justify-between items-center font-bold  text-gray-900">
        <p className="py-2 ">{prodcut.title}</p>
        <h4 className="text-cyan-900 text-xl">{newPrice(prodcut.price)}</h4>
      </div>
    </div>
  );
}

const Imagee = styled(Image)`
  .hey {
    width: 100% !important;
    height: 368px !important;
  }
`;
const ImageStyle = styled.div`
  &:hover > div {
    opacity: 1;
  }
  &:hover {
    &::before {
      z-index: 1;
      position: absolute;
      content: "";
      bottom: 0;
      width: 100%;
      height: 100%;
      background-image: url("/images/wave2.svg");
      background-repeat: no-repeat;
      background-position: bottom;
      transform: rotate(180deg);
    }
    &::after {
      z-index: 1;
      position: absolute;
      content: "";
      bottom: 0;
      width: 100%;
      height: 100%;
      background-image: url("/images/wave2.svg");
      background-repeat: no-repeat;
      background-position: bottom;
    }
  }
`;
