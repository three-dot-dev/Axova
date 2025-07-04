import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// import Link from "next/link";

import Anchor from "@/components/Anchor";

import { useIsMounted } from "@/hooks/useIsMounted";
import useHash from "@/hooks/useHashname";

import { getHash } from "@/utils/hash";

import "./style.css";

interface Props {
  containterClass: string;
}

const PageTabs: React.FC<Props> = ({ containterClass }) => {
  const pathname = usePathname();
  const hashname = useHash();

  const isMounted = useIsMounted();

  const defaultHash = getHash();

  const tabsList = useMemo(() => {
    return [
      // {
      //   href: "/",
      //   pathname: `/`,
      //   name: "Home",
      // },
      {
        href: "#about",
        pathname: `#about`,
        name: "About",
      },
      // {
      //   href: "#tokenomics",
      //   pathname: `#tokenomics`,
      //   name: "Tokenomics",
      // },
      {
        href: "#roadmap",
        pathname: `#roadmap`,
        name: "Roadmap",
      },
      {
        href: "#faq",
        pathname: `#faq`,
        name: "FAQ",
      },
      {
        href: "https://documentation.axovahub.com",
        pathname: `https://documentation.axovahub.com`,
        name: "Docs",
      },
    ];
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={clsx(
        // "w-64 lg:w-[42.5%] xl:w-2/5 justify-between items-center",
        "w-1/2 xl:w-2/5 justify-center gap-10 xl:gap-16 items-center lg:rounded-full lg:bg-transparent p-3 border-2 border-[#019ff0]",
        containterClass
      )}
    >
      {tabsList.map((item) => {
        const isActive = !!defaultHash
          ? hashname === item.pathname
          : !defaultHash && pathname === item.pathname;

        return (
          <Anchor
            key={item.name}
            href={item.href}
            className={clsx(
              // "text-white p-2 hover:text-secondary font-bold",
              // "text-sm md:text-base text-black dark:text-white p-2 hover:bg-dark-hover font-bold",
              isActive ? "nav-anchor-active" : "nav-anchor"
            )}
            style={{ transition: "250" }}
          >
            {item.name}
          </Anchor>
        );
      })}
    </div>
  );
};

export default PageTabs;
