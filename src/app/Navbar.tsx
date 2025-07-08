import Link from "next/link";
import { AUTHOR, TITLE } from "./data/constants";
export default function Navbar() {
  return (
    <>
      <Link href="/">
      <div className="fixed flex flex-col bg-white z-20 w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl bg-white text-2xl font-semibold left-0 top-0 flex w-full justify-center pb-6 pt-8 text-center">
          {AUTHOR}
        </h1>

        <h2 className="bg-white text-2xl font-semibold left-0 top-20 flex w-full justify-center border-b border-gray-300 pb-6 text-center">
          {TITLE}
        </h2>
      </div>
      </Link>
    </>
  );
}
