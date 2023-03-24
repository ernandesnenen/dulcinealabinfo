import Image from "next/image";
import Link from "next/link";
import { Menu } from "./Menu";
import NavBar from "./navaBar";

import logoducinea from '/public/logodulcinea.svg'


export function Header(){
    return(
        <div className="flex items-center justify-between p-6 h-28 bg-gray-300">
          <Link href={'/'}>
            <div className="flex items-center">
                <Image src={logoducinea} height={120} alt='logo da escola dulcinea gomes diniz'/>
                <h1 className="p-4  sm:text-xl lg:text-4xl font-bold">E.E.F Dulcinea Gomes Diniz </h1>
            </div>
          </Link>

            <div className="hidden sm:flex">
              <Menu />
            </div>
            <div className="sm:hidden">
              <NavBar />
            </div>
        </div>
    )
}