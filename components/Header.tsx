import React from "react";
import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Wrench className="h-8 w-8 text-[#4a94bb]" />
            <Link href="/#accueil">
              <span className="text-xl font-bold text-slate-900">
                JOJOBRICO
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/#services"
              className="text-slate-600 hover:text-[#4a94bb] transition-colors font-medium"
            >
              Services
            </Link>
            {/* <a
                href="#realisations"
                className="text-slate-600 hover:text-[#4a94bb] transition-colors font-medium"
              >
                Réalisations
              </a> */}
            <Link
              href="#contact"
              className="text-slate-600 hover:text-[#4a94bb] transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          <Button
            type="button"
            asChild
            size="lg"
            className="bg-[#4a94bb] text-white hover:bg-[#3a7a9b] text-lg px-8"
          >
            <a href="mailto:jojobrico64@outlook.fr">Ecrivez-moi</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
