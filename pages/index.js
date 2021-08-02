import Head from "next/head";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Carousel Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.slideContainer}>
          <Carousel showThumbs={false}>
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index}>
                <Image
                  alt=""
                  src={`http://lorempixel.com/output/cats-q-c-640-480-${
                    index + 1
                  }.jpg`}
                  width={640}
                  height={480}
                />
                <p className="legend">Cat {index + 1}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
