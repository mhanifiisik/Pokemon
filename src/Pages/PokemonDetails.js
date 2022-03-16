import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RandomBackGroundColor, TypeColor } from "../api";

const PokemonDetails = () => {
  let location = useLocation();
  const data = location.state.data;
  const id = Number(location.pathname.split("/")[2]);
  return (
    <div className="max-w-7xl mx-auto min-h-screen grid place-items-center">
      <Link className="absolute top-20  text-lg left-20" to="/">
        <IoIosArrowRoundBack color="black" className="text-6xl" /> Go Back
      </Link>
      <div
        style={{ backgroundColor: RandomBackGroundColor() }}
        className="relative rounded-xl text-white  w-72 h-[550px] md:w-[500px] md:h-[700px] flex flex-col justify-start items-center gap-y-5 p-5"
      >
        <div className="w-full flex flex-row justify-between items-center">
          <h3 className="capitalize text-2xl">{data.name}</h3>
          <span className="border rounded-full px-3 py-2 bg-white text-black">
            {data.base_experience}
          </span>
        </div>
        <img
          src={data.sprites.other.dream_world.front_default}
          className="object-contain border border-white px-10 py-1 md:px-32 md:py-5"
          alt={data.name}
        />

        <div className="w-full">
          <div className="w-full flex flex-row justify-between items-center">
            <div>
              {data.stats.map((item) => (
                <p className="capitalize">
                  {item.stat.name.includes("-")
                    ? item.stat.name.split("-")[0] +
                      " " +
                      item.stat.name.split("-")[1]
                    : item.stat.name}
                </p>
              ))}
            </div>
            <div>
              {data.stats.map((item) => (
                <p>{item.base_stat}</p>
              ))}
            </div>
          </div>
        </div>
        <div></div>
        <ul className=" flex flex-row gap-x-20">
          {data.types.map((type, i) => (
            <li
              key={i}
              className="text-white text-base md:text-3xl flex flex-col justify-center items-center"
            >
              <span className="bg-white rounded-full px-3 py-3 text-black">
                {TypeColor(type.type.name)}
              </span>
              <span className="text-base md:text-xl">{type.type.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails;
