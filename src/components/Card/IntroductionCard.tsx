import Image from 'next/image'
import Link from 'next/link'

import Card from '@/components/Card/Card'

import { d_introduce } from '@/data/about'

import github from '@/assets/icons/icon_github_white.svg'

export default function IntroductionCard(){
  return (
    <>
      <Card>
        <div className="flex flex-col p-10 gap-8">
          <p className="text-lg ">
            {d_introduce}
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
            <Link href='https://github.com/linermao'>
              <Image src={github} alt='icon' className='w-12 h-12'/>
            </Link>
          </div>
        </div>
      </Card>
    </>
  )
}