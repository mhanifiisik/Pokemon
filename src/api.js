import { MdGrass, MdWaterDrop } from "react-icons/md";
import {
  GiPoisonGas,
  GiElectric,
  GiSnowflake2,
  GiPunch,
  GiStoneTablet,
  GiButterfly,
  GiPsychicWaves,
  GiDoubleDragon,
  GiSteelwingEmblem,
  GiFairy,
} from "react-icons/gi";
import { RiEmotionNormalLine } from "react-icons/ri";
import { AiFillFire } from "react-icons/ai";
import { FaBug, FaRocket, FaGhost } from "react-icons/fa";
import { CgDarkMode, CgPokemon } from "react-icons/cg";

export const TypeColor = (type) => {
  switch (type) {
    case "grass":
      return <MdGrass />;
    case "poison":
      return <GiPoisonGas />;
    case "normal":
      return <RiEmotionNormalLine />;
    case "fire":
      return <AiFillFire />;
    case "water":
      return <MdWaterDrop />;
    case "electric":
      return <GiElectric />;
    case "ice":
      return <GiSnowflake2 />;
    case "fighting":
      return <GiPunch />;
    case "ground":
      return <GiStoneTablet />;
    case "flying":
      return <GiButterfly />;
    case "psychic":
      return <GiPsychicWaves />;
    case "bug":
      return <FaBug />;
    case "rock":
      return <FaRocket />;
    case "ghost":
      <FaGhost />;
      break;
    case "dark":
      return <CgDarkMode />;
    case "dragon":
      <GiDoubleDragon />;
      break;
    case "steel":
      return <GiSteelwingEmblem />;
    case "fairy":
      return <GiFairy />;
    default:
      return <CgPokemon />;
  }
};
export const RandomBackGroundColor = () => {
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
