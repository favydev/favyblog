import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import type { PropsWithChildren } from 'react';
import type { Blog } from '.contentlayer/types';


const discussUrl = (slug) =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `https://yashjaing.com/blog/${slug} by @yashjaing`
  )}`;

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <Container
      title={`${post.title} – Yash Jain `}
      description={post.summary}
      image={`https://yashjaing.com${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}{' • '}
              {post.readingTime.text}
            </p>
          </div>
          
        </div>
        <div className="w-full mt-6 prose dark:prose-dark max-w-none">
          {children}
        </div>
        <div className="mt-8">
          <Subscribe />
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={discussUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'If you liked this note Discuss on Twitter.'}
          </a>
          
        </div>
      </article>
    </Container>
  );
}
