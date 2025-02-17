import Layout from "../layout";
import Button from "../../components/Button";
import PlaceholderImage from "../../components/PlaceholderImage";

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold">Welcome to CloudKit</h1>
        <p className="text-lg text-gray-600 mt-4">A simple website starter with Next.js & Tailwind.</p>
        <div className="mt-6">
          <Button text="Get Started" href="#about" />
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">What We Offer</h2>
        <p className="mt-4 text-gray-700">A ready-to-use template for your website.</p>
        <div className="mt-6">
          <PlaceholderImage />
        </div>
      </section>
    </Layout>
  );
}