import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TypeColor } from "../api";
const PokemonCard = ({ data, index, isOpen, setIsOpen }) => {
  //React Router
  let navigate = useNavigate();
  const handleDetail = (e) => {
    navigate(`/pokemon/${e}`, { state: { data } });
  };

  //Random Background Color Generate
  const RandomBackGroundColor = () => {
    const RandomNumber = Math.trunc(Math.random() * 8);
    const ColorArray = [
      "#3C42EB",
      "#2AAF65",
      "#F12F39",
      "#FE9928",
      "#FE5A64",
      "#2B627D",
      "#C153C0",
      "#E0C0D6",
    ];
    return ColorArray[RandomNumber];
  };
  return (
    <article
      onClick={() => handleDetail(data.id)}
      className="relative lg:w-80 lg:h-80 flex flex-row sm:flex-col justify-between sm:justify-center sm:items-center bor der rounded-xl"
      style={{ backgroundColor: RandomBackGroundColor() }}
    >
      <img
        src={data.sprites.other.dream_world.front_default}
        className="w-36 h-36 object-contain"
        alt={data.name}
      />
      <h2 className="relative lg:absolute capitalize lg:bottom-10 text-white sm:text-xl">
        {data.name}
      </h2>
      <ul className="md:absolute hidden right-5 top-5 md:flex flex-col gap-y-3">
        {data.types.map((type, i) => (
          <li key={i} className="text-white text-3xl">
            {TypeColor(type.type.name)}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PokemonCard;
