import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Filter = ({ data, setData }) => {
  const [search, setSearch] = useState("");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const TypesofPokemons = () => {
    data.map((item) => console.log(item));
  };

  return (
    <div className="w-full h-12 my-5 border border-[#5e7361] flex flex-row justify-between">
      <div className="flex flex-col">
        <input
          className="bg-transparent outline-none"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="flex flex-row">
          {search !== "" &&
            filteredData.map((item) => (
              <Link to={`/pokemon/${item.id}`}>
                <option>{item.name}</option>
              </Link>
            ))}{" "}
        </select>
      </div>
      <select>
        <option>ssa</option>
      </select>
    </div>
  );
};

export default Filter;
