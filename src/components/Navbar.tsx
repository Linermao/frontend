"use client"

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { d_navLinks } from '@/data/navBar';

function IconTextButton({icon, text}: {icon: string, text: string}){
	return (
		<>
			<div className='flex items-center justify-center gap-2'>
				<Image src={icon} alt={text} width={24} height={24}/>
				<div>
					{text}
				</div>
			</div>
		</>
	)
}

function Navbar (){
	const pathname = usePathname();
	const { scrollY } = useScroll();
	const [ hidden, setHidden ] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 50) {
      setHidden(true); // 向下滚动时隐藏
    } else {
      setHidden(false); // 向上滚动时显示
    }
  });


	return (
		<>
			<motion.div
      	className="fixed top-4 left-1/2 z-50"
      	initial={{ y: -100, opacity: 0, x : "-50%"}}
      	animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1, x : "-50%" }}
      	transition={{ duration: 0.3, ease: "easeInOut" }}
    	>
				<nav className='flex items-center bg-black/80 px-4 py-2 rounded-2xl border border-gray-700 shadow-lg backdrop-blur-md'>		
					<ul className='flex justify-center gap-4'>
						{d_navLinks.map((link, index)=>(
							<Link href={link.href} key={index}>
								{link.active && (
									<li>
										<motion.div
											className={`text-white/80 hover:text-white hover:bg-gray-900 rounded-xl px-2 py-1
												 						border border-gray-700 hover:border-opacity-100
																	  transition-colors duration-200 
																		${pathname === link.href ? "bg-gray-900 border-opacity-100" : "border-opacity-0"}`}
										>
											<IconTextButton icon={link.icon} text={link.title} />
										</motion.div>
									</li>
								)}
							</Link>
						))}
					</ul>
				</nav>
			</motion.div>
		</>
	)
}

export default Navbar;