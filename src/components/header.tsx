import { PixelButtonLink } from "./pixel-button-link";

import Link from "next/link";

export const Header = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-12 bg-red-500 border border-4 border-black">
      <Link href="/" className="text-white text-3xl">
        DinoDex
      </Link>

      <div className="flex gap-2">
        <PixelButtonLink href="/allosaurus">Allosaurus</PixelButtonLink>
        <PixelButtonLink href="/centrosaurus">Centrosaurus</PixelButtonLink>
        <PixelButtonLink href="/monolophosaurus">
          Monolophosaurus
        </PixelButtonLink>
      </div>
    </nav>
  );
};
