import Image from "next/image";
import Link from "next/link";
import classes from "@/styles/main-header.module.css";
function MainHeader() {
  return (
    <header className={classes.header}>
      <main className={classes.main}>
        <Link href="/">
          <Image
            src="/images/pokeball.svg"
            alt="Pokedex Logo"
            width={100}
            height={75}
          />
        </Link>
      </main>
    </header>
  );
}

export default MainHeader;
