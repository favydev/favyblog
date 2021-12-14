import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-700 mb-8" />
      <div className="w-full max-w-2xl pb-16">
        <div className="flex justify-between">
          <p className='text-gray-500 hover:text-gray-600 transition'>• 2049</p>
          <ExternalLink href="https://twitter.com/yashjaing">
            Say hi on twitter 👋
          </ExternalLink>
        </div>
        
      </div>
    </footer>
  );
}
