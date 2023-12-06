import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 center">
      <div className="logo">
      <h1 className="text-2xl font-bold text-gray-800">List</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/listing">Listing</Link>
    </nav>
  );
};


export default Navbar;
