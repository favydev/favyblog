import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Subscribe from '../components/Subscribe';
import VideoCard from '../components/VideoCard';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Yash Jain
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Thinker, Designer and Front-End Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
            Building projects on the internet. Sharing Lessons on Self Improvement
          and startups.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Yash Jain"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        
        <h3 className="font-bold text-lg md:text-2xl tracking-tight mb-4 mt-14 text-black dark:text-white">
        What I'm doing now?
        </h3>
        <p className="text-gray-700 dark:text-gray-200 mb-4">I share my ideas almost every day. My main social platform is Twitter. But 
        this is my favourite place. Every now and then I write and share my thoughts Here.
        <br /> <br />
        Apart from that, Currenly I'm building Favy. It is on early development stage and we are excited for it. The journey is fabulous.
        <br /><br />
        Currenly I'm also reading{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://minimalistentrepreneur.com/book"
          className="text-blue-500 leading-7 rounded-lg font-medium underline transition-all h-6"
        >
          the Minimalist Entrepreneur
      
        </a>
        {' '}by Sahil Lavingia. I'm loving it.
        </p>
        
        <span className="h-8" />
      </div>
    </Container>
  );
}
