import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }: { results: any }) {
  return (
    <div>
      <Seo title="Home" />
      <Button variant="contained">Contained</Button>
      {results?.map((movie: any) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}