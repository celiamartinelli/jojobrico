import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "Rénovation de salle de bain",
    image:
      "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Pose de parquet",
    image:
      "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Peinture intérieure",
    image:
      "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function RealisationsPage() {
  return (
    <section className="min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-12">
          Nos Réalisations
        </h1>

        <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto mb-16">
          Découvrez quelques exemples de projets réalisés pour nos clients.
          Qualité, finitions soignées et satisfaction garantie.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {project.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
