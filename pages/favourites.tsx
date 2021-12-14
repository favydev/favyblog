import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import FavsLayout from 'layouts/favourites';
import { allOtherPages } from '.contentlayer/data';
import type { OtherPage } from '.contentlayer/types';

export default function favourites({ body: { code } }: OtherPage) {
  const Component = useMDXComponent(code);

  return (
    <FavsLayout>
      <Component components={components as any} />
    </FavsLayout>
  );
}

export async function getStaticProps() {
  const favourites = allOtherPages.find((page) => page.slug === 'favourites')!;

  return { props: favourites };
}
