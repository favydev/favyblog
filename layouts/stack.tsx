import Container from 'components/Container';

export default function StacksLayout({ children }) {
  return (
    <Container
      title="Stack – Yash Jain"
      description="Here's what tech I'm currently using for coding, videos, and music."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Stack
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here's what tech I'm currently using for coding, videos, and music.
          Most of these have been accumulated over the past few years, with a
          recent office upgrade in 2020.
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
