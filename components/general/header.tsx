import Image from "next/image";

export default function Header() {
  return (
    <header className="px-6 py-3 max-w-screen-lg mx-auto">
      <Image src={"/assets/logo.png"} width={17} height={48} alt="Apple Logo" />
    </header>
  );
}
