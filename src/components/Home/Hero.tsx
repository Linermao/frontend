import { styles } from '@/styles/styles';
import Module from '@/components/canvas/Module';

function Hero(){
	return (
		<>
			<section className={`relative w-full h-screen mx-auto`}>
				{/* Introduction */}
				<div className={`absolute inset-0 max-w-7xl mx-auto 
								${styles.paddingX} flex flex-row items-start gap-5 mt-32`}
				>
					<div className='flex flex-col justify-center items-center mt-5'>
						<div className='w-5 h-5 rounded-full bg-[#ffbec9]' />
						<div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#ffbec9]' />
					</div>
					<div className='z-10'>
						<h1 className={`${styles.heroHeadText} text-white`}>
							Hi, I'm <span className='text-[#253576] dark:text-[#ffbec9]'>Linermao</span>
						</h1>
						<p className={`${styles.heroSubText} mt-2 text-white-100`}>
							I develop 3D visuals, user <br className='sm:hidden' />
							interfaces and web applications
						</p>
					</div>
				</div>
				<Module />
			</section>
		</>
	)
}

export default Hero;