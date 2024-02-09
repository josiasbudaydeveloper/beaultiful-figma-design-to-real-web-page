'use client'

import { headerLinks } from "@/lib/const";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import 'animate.css';

import { Logo, CompanyName, Bars3 } from "@/public";

export default function Header() {
  const pathName = usePathname();
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className="lg:py-[22px] lg:px-[80px] p-5">
      <div className="flex justify-between">
        <div className="flex">
          <Image 
            src={Logo.src}
            width={44}
            height={44}
            alt="A logo in a shape of a house"
            className="mr-[8px]"
          />

          <Image 
            src={CompanyName.src}
            width={68}
            height={40}
            alt="REIS Real State"
          />
        </div>

        <ul className="hidden lg:flex justify-between">
        { headerLinks.map((headerLink) => {
          return (
            <li key={headerLink.title}>
              <a href={headerLink.href} className={`
                mr-6 hover:border-b-[2px] hover:border-[black]
                ${(pathName === headerLink.href && headerLink.isActive) 
                  && "text-[#4A60A1] hover:border-[#4A60A1] font-semibold"
                }
                ${(!headerLink.isActive) && "pointer-events-none text-gray-300"}
              `}>
                {headerLink.title}
              </a>
            </li>
          )
        }) }
        </ul>

        <div className="lg:hidden block">
          <button className="cursor-pointer"
            onClick={() => {
              setIsMenuActive(!isMenuActive);
            }}
          >
            <Image 
              src={Bars3}
                width={32}
                height={32}
                alt="Bars menu"
              />
          </button>

          {isMenuActive && (
            <ul className={`
              sm:flex flex-col absolute right-[20px] bg-black p-[15px] rounded-[10px]
              animate__animated animate__fadeInUp
            `}>
              { headerLinks.map((headerLink) => {
                return (
                  <li key={headerLink.title}>
                    <a href={headerLink.href} className={`
                      mr-6 hover:border-b-[2px]
                      ${(pathName !== headerLink.href && headerLink.isActive)
                        && "text-white hover:border-[white]"
                      }
                      ${(pathName === headerLink.href && headerLink.isActive) 
                        && "text-[#4A60A1] hover:border-[#4A60A1] font-semibold"
                      }
                      ${(!headerLink.isActive) && "pointer-events-none text-gray-500"}
                    `}>
                      {headerLink.title}
                    </a>
                  </li>
                )
              }) }
            </ul>
          )}
          
        </div>
      </div>
    </header>
  )
}