import Container from 'components/Container';

export default function FavsLayout({ children }) {
  return (
    <Container
      title="Favourites - Yash Jain"
      description="Here's what tech I'm currently using for coding, videos, and music."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Favourites
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>Like all of you, I've learned a lot from the Internet.</p>
        <p>It taught me everything from Language skills, 
            design and development, to Self-help, productivity and thinking out of the box. Everyday on logout, it leaves me more curious about everything else in don't know.
        </p>
        <p>
            Here is my ongoing list of all my favourite Books, Articles, Podcasts, Talks, and Newsletters. Shoutout to the Creators 🍾 
        </p>
          </div>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
