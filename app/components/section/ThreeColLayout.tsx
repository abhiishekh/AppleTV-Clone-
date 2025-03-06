import React from "react";
import { Button } from "../button";
import { Container } from "../Container";
import Fadein from "../Fadein";

import {data} from '@/app/data'

const ThreeColLayout = () => {
  return (
    <Container className="py-36 3xl:max-w-[1600px] relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {data.map((item, index) => (
          <Fadein key={index}>
            <div className="font-bold p-6 w-full 3xl:w-96 rounded-xl">
              <div className="flex flex-col gap-5 text-white">
                <h2 className="text-2xl md:text-3xl">{item.h2}</h2>
                <h1 className="text-3xl md:text-4xl">{item.h1}</h1>
                <p className="text-gray-400 text-lg">{item.p} <span className="text-blue-400">{item.link}</span></p>
              </div>
              <Button size="md" className="mt-6">
                {item.button}
              </Button>
            </div>
          </Fadein>
        ))}
      </div>
    </Container>
  );
};

export default ThreeColLayout;
