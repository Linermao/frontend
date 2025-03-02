import Image from 'next/image'

import github from '@/assets/icons/icon_github_white.svg'

export default function IntroductionCard(){
  return (
    <>
      <div className="flex flex-col bg-gray-900 rounded-2xl p-10 gap-8">
        <p className="text-white text-lg ">
          (only for making a station) Welcome! I'm Linermao, a professional web developer with a knack for crafting visually stuning and highly
          functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece
          that excels in both appearance and performance.
        </p>
        <div className="flex justify-between items-center">
          <div className='flex gap-10'>
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold">45+</p>
              <p>project done</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold">45+</p>
              <p>project done</p>
            </div>
          </div>
          <Image src={github} alt='icon' className='w-12 h-12'/>
        </div>
      </div>
    </>
  )
}