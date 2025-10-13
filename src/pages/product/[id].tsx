import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();
  console.log("🚀 ~ Product ~ query:", query);

  return <h1>Product Page {JSON.stringify(query)}</h1>;
}
