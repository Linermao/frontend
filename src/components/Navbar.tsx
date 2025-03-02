"use client"

import { useState } from 'react';
import { usePathname } from 'next/navigation';
// import { motion } from 'framer-motion';
import { Input } from '@heroui/react';

import { styles } from '@/styles/styles';
import Link from 'next/link';
import Image from 'next/image';
import { d_navLinks } from '@/data/navBar';

import avatar from '@/assets/avatar.jpg';
import menu from '@/assets/icons/menu.svg';
import close from '@/assets/icons/x.svg'

export const SearchIcon = ({size = 24, strokeWidth = 1.5, width = 24, height = 24, ...props}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

function Navbar (){
	const [menuToggle, setmenuToggle] = useState(false);
	return (
		<>
			<nav className={`absolute top-0 z-10 w-full px-10 py-4 flex items-center justify-between shadow-xl`}>
				{/* Avatar */}
				<Link href='/' className='flex items-center gap-10'>
				<Image src={avatar} alt="avatar" className='w-12 h-12 object-contain rounded-2xl'/>
				<p className={`${styles.navbarTitle} flex`}> Alvin&nbsp;
					<span className='md:block hidden'> | Linermao</span>
				</p>
				</Link>

				{/* NavLinks */}
				<>
					{/* for PC */}
					<NavLinks />
					{/* for Mobile */}
					<div className='sm:hidden flex justify-center items-center'>
						<Image src={menu} alt="menu" className={`relative w-7 h-7 cursor-pointer ${menuToggle ? 'hidden' : ''}`}
							onClick={() => setmenuToggle(!menuToggle)}
						/>
						<Image src={close} alt="close" className={`relative w-7 h-7 cursor-pointer ${menuToggle ? '' : 'hidden'}`}
							onClick={() => setmenuToggle(!menuToggle)}
						/>
						<div className={`${menuToggle ? "flex" : "hidden"} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
							<NavLinks isMobile={true} />
						</div>
					</div>
				</>
				<Input classNames={{base: "max-w-full md:block hidden max-w-[10rem] h-10",
														mainWrapper: "h-full",
														input: "text-small",
														inputWrapper:	"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
													}}
					placeholder="Type to search..."
					size="sm"
					startContent={<SearchIcon size={18} />}
					type="search"
				/>
			</nav>
		</>
	)
}

function NavLinks( {isMobile=false} ){
	const pathName = usePathname();
	return (
		<>
			<ul className={`list-none ${isMobile? "flex flex-col" : "sm:flex hidden flex-row" } gap-10`}>
				{ d_navLinks.map((link, index) => {
					const isActive = pathName === link.href || (pathName.startsWith(link.href) && link.href!=="/" )
					return (
						<li
							key={index}
							className={`
													${isMobile? "text-xl" : "" } 
												  ${isActive ? `${styles.navbarTitleActive}` : `${styles.navbarTitle}`} 
						`}>
							<Link href={link.href}>
									{link.title}
							</Link>
						</li>)
					})
				}
			</ul>
		</>
	)
}

export default Navbar;