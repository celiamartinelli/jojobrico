import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white ">
      <Header />
      <div className="max-w-3xl mx-auto py-32 ">
        {/* Title */}
        <h1 className="text-4xl font-bold text-slate-900 mb-10">
          Mentions légales
        </h1>

        {/* Card */}
        <div className="bg-white shadow-md rounded-2xl p-8 space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-[#4a94bb] mb-3">
              Éditeur du site
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Joseph Martinelli
              <br />
              Nom commercial : Hommes Toutes Mains
              <br />
              Statut : Auto-entrepreneur
              <br />
              Adresse : 3 Ter Rue Perdreau, 78390 Bois-d'Arcy, France
              <br />
              Téléphone : 06 26 41 96 42
              <br />
              Email : jojobrico64@outlook.fr
              <br />
              SIRET : 10208919000015
              <br />
              Code APE : 8121Z
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#4a94bb] mb-3">
              Directeur de la publication
            </h2>
            <p className="text-slate-700">Joseph Martinelli</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#4a94bb] mb-3">
              Hébergeur
            </h2>
            <p className="text-slate-700">
              Vercel Inc.
              <br />
              340 S Lemon Ave #4133
              <br />
              Walnut, CA 91789
              <br />
              États-Unis
              <br />
              https://vercel.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#4a94bb] mb-3">
              Propriété intellectuelle
            </h2>
            <p className="text-slate-700">
              Tous les contenus présents sur ce site sont protégés par le droit
              d’auteur. Toute reproduction est interdite sans autorisation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#4a94bb] mb-3">
              Limitation de responsabilité
            </h2>
            <p className="text-slate-700">
              Les informations du site sont fournies à titre indicatif.
              L’éditeur ne pourra être tenu responsable des erreurs ou
              omissions.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
