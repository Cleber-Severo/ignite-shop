import { styled } from "../styles";

export const Button = styled("button", {
  backgroundColor: "$green500",
  color: "white",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export default function Home() {
  return (
    <div>
      <h1>hello world</h1>
      <Button>Click me</Button>
    </div>
  );
}
