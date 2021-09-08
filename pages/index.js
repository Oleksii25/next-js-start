import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  return (
    <div>
      <h1>The home page</h1>
      <button onClick={() => router.push("/about")}>About</button>
      <button onClick={() => router.push("/portfolio/max")}>POrtfolio</button>
    </div>
  );
}
