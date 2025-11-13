import MainHeader from "@/components/main-header/main-header";
import "../styles/globals.css";
import PokemonList from "./pokemons/pokemonList";
export default function Home() {
  return (
    <>
      <MainHeader />
      <h1 className="title">Welcome to the Pokedex</h1>
      <div className="content">
        <PokemonList />
      </div>
    </>
  );
}
