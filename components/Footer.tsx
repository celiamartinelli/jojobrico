import { Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Wrench className="h-6 w-6 text-[#4a94bb]" />
          <span className="text-xl font-bold text-white">Jojobrico</span>
        </div>
        <p className="text-slate-400 mb-4">
          Auto-entrepreneur spécialisé dans les petits travaux et la rénovation
        </p>
        <a
          href="/mentions-legales"
          className="text-slate-400 hover:text-[#4a94bb] transition-colors text-lg mb-6"
        >
          Mentions Légales
        </a>
        <p className="text-slate-500 text-sm">
          © 2026 Jojobrico. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
