import Layout from "../layout";
import Button from "../../components/Button";
import PlaceholderImage from "../../components/PlaceholderImage";

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-16 bg-green-600 text-white">
        <h1 className="text-4xl font-bold">Support Our Mission</h1>
        <p className="text-lg mt-4">We help communities through education and outreach.</p>
        <div className="mt-6">
          <Button text="Donate Now" href="#donate" color="yellow" />
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Our Impact</h2>
        <p className="mt-4 text-gray-700">Your donations help provide resources and support.</p>
        <div className="mt-6">
          <PlaceholderImage />
        </div>
      </section>

      <section id="donate" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Make a Difference</h2>
        <p className="mt-4 text-gray-700">Every contribution helps us reach more people.</p>
        <div className="mt-6">
          <Button text="Donate Now" href="https://example.com/donate" color="yellow" />
        </div>
      </section>
    </Layout>
  );
}