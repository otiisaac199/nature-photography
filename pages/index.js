import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Nature Photography" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive."
      />
    </div>
  );
}
