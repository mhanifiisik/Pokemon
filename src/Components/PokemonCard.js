import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TypeColor, RandomBackGroundColor } from "../api";
const PokemonCard = ({ data, index, isOpen, setIsOpen }) => {
  //React Router
  let navigate = useNavigate();
  const handleDetail = (e) => {
    navigate(`/pokemon/${e}`, { state: { data } });
  };

  return (
    <article
      onClick={() => handleDetail(data.id)}
      className="relative cursor-pointer group lg:w-80 lg:h-80 flex flex-row sm:flex-col justify-between sm:justify-center px-5 sm:p-0 items-center border rounded-xl gap-y-2"
      style={{ backgroundColor: RandomBackGroundColor() }}
    >
      <img
        src={data.sprites.other.dream_world.front_default}
        className="w-36 h-36 object-contain group-hover:scale-110 lg:group-hover:scale-125"
        alt={data.name}
      />
      <h2 className="relative lg:absolute capitalize group-hover:scale-110 lg:bottom-10 text-white  sm:text-xl">
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
