import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";
export default function AboutThisPage() {
  return (
    <Layout>
      <div className="grid relative  lg:grid-cols-3 gap-8 justify-center items-start lg:items-center container my-20">
        <ImageCont>
          <div className="h-96  rounded-lg">
            <Image
              layout="fill"
              src="/images/image1.jpg"
              className="rounded-lg"
              alt=""
            />
          </div>
          <div className="absolute border-2 border-cyan-300 rounded-full bottom-0 left-0 z-20 w-36 h-36">
            <Image
              layout="fill"
              src="/images/image2.jpg"
              className="rounded-full  "
              alt=""
            />
          </div>
          <div className="absolute border-2 border-cyan-300 rounded-full bottom-0 right-0 z-20 w-36 h-36">
            <Image
              layout="fill"
              src="/images/image3.jpg"
              className="rounded-full  "
              alt=""
            />
          </div>
          <div className="absolute border-2 border-cyan-300 rounded-full top-0 left-0 z-20 w-36 h-36">
            <Image
              layout="fill"
              src="/images/image4.jpg"
              className="rounded-full  "
              alt=""
            />
          </div>
          <div className="absolute border-2 border-cyan-300 rounded-full top-0 right-0 z-20 w-36 h-36">
            <Image
              layout="fill"
              src="/images/image5.jpg"
              className="rounded-full  "
              alt=""
            />
          </div>
        </ImageCont>
        <div className="lg:col-span-2">
          <h1 className="font-bold text-cyan-900 text-3xl my-6">About Us</h1>
          <UnderLine />
          <p className="text-gray-600 tracking-lg text-xl   my-4 font-serif font-bold tracking-wide">
            Welcome to our e-commerce site {"Brand New"}, it is a store in which
            you get to choose Your Own Prodcut and it goes like that , first you
            pick up your prodcut and click on it and it opens a page to make
            sure and determin how many selected prodcut you need as well as
            which color do you prefer and then you go to your Cart Shop and it
            calculates the money automautically, and then you have to log in to
            proceed to the full buying Process , and after log in you have to
            write your number as well as your adress so we can contact you.
            <br />
            مرحبا بك في متجرنا , هو متجر من خلالة يمكنك اختيار المنتج الخاص بك
            من متجرنا بالضغط علي المنتج وعند الضغط تفتح صفحة تحدد كم من المنتج
            تحتاجة اذا تريد اكتر عدد معين من المنتج المختار وكذالك يمكن اختيار
            اللون الخاص بالمنتج الذي اخترتة وبعد عملية اختيار المنتجات وتأكيد كل
            ما هو في المخزن يجب عليك اولا ان تسجل الدخول ومن ثم تكمل عملية
            الشراء وعملية الشراء كلأتي يجب كتابة رقم الموبايل الخاص بك وكذالك
            العنوان حتي يمكننا الوصول اليك
          </p>
        </div>
      </div>
    </Layout>
  );
}

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
const ImageCont = styled.div`
  box-shadow: 2px 0 0 cyan;
  position: relative;
`;
