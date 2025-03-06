export type Movie = {
  poster: string | StaticImageData;
  name: string;
};

import aireplane from "@/public/images/airplane.webp";
import familyman from "@/public/images/family-man.webp";
import laboratory from "@/public/images/laboratory.webp";
import Napoleon from "@/public/images/napoleon.webp";
import Person_in_Darkness from "@/public/images/person-in-darkness.webp";
import Scary_Building from "@/public/images/scary-building.webp";
import Stars from "@/public/images/stars.webp";
import { StaticImageData } from "next/image";

export const movies = [
  { poster: aireplane, name: "Airplane" },
  {
    poster: familyman,
    name: "Family man",
  },
  {
    poster: laboratory,
    name: "Laboratory",
  },
  { poster: Napoleon, name: "Napoleon" },
  {
    poster: Person_in_Darkness,
    name: "Person in Darkness",
  },
  {
    poster: Scary_Building,
    name: "Scary Building",
  },
  { poster: Stars, name: "Stars" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
