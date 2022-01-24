import Link from 'next/link';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import type { Blog } from '.contentlayer/types';
import Image from 'next/image';

export default function BlogPost({
  title,
  summary,
  image,
  slug
}: Pick<Blog, 'title' | 'summary' | 'image' | 'slug'>) {
  

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="w-full mb-8">
        <div className="w-full w-min-full">
            <Image
              alt= { title }
              height={904}
              width={1820}
              src={ image }
              className="rounded-lg mb-4"
            />
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100 tracking-tight">
              {title}
            </h4>
            <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </a>
    </Link>
  );
}
