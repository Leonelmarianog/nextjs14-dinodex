import Link from "next/link";
import { PropsWithChildren } from "react";

interface IPixelButtonLinkProps extends PropsWithChildren {
  href: string;
}

export const PixelButtonLink = ({ children, href }: IPixelButtonLinkProps) => {
  return (
    <Link href={href}>
      <div className="group select-none cursor-pointer border border-4 border-black">
        <div className="pb-2 bg-red-500 group-hover:bg-red-300">
          <div className="pt-2 pl-2 bg-red-300 group-hover:bg-red-500">
            <div className="pr-2 bg-red-500 group-hover:bg-red-300">
              <div className="p-2 bg-red-400 group-hover:bg-red-600">
                <p className="text-white text-lg group-hover:transform group-hover:translate-y-1">
                  {children}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
