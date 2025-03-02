import React from 'react';
import Image from 'next/image';
import Card from './Card';
import MarkdownWithToc from '../MarkdownTool/MarkdownWithToc';

import catalog from '@/assets/icons/catalog.svg'

export default function ArticleNavCard ({ content }: { content: string }) {
  return (
    <>
      <Card className='p-10'>
        <div className='flex flex-col w-full'>
          <div className='flex items-center gap-2'>
              <Image src={catalog} alt="catalog" className='w-5 h-5' />
              <p className='text-xl font-bold'>目录:</p>
          </div>
          <div className='mt-4'>
            <MarkdownWithToc content={content}/>
          </div>
        </div>
      </Card>
    </>
  );
};