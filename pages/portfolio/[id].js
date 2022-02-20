import { useRouter, withRouter } from "next/router";

export default function Project() {
  const { query } = useRouter();

  return <h1>Project A = {query.id}</h1>;
}
