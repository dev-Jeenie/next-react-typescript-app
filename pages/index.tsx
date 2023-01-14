import { SpaceBar } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }: { results: any }) {
  console.log("results", results);
  const router = useRouter();
  const onClick = (id: string, title: string) => {
    router.push(`movies/${title}/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home" />
      <Stack direction="row" spacing={2}>
        <Typography variant="h3">NFT 자랑 게시판</Typography>
        <Button variant="contained">Contained</Button>
      </Stack>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {results?.map((movie: any) => (
          <Grid
            key={movie.id}
            item
            xs={2}
            sm={4}
            md={4}
            onClick={() => onClick(movie.id, movie.original_title)}
          >
            <Link href={`movies/${movie.original_title}/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width="300px"
              />
              <h4>{movie.original_title}</h4>
            </Link>
          </Grid>
        ))}
      </Grid>
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
