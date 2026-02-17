"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Droplet,
  PaintBucket,
  Hammer,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  Leaf,
  Layers,
  Zap,
  FileQuestion,
  ShieldQuestion,
  MessageCircleQuestion,
  HandCoins,
  HandHeart,
  HandIcon,
  FileText,
} from "lucide-react";
import { RequestQuoteModal } from "@/components/RequestQuoteModal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Wrench className="h-8 w-8 text-[#4a94bb]" />
              <span className="text-xl font-bold text-slate-900">
                JOJOBRICO
              </span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a
                href="#services"
                className="text-slate-600 hover:text-[#4a94bb] transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#realisations"
                className="text-slate-600 hover:text-[#4a94bb] transition-colors font-medium"
              >
                Réalisations
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-[#4a94bb] transition-colors font-medium"
              >
                Contact
              </a>
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

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Homme toutes mains, petits travaux de bricolage
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Petits travaux de dépannage à domicile, plomberie, menuiserie,
                jardinage, montage de meuble, décoration intérieur...
              </p>
              <div className="flex flex-wrap gap-4">
                {/* <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-lg"
                >
                  Demander un devis gratuit
                </Button> */}
                <Button
                  type="button"
                  asChild
                  size="lg"
                  className="bg-[#4a94bb] text-white hover:bg-[#3a7a9b] text-lg px-8"
                >
                  <a href="mailto:jojobrico64@outlook.fr">
                    Demandez un devis gratuit
                  </a>
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50"
                >
                  Voir nos réalisations
                </Button> */}
                {/* <Link href="/realization">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#4a94bb] text-[#4a94bb] hover:bg-[#e0f0fa]"
                  >
                    Voir mes réalisations
                  </Button>
                </Link> */}
              </div>
              {/* <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-[#4a94bb] text-[#4a94bb]" />
                  <Star className="h-5 w-5 fill-[#4a94bb] text-[#4a94bb]" />
                  <Star className="h-5 w-5 fill-[#4a94bb] text-[#4a94bb]" />
                  <Star className="h-5 w-5 fill-[#4a94bb] text-[#4a94bb]" />
                  <Star className="h-5 w-5 fill-[#4a94bb] text-[#4a94bb]" />
                </div>
                <span className="text-slate-600 font-medium">
                  Plus de 200 clients satisfaits
                </span>
              </div> */}
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#a8cde6] to-[#4a94bb] rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/petitbonhomme.png"
                  alt="Professionnel au travail"
                  className="h-full w-auto mx-auto object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                  <div>
                    <div className="font-bold text-2xl text-slate-900">
                      15+ ans
                    </div>
                    <div className="text-slate-600">d'expérience</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Mes Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Travaux de dépannage et d’aménagement à domicile
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Plomberie */}
            <Card className="border-2 hover:border-[#4a94bb] hover:shadow-lg transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#e0f0fa] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4a94bb] transition-colors">
                  <Droplet className="h-7 w-7 text-[#4a94bb] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Plomberie
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Changement de robinet, remplacement de joints d’étanchéité,
                  petites réparations et dépannages courants.
                </p>
              </CardContent>
            </Card>

            {/* Electricité */}
            <Card className="border-2 hover:border-[#4a94bb] hover:shadow-lg transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#e0f0fa] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4a94bb] transition-colors">
                  <Zap className="h-7 w-7 text-[#4a94bb] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Électricité
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Pose ou remplacement de prises, interrupteurs, luminaires et
                  appliques murales.
                </p>
              </CardContent>
            </Card>

            {/* Décoration */}
            <Card className="border-2 hover:border-[#4a94bb] hover:shadow-lg transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#e0f0fa] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4a94bb] transition-colors">
                  <PaintBucket className="h-7 w-7 text-[#4a94bb] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Décoration & Intérieur
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Peinture intérieure, tapisserie, pose de tringles, fixation de
                  cadres et éléments décoratifs.
                </p>
              </CardContent>
            </Card>

            {/* Revêtements de sol */}
            <Card className="border-2 hover:border-[#4a94bb] hover:shadow-lg transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#e0f0fa] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4a94bb] transition-colors">
                  <Layers className="h-7 w-7 text-[#4a94bb] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Revêtements de sol
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Pose de parquet, de moquette et autres revêtements pour vos
                  sols intérieurs.
                </p>
              </CardContent>
            </Card>

            {/* Jardinage */}
            <Card className="border-2 hover:border-[#4a94bb] hover:shadow-lg transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#e0f0fa] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4a94bb] transition-colors">
                  <Leaf className="h-7 w-7 text-[#4a94bb] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Jardinage & Extérieur
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Tonte de pelouse, taille de haies, nettoyage des sols et
                  terrasses au nettoyeur haute pression.
                </p>
              </CardContent>
            </Card>

            {/* Maçonnerie & montage */}
            <Card className="border-2 hover:border-[#4a94bb] hover:shadow-lg transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#e0f0fa] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4a94bb] transition-colors">
                  <Hammer className="h-7 w-7 text-[#4a94bb] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Maçonnerie & Montage
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Petits travaux de maçonnerie, murets, pose de clôtures et
                  montage de meubles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="realisations"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Mes activités
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets récents
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Rénovation salle de bain"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Rénovation salle de bain
              </h3>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pose de parquet"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Pose de parquet
              </h3>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Peinture intérieure"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Peinture intérieure
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="h-12 w-12 text-[#4a94bb] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Intervention Rapide
              </h3>
              <p className="text-slate-600">
                Disponibilité sous 24h pour vos urgences
              </p>
            </div>
            <div>
              <CheckCircle2 className="h-12 w-12 text-[#4a94bb] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Travail Soigné
              </h3>
              <p className="text-slate-600">
                Qualité et finition impeccable garanties
              </p>
            </div>
            <div>
              <Star className="h-12 w-12 text-[#4a94bb] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Prix Justes
              </h3>
              <p className="text-slate-600">Devis transparent sans surprise</p>
            </div>
          </div>
        </div>
      </section> */}

      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4a94bb] to-[#3a7a9e]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Besoin d'un coup de main ?
          </h2>
          <p className="text-xl text-[#a8cde6] mb-12">
            Contactez-moi dès maintenant pour un devis gratuit et sans
            engagement
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Phone className="h-8 w-8 text-white mx-auto mb-3" />
              <div className="text-white font-semibold mb-1">Téléphone</div>
              <div className="text-[#a8cde6]">06 26 41 96 42</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Mail className="h-8 w-8 text-white mx-auto mb-3" />
              <div className="text-white font-semibold mb-1">Email</div>
              <div className="text-[#a8cde6]">jojobrico64@outlook.fr</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <MapPin className="h-8 w-8 text-white mx-auto mb-3" />
              <div className="text-white font-semibold mb-1">Zone</div>
              <div className="text-[#a8cde6]">Bois d'Arcy et ses alentours</div>
            </div>
          </div>
          {/* <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8"
          >
            Demander un devis
          </Button> */}
          {/* <RequestQuoteModal> */}
          <Button
            type="button"
            asChild
            className="bg-[#4a94bb] text-white hover:bg-[#3a7a9b] text-lg px-8"
          >
            <a href="mailto:jojobrico64@outlook.fr">Ecrivez-moi</a>
          </Button>
          {/* </RequestQuoteModal> */}
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wrench className="h-6 w-6 text-[#4a94bb]" />
            <span className="text-xl font-bold text-white">Jojobrico</span>
          </div>
          <p className="text-slate-400 mb-4">
            Auto-entrepreneur spécialisé dans les petits travaux et la
            rénovation
          </p>
          <p className="text-slate-500 text-sm">
            © 2026 Jojobrico. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
