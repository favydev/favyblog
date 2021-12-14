import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import StacksLayout from 'layouts/stack';
import { allOtherPages } from '.contentlayer/data';
import type { OtherPage } from '.contentlayer/types';

export default function useStack({ body: { code } }: OtherPage) {
  const Component = useMDXComponent(code);

  return (
    <StacksLayout>
      <Component components={components as any} />
    </StacksLayout>
  );
}

export async function getStaticProps() {
  const useStack = allOtherPages.find((page) => page.slug === 'stack')!;

  return { props: useStack };
}
