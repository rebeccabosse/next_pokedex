import MainHeader from "@/components/main-header/main-header";
import "../styles/globals.css";
export default function Home() {
  return (
    <>
      <MainHeader />
      <h1 className="title">Welcome to the Pokedex</h1>
      <div className="content">
        <p>This is the home page of the Pokedex application.</p>
      </div>
    </>
  );
}
