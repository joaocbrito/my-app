import Image from "next/image";
import styles from "../styles/Characters.module.css";

export const config = {
  runtime: "experimental-edge",
};

const normalizeSrc = (src) => {
  return src.startsWith("/") ? src.slice(1) : src;
};

const cloudflareLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(",");
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};

const Characters = ({ runtime, results }) => {
  return (
    <div className={styles.container}>
      {/* <a href="https://nextjs.org">Next.js, running at the {runtime}!</a> */}
      <div className={styles.itens}>
        {results.map((result) => (
          <div key={result.id} className={styles.item}>
            <Image
              loader={cloudflareLoader}
              className={styles.img}
              src={result.image}
              width="200"
              height="200"
              alt=""
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

export default Characters;
