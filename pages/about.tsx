import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Yash Jain">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Yash. I'm a Designer, writer, and Front-End Developer.
            I'm Building&nbsp;
            <a
              href="https://heyfavy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              favy
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://favelent.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              favelent.
            </a>
          </p>
          <p>
            I’ve built and designed several products products with no-code. I also dabble with 
            Front-End Development, NextJS and Jamstack. Apart from that I'm a creator and i use to share my ideas
            on twitter and this blog, about startups, philosophy, psychology and life.
          </p>
          <p>
            I grew up in a small-town in India and i'm currently in high school.
            But most of the time, don't open my school books and spend time building
            fun and creative things on the internet.
          </p>
        </div>
        <Timeline />
      </div>
    </Container>
  );
}
