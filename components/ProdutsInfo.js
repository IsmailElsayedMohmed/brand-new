import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function ProdutsInfo() {
  return (
    <div className="grid  lg:grid-cols-2 items-center justify-between gap-4 py-20 container">
      <div>
        <h1 className="font-bold text-2xl text-cyan-900 mb-8">
          What is Brand New !
        </h1>
        <UnderLine />
        <p className="text-gray-600 tracking-lg text-xl   my-4 font-serif font-bold">
          Welcome To our Store where we display our Prodcuts happliy , in this
          website you are going to run into accessories such as wallets and
          handbag .... you can read more about our Website from
          <Link href="/about">
            <a className="font-bold text-cyan-700 mx-2 underline">About.</a>
          </Link>
          ... by the end of the day we hobe you like this website and don't
          forget to tell us your opnion so we can put it in the
          <a
            href="#opninios"
            className="font-bold text-cyan-700 mx-2 underline"
          >
            opnions section.
          </a>
          <br />
          مرحبا بك في متجرنا حيث نعرض به اعمالنا الطيبة وننقلها لكم بسعادة, في
          هذا الموقع نعرض بعض المنتجات تشمل محافظ وشنط كتف وشنط ظهر يمكنك معرفة
          المزيد من موقعنا من قسم
          <Link href="/about">
            <a className="font-bold text-cyan-700 mx-2 underline">من نحن </a>
          </Link>
          وهكذ... , نتمني ان نال اعجابكم ولاتنسي ان تكتب ارائك الطيبة حيث يمكنها
          نشرها بالموقع ب
          <a
            href="#opninios"
            className="font-bold text-cyan-700 mx-2 underline"
          >
            قسم الاراء
          </a>
        </p>
        <Link href="/products">
          <div className="text-center    lg:text-left">
            <button className="btn    hover:bg-cyan-700 text-white transition-all font-bold px-4 py-1 bg-cyan-600 border-2 rounded-lg shadow-lg border-cyan-400">
              Shop Now
            </button>
          </div>
        </Link>
      </div>
      <div className="relative flex ml-28 mt-5 lg:mt-0 lg:ml-20 ">
        <Image1
          width={384}
          height={384}
          src="/images/MainPageIcon.png"
          className="shadow-2xl  z-10 rounded-lg  "
        />
        <Image2 className="absolute top-0  w-96 transition-all h-96 border-2 border-cyan-300" />
      </div>
    </div>
  );
}
const Image1 = styled(Image)`
  animation: play 9s ease-in infinite alternate-reverse;
  @keyframes play {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
      background-color: #706f2d53;
    }
  }
`;
const Image2 = styled.div`
  animation: play 6s ease-in infinite alternate-reverse;
  @keyframes play {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
      background-color: #706f2d53;
    }
  }
`;

const UnderLine = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0%;
    margin-top: -20px;
    left: 0%;
    width: 200px;
    height: 4px;
    background-color: cyan;
  }
`;
