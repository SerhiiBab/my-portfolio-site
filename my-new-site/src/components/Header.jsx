
function Header() {
  return (
    <>
    <header
      class="fixed top-0 z-10 flex h-20 min-w-full justify-center p-2 text-lg text-gray-300 sm:h-24"
    >
      <div class="main-menu">
        <img id="logo" src="/src/img/logo.png" alt="logo" class="block h-full" />
        <img
          id="menu"
          src="build/img/menu.svg"
          alt="menu"
          class="block h-1/2 hover:cursor-pointer lg:hidden"
        />
        <nav id="navbar" class="hidden gap-8 text-xl lg:flex">
          <a
            href="index.html"
            class="transition-all duration-300 hover:scale-x-105 hover:text-blue-300 hover:ease-in-out " 
            >Start
          </a>
          <a
            href="#about-me"
            class="transition-all duration-300 hover:scale-105 hover:text-blue-300 hover:ease-in-out "
            >Über mich
          </a>
          <a
            href="#tech-stack"
            class="transition-all duration-300 hover:scale-105 hover:text-blue-300 hover:ease-in-out"
            >Tech Stack
          </a>
          <a
            href="#projects"
            class="transition-all duration-300 hover:scale-105 hover:text-blue-300 hover:ease-in-out"
            >Projekte
          </a>
          <a
            href="#contact"
            class="transition-all duration-300 hover:scale-105 hover:text-blue-300 hover:ease-in-out"
            >Kontakt
          </a>
        </nav>

      </div>
      <div
        id="dropdownMenu"
        class="animate_animated animate__slideInDown fixed top-0 left-0 z-20 hidden h-screen w-full flex-col items-center text-3xl lg:hidden"
      >
        <ul id="links" class="toggle-list w-4/5">
          <li>
            <a href="index.html">Start</a>
          </li>
          <li>
            <a href="#about-me">Über mich</a>
          </li>
          <li>
            <a href="#projects">Projekte</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
</div>
      </header>
    </>
  );
}

export default Header;
