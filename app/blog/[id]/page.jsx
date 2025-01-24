export async function generateStaticParams() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
  
    return posts.slice(0, 10).map((post) => ({
      id: post.id.toString(),
    }));
  }
  
  async function getPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error("Failed to fetch post");
    return res.json();
  }
  
  export default async function BlogDetails({ params }) {
    const post = await getPost(params.id);
  
    return (
      <div>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="mt-4">{post.body}</p>
      </div>
    );
  }
  