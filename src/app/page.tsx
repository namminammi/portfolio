import Image from "next/image";

export default function Home() {
  return (
    <main className="flex top-24 flex-col items-center justify-between p-24">
      <div className="bg-white z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="bg-white text-2xl font-semibold fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 text-center">
          Nam Choi
        </h1>
        <h2 className="bg-white text-2xl font-semibold fixed left-0 top-20 flex w-full justify-center border-b border-gray-300 pb-6 text-center"> Senior Front End UI Engineer</h2>
      </div>
      <div className="pt-16 font-semibold ">
        <p>Hi there, welcome! Feel free to check out some of client and personal works Nam did.</p>
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
            Other works 💾 {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <ul className="">
            <li className="text-left">Check out other client and personal works.</li>
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
      <div className="fixed bottom-0 w-full flex flex-col items-center justify-center bg-white text-sm">
        <div className="flex justify-center lg:flex-row lg:justify-start text-lg">
          <a className="font-bold py-4 pr-12 hover:underline" href="https://www.linkedin.com/in/namchoi/" target="_blank">LinkedIn</a>
          <a className="font-bold py-4 hover:underline" href="https://github.com/namminammi" target="_blank">GitHub</a>
        </div>
        <p className="pb-4 flex place-items-center gap-2 text-xs">
          Made with
          <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={60} height={12} priority />
        </p>
      </div>
    </main>
  );
}
