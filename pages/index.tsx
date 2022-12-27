import { useState } from "react";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Seo from "../components/Seo";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <Button variant="contained">Contained</Button>
      <h1>hello</h1>
    </div>
  );
}
