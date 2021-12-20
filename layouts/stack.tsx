import Container from 'components/Container';

export default function StacksLayout({ children }) {
  return (
    <Container
      title="Stack – Yash Jain"
      description="Here's what tech I'm currently using for coding, videos, and music."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Stack
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here's what apps I'm using to create, consume, connect and co-ordinate.
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
