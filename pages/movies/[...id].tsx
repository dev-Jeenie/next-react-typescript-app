import { Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log("router", router);
  return <Typography>{router.query.title || "Loading..."}</Typography>;
}
