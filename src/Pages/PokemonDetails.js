import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GiBodyHeight, GiWeight } from "react-icons/gi";

const PokemonDetails = () => {
  let location = useLocation();
  console.log(location);
  const data = location.state.data;
  console.log(data);
  const id = Number(location.pathname.split("/")[2]);

  return (
    <div className="max-w-7xl mx-auto min-h-screen grid place-items-center">
      <div className="relative border border-black w-72 h-[500px] md:w-[500px] md:h-[700px] flex flex-col justify-start items-center p-5">
        <h3 className="">{data.name}</h3>
        <img
          src={data.sprites.other.dream_world.front_default}
          className="object-contain border border-black px-10 py-1 md:px-32 md:py-5"
          alt={data.name}
        />
        <div className="w-full border border-black">
          <p>
            <GiBodyHeight />
            <span>{data.height}</span>
          </p>
          <p>
            <GiWeight />
            <span>{data.weight}</span>
          </p>
        </div>
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
      </div>
    </div>
  );
};

export default PokemonDetails;
