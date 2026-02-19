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
  const activities = [
    {
      title: "Plomberie",
      image: "/jojobrico-plomberie.jpg",
      alt: "Plomberie",
    },
    {
      title: "Montage de meuble en kit",
      image: "/jojobrico-meuble.jpg",
      alt: "Montage de meuble en kit",
    },
    {
      title: "Peinture intérieure",
      image: "/jojobrico-peinture.jpg",
      alt: "Peinture intérieure",
    },
    {
      title: "Entretien espace vert",
      image: "/jojobrico-pelouse.jpg",
      alt: "Entretien espace vert",
    },
    {
      title: "Électricité",
      image: "/jojobrico-electricite.jpg",
      alt: "Petits travaux d'électricité",
    },
    {
      title: "Revêtements de sol",
      image: "/jojobrico-sol.jpg",
      alt: "Revêtement de sol",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Wrench className="h-8 w-8 text-[#4a94bb]" />
              <a href="#accueil">
                <span className="text-xl font-bold text-slate-900">
                  JOJOBRICO
                </span>
              </a>
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

      <section id="accueil" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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
            </div>
            <div className="relative">
              <div className="relative aspect-square bg-gradient-to-br from-[#a8cde6] to-[#4a94bb] rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/petitbonhomme2.png"
                  alt="Professionnel au travail"
                  className="h-full w-auto mx-auto object-cover"
                />

                <span className="absolute bottom-3 right-3 text-xs text-white/80 px-2 py-1 rounded-md backdrop-blur-sm">
                  Designed by Freepik
                </span>
              </div>
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
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-[#e0f0fa] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4a94bb] transition-colors">
                      <Droplet className="h-7 w-7 text-[#4a94bb] group-hover:text-white" />{" "}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {" "}
                      Plomberie
                    </h3>
                  </div>

                  <img
                    src="/jojobrico-plomberie.jpg"
                    alt="plomberie"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

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
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Mes activités
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Découvrez quelques réalisations
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`group cursor-pointer ${
                  index === 3 ? "md:col-end-2" : ""
                }`}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={activity.image}
                    alt={activity.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {activity.title}
                </h3>
              </div>
            ))}
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
