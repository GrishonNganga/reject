import Header from "./components/header";
import Sections from "./components/sections";

export default function Home() {
  return (
    <main className="flex flex-col container mx-auto">
      <Header/>
      <Sections/>
    </main>
  );
}
