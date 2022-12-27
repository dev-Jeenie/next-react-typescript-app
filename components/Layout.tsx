import { Fragment, ReactNode } from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <NavBar />
      <div>{children}</div>
    </Fragment>
  );
}
