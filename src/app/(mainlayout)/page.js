import BlogCard from '@/components/Blog/BlogCard';
import Link from 'next/link';
import React from 'react';

const Home = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limil=10', {
    next: { revalidate: 5 }
  })
  const blogs = await res.json()

  return (
    <div className="text-center">
      <h1>Hwllow Jayed</h1>

      <div className='grid grid-cols-3 gap-8 w-[90%] mx-auto'>
        {
          blogs.slice(0, 3).map(blog => <BlogCard key={blog.id} blog={blog} />)
        }

      </div>
      <Link href='/blog'><div className="card-actions justify-center mt-10">
        <button className="btn btn-primary">Show more</button>
      </div></Link>


    </div>
  );
};

export default Home;