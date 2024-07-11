import Image from "next/image";

export default function Home() {
  return (
    <main className="flex top-24 flex-col items-center justify-between p-24">
      <div className="bg-white z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="bg-white text-2xl font-semibold fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8">
        Nam Choi Portfolio
        </h1>
      </div>


      <div className="pt-6 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <a
          href="https://www.verizon.com/sales/digital/byod.html?&lineNum=1#/checkDevice"
          className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          Verizon: Bring your own device 📱{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <ul className="">
            <li className="text-left">Display video instructions so the users can easily find their device’s IMEI so they would be better informed to proceed their consumer journey. </li>
            <br></br>
            <li className="text-left">Made the whole tile of devices clickable so the user can select and increase the number of added devices more conveniently. </li>
          </ul>
        </a>

        <a
          href="https://www.mayoclinic.org/diseases-conditions"
          className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          Mayo Clinic 🏥{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <ul className="">
            <li className="text-left">Built React/NextJS components for Adobe Experience Manager to enhance authoring capability on Mayo clinic website. </li>
          </ul>
        </a>

        <a
          href="https://www.albertsons.com/pharmacy.html"
          className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          Albertsons: Pharmacy 💊{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <ul className="">
            <li className="text-left">Implemented the functionality to add or remove secondary users to the main caregiver’s account and to switch profiles between multiple accounts using ReactJS, NextJS and GraphQL, deployed as web pages and iOS/Android apps. </li>
          </ul>
        </a>

        <a
          href="https://order.wawa.com/catering"
          className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          Wawa: Catering 🥪 {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <ul className="">
            <li className="text-left">Worked on Wawa’s client facing catering website and internal tools to manage orders and store opening hours, building apps using React and NextJS, a static and server-side rendering framework to enhance performance speed and improve SEO, using Redux/Saga to manage complex states across components and pages. </li>
          </ul>
        </a>

        <a
          href="http://nam-update2020.surge.sh"
          className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          Earlier projects 💾 {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <ul className="">
            <li className="text-left">Links to other projects.</li>
          </ul>
        </a>
        <a
          href="https://github.com/namminammi"
          className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          GitHub 💻 {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <ul className="">
            <li className="text-left">Check out source codes.</li>
          </ul>
        </a>
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 py-4 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with {" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
    </main>
  );
}
