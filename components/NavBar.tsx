import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <ToggleButtonGroup size="large">
      <Link
        href="/"
        style={{ color: router.pathname === "/" ? "red" : "blue" }}
      >
        <ToggleButton value="home">Home</ToggleButton>
      </Link>
      <Link
        href="/buy"
        style={{ color: router.pathname === "/buy" ? "red" : "blue" }}
      >
        <ToggleButton value="buy">buy NFT</ToggleButton>
      </Link>
      <Link
        href="/signin"
        style={{ color: router.pathname === "/signin" ? "red" : "blue" }}
      >
        <ToggleButton value="signin">Sign in</ToggleButton>
      </Link>
      <Link
        href="/signup"
        style={{ color: router.pathname === "/signup" ? "red" : "blue" }}
      >
        <ToggleButton value="signup">Sign up</ToggleButton>
      </Link>
    </ToggleButtonGroup>
  );
}
