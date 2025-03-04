import Image from "next/image";
import { Container } from "./components/Container";


export default function Home() {
  return (
   <>
   <main className="bg-mycolor">
      <div className="h-[200vh]"><Container>Hero component</Container></div>
      <div><Container>usps</Container></div>
      <div><Container>3 col layout</Container></div>
      <div><Container>Carousel with posters</Container></div>
   </main>
   </>
  );
}
