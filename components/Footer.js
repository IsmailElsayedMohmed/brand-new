import { AiFillFacebook } from "react-icons/ai";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flexs text-cyan-900 font-bold text-xl italic w-full bg-cyan-100 py-10 border-t-4 mt-12  relative">
      <div className="text-center z-10  ">
        Copy Right &copy; Served and <br /> Made By
        <span className="text-cyan-600">Mohmed {"Elsayed's"} Team</span>
      </div>
      <ul className="flexs  -ml-3 text-2xl z-10 -mt-8">
        <Link href="https://www.facebook.com/BASITABRANDS">
          <a
            target="_blank"
            className="border-2 hover:bg-cyan-600 transition-all border-cyan-300 rounded-full shadow-lg"
          >
            <AiFillFacebook />
          </a>
        </Link>
      </ul>
    </div>
  );
}
