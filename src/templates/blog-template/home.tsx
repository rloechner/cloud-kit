import Layout from "../layout";
import PlaceholderImage from "../../components/PlaceholderImage";

const blogPosts = [
  { title: "Getting Started with CloudKit", excerpt: "A step-by-step guide to launching your site.", img: "tech" },
  { title: "Why Tailwind CSS is Awesome", excerpt: "How Tailwind makes styling easier.", img: "design" },
  { title: "Next.js vs Other Frameworks", excerpt: "Which framework is best for modern sites?", img: "coding" },
];

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold">The CloudKit Blog</h1>
        <p className="text-lg text-gray-600 mt-4">Sharing insights on web development and design.</p>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center">Latest Articles</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <PlaceholderImage width={400} height={250} alt={post.title} />
              <h3 className="text-xl font-bold mt-4">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <a href="#" className="text-blue-600 mt-2 inline-block">Read More →</a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}