import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      <Button variant="contained">Contained</Button>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
