import Image from "next/image";
import styles from "../styles/Home.module.css";

export const config = {
  runtime: "experimental-edge",
};

const Home = ({ runtime, results }) => {
  console.log(results);

  return (
    <div className={styles.container}>
      {/* <a href="https://nextjs.org">Next.js, running at the {runtime}!</a> */}
      <div className={styles.itens}>
        {results.map((result) => (
          <div key={result.id} className={styles.item}>
            <Image
              className={styles.img}
              src={result.image}
              width="200"
              height="200"
              alt={`Imagem do personagem ${result.name}`}
            />
            <p>{result.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  const results = data.results;

  return {
    props: {
      runtime: process.env.NEXT_RUNTIME,
      results,
    },
  };
};

export default Home;
