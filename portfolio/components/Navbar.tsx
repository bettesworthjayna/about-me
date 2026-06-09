"use client";

const sections = [
  "About",
  "Experience",
  "Projects",
  "Life",
  "Contact",
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/50 backdrop-blur-md shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="font-bold text-xl">
          Jayna Bettesworth
        </h1>

        <div className="flex gap-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:text-pink-600 transition"
            >
              {section}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}