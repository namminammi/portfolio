import Image from "next/image";
import React from "react";

interface FooterProps {
  name: string;
  link: string;
  target: string;
}

const footerData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/namchoi/",
    target: "_blank",
  },
  { name: "GitHub", link: "https://github.com/namminammi", target: "_blank" },
];

const FooterItem: React.FC<FooterProps> = ({ name, link, target }) => {
  return (
    <a
      className="font-bold py-4 pr-12 hover:underline"
      href={link}
      target={target}
    >
      {name}
    </a>
  );
};

const FooterItemList = () => {
  return (
    <div className="flex justify-center lg:flex-row lg:justify-start text-lg">
      {footerData.map((item, index) => {
        return (
          <FooterItem
            key={index}
            name={item.name}
            link={item.link}
            target={item.target}
          />
        );
      })}
    </div>
  );
};

const VercelLogoContainer = () => {
  return (
    <p className="pb-4 flex place-items-center gap-2 text-xs">
      Made with
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={60}
        height={12}
        priority
      />
    </p>
  );
};

export default function Footer() {
  return (
    <div className="fixed bg-white z-20 bottom-0 w-full flex flex-col items-center justify-center bg-white text-sm border border-t border-gray-300">
      <FooterItemList />
      <VercelLogoContainer />
    </div>
  );
}
