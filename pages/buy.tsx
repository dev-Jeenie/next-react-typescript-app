import { Button, Typography } from "@mui/material";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";

export default function BUY() {
  return (
    <div>
      <Seo title="BUY" />
      <h1>NFT Minting</h1>
      <Button variant="contained">내가 얻은 NFT 자랑하기</Button>
    </div>
  );
}
