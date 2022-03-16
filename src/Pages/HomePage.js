import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../Components/PokemonCard";
import { IoIosSearch } from "react-icons/io";
import { RiLoaderFill } from "react-icons/ri";
import Loading from "../Components/Loading";

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(16);
  const [search, setSearch] = useState("");
  const [types, setTypes] = useState("All Types");

  //Data Fetching
  const getPokemonList = async () => {
    setLoading(true);
    const PokemonList = [];
    try {
      const data = await axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=0`)
        .then((res) =>
          res.data.results.map((item) => PokemonList.push(item.url))
        );
      const promises = PokemonList.map(async (item) => {
        return await axios.get(item).then((res) => res.data);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    getPokemonList();
  }, [perPage]);
  //Filters
  const FilteredData = () => {
    if (search === "" && types === "All Types") {
      return pokemons;
    }
    if (types === "All Types") {
      const filtered = pokemons.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      return filtered;
    } else {
      const filtered2 = pokemons.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) &&
          item.types.find((i) => i.type.name === types)
      );
      return filtered2;
    }
  };

  //Loading
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl min-h-screen mx-auto overflow-hidden">
      <div className="max-w-7xl mx-auto  my-10 border p-2 border-black flex flex-row-reverse justify-between items-center">
        <div className="flex flex-row justify-center items-center border border-black p-2">
          <input
            className="h-full outline-none bg-transparent border-none text-black"
            type="text"
            placeholder="Search Pokemon"
            onChange={(e) => setSearch(e.target.value)}
          />
          <IoIosSearch />
        </div>

        <select
          className="bg-transparent py-2 outline-none"
          onChange={(e) => setTypes(e.target.value)}
        >
          {[
            "All Types",
            "grass",
            "poison",
            "normal",
            "fire",
            "water",
            "electric",
            "ice",
            "fighting",
            "ground",
            "flying",
            "psychic",
            "bug",
            "rock",
            "ghost",
            "dark",
            "dragon",
            "steel",
            "fairy",
          ].map((item, i) => (
            <option key={i} className="px-2 capitalize">
              {item}
            </option>
          ))}
        </select>
      </div>
      <button
        className="flex flex-row justify-center items-center border gap-x-2 bg-green-600 text-white p-2 rounded float-right mb-5"
        onClick={() => setPerPage(perPage + 12)}
      >
        <RiLoaderFill />
        <span>Load More</span>
      </button>
      <div className="w-full  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {FilteredData().map((item, i) => (
          <PokemonCard key={i} data={item} index={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
