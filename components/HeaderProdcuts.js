import { FaSlidersH } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "@/context/AuthContext";
export default function HeaderProdcuts() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("high");
  const { handelProdcuts, currentProdcuts, AllProdcuts } = useGlobalContext();
  const handelChange = ({ target: { value } }) => {
    const filterProdcut = currentProdcuts.filter((e) =>
      e.title.toLowerCase().startsWith(value.toLowerCase())
    );
    handelProdcuts(filterProdcut);
    if (value === "") {
      handelProdcuts(AllProdcuts);
    }
    setSearch(value);
  };
  const handelSelect = ({ target: { value } }) => {
    let newProdcuts;
    if (value === "low") {
      newProdcuts = currentProdcuts.slice(0).sort((a, b) => a.price - b.price);
    } else {
      newProdcuts = currentProdcuts.slice(0).sort((a, b) => b.price - a.price);
    }
    handelProdcuts(newProdcuts);
    setSelect(value);
  };
  return (
    <GridHeader className="my-10 flex justify-between items-center border-b-2 flex-col gap-4 md:pb-0 pb-6 md:flex-row border-cyan-700">
      <div className="flex justify-start items-center">
        <FaSlidersH className="border-2 border-cyan-400 bg-cyan-400 text-3xl ml-2 rounded-sm hover:bg-cyan-300 text-cyan-900 p-1" />
        {/* <GoThreeBars className="border-2 border-cyan-400 text-3xl ml-2 rounded-sm hover:bg-cyan-300 text-cyan-900 p-1" /> */}
        <div className="font-bold whitespace-nowrap mt-1 ml-2 text-cyan-900">
          {AllProdcuts.length} Prodcuts Found
        </div>
      </div>
      <div className="relative">
        <input
          id="search"
          value={search}
          onChange={handelChange}
          placeholder="Search..."
          className="my-4 py-px px-4  lg:w-full border-2 border-cyan-200 btn ring-2 ring-cyan-400"
        />
      </div>
      <div>
        <label htmlFor="sort" className="mr-2 font-bold text-cyan-900">
          Sort By
        </label>
        <select
          name=""
          id="sort"
          value={select}
          onChange={handelSelect}
          className="bg-cyan-100 p-1 ring-2 focus:outline-none ring-cyan-100 border-2 border-cyan-200"
        >
          <option value="low">Price(Lowest)</option>
          <option value="high">Price(Highest)</option>
        </select>
      </div>
    </GridHeader>
  );
}
const GridHeader = styled.div``;
