import Image from "next/image";
import Onepage from "@/components/Onepage";
import Header from "@/components/Header";
import Capture from "@/components/Capture";
// import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      {/* <Capture /> */}
      {/* <Header/> */}
      <Onepage />
    </>
  );
}
