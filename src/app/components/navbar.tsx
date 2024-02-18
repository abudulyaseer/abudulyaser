import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed bg-transparent w-full md:bg-opacity-90 transition duration-300 ease-in-out dark:border-b dark:border-[#242424]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <a className="block flex" aria-label="Cruip" href="/">
              <Image
                className="relative dark:invert dark:hidden"
                src="/white.png"
                alt="Next.js Logo"
                width={27}
                height={24}
                priority
              />
              <Image
                className="relative dark:invert dark:block"
                src="/black.png"
                alt="Next.js Logo"
                width={27}
                height={24}
                priority
              />
            </a>
          </div>
          <nav className="">
            <a
              className="bg-[#0a0a0a] text-sm text-[#e2e2e2] hover:text-gray-900 px-3 py-1.5 rounded-lg border border-[#242424] flex items-center transition duration-150 ease-in-out"
              href="/signin">
              Sign in
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
