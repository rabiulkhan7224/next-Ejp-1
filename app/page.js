export const dynamic = "force-static"; // Forces static generation

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="my-2">
            <a href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
