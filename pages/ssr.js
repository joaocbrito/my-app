import Image from "next/image";
import styles from "../styles/Home.module.css";

export const config = {
  runtime: "experimental-edge",
};

const Home = ({ runtime, results }) => {
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
};

export const getServerSideProps = async () => {
  return {
    props: {
      runtime: process.env.NEXT_RUNTIME,
      results: await fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
          return data.data.results;
        }),
    },
  };
};

export default Home;
