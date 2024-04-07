'use client'
import Image from "next/image";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <aside>
        <Card height='70px' />
      </aside>
      <section>
        <main>
          <Card height='172px'/>
          <Card height='172px' />
          <Card height='172px'  />
        </main>
      </section>
      <section>
        <article>
          <Card height='172px' />
          <Card height='172px'  />
          <Card height='172px'  />
        </article>
      </section>
    </>
  );
}
