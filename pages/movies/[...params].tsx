import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

type MovieDetailParams = [string, string];

export default function Detail({ params }: { params: any }) {
  const router = useRouter();
  const [title, id] = (params || []) as MovieDetailParams;
  console.log("router", router);
  return (
    <div>
      <Seo title={title} />
      <Typography>{title}</Typography>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}
