"use client"
import { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  HamburgerMenuIcon,
  Cross1Icon 
} from '@radix-ui/react-icons';
import Link from 'next/link';



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
 
  return (
    <DropdownMenu.Root onOpenChange={()=>setIsOpen(!isOpen)}>
      
      <DropdownMenu.Trigger asChild >
        <button className="IconButton " aria-label="Customise options" >
         {isOpen?  <Cross1Icon className='text-slate-900 outline-0  h-6 w-6'  /> : <HamburgerMenuIcon className='text-slate-900 outline-0  h-6 w-6'/> }
        </button>
      </DropdownMenu.Trigger>

  
        <DropdownMenu.Content className="
        DropdownMenuContent 
        w-screen
        bg-violet-800 my-4 
        text-xl 
        mt-10"
        

        sideOffset={5}>

        <Link href={'/Terceiroano'} className="block px-4 text-slate-300 hover:font-bold">
          <DropdownMenu.Item className="DropdownMenuItem outline-0 py-2 " >           
              Terceiro Ano
          </DropdownMenu.Item>
        </Link>
        <Link href={'/Quartoano'} className="block px-4  text-slate-300 hover:font-bold">
          <DropdownMenu.Item className="DropdownMenuItem outline-0 py-2">           
             Quarto Ano
          </DropdownMenu.Item>
        </Link>
        <Link href={'/Quintoano'} className="block px-4 text-slate-300 hover:font-bold">
          <DropdownMenu.Item className="DropdownMenuItem outline-0 py-2">           
            Quinto Ano
          </DropdownMenu.Item>
        </Link>
         
          
         </DropdownMenu.Content>
      
    </DropdownMenu.Root>
  );
};

export default NavBar;