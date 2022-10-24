import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <a href="https://nextjs.org">Next.js, running at the {runtime}!</a>
      <div className={styles.itens}>
        {results.map((result) => (
          <div key={result.id} className={styles.item}>
            <Image
              className={styles.img}
              src={result.image}
              width="200"
              height="200"
              alt={`nome`}
            />
            <p>{result.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      runtime: process.env.NEXT_RUNTIME,
      uuid: await fetch("https://uuid.rocks/plain").then((response) =>
        response.text()
      ),
    },
  };
};
