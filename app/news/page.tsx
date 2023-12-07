import { fetchNews } from '../utils';
import NewsPortableText from '@/components/NewsPortableText';

export const revalidate = 60;

const page = async () => {
  const { news } = await fetchNews();

  return (
    <div className="max-w-5xl mx-auto my-20 px-5 lg:px-0">
      {news.map((item, i) => (
        <NewsPortableText news={item} key={i} />
      ))}
    </div>
  );
};

export default page;
