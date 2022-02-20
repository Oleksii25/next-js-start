import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

export default function Project() {
  const { query } = useRouter();

  return (
    <>
      <h1>Project A = {query.id}</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
}
