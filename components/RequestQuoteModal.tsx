"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function RequestQuoteModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const budget = (form.elements.namedItem("budget") as HTMLInputElement)
      .value;
    const description = (
      form.elements.namedItem("description") as HTMLTextAreaElement
    ).value;

    const subject = "Nouvelle demande de devis";

    const body = `
Nom: ${name}
Email: ${email}
Téléphone: ${phone}
Budget: ${budget}
Description: ${description}
  `;

    const mailtoLink = `mailto:jojobrico64@outlook.fr?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Demander un devis gratuit</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nom complet</Label>
            <Input id="name" required placeholder="Votre nom" />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="exemple@mail.com"
            />
          </div>

          <div>
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              required
              placeholder="06 00 00 00 00"
            />
          </div>

          <div>
            <Label>Type de travaux</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Choisir un type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plomberie">Plomberie</SelectItem>
                <SelectItem value="menuiserie">Menuiserie</SelectItem>
                <SelectItem value="peinture">Peinture</SelectItem>
                <SelectItem value="petits-travaux">Petits travaux</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="budget">Budget estimé (€)</Label>
            <Input id="budget" type="number" placeholder="Ex: 15000" />
          </div>

          <div>
            <Label htmlFor="description">Description du projet</Label>
            <Textarea
              id="description"
              rows={4}
              placeholder="Décrivez votre projet..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#4a94bb] hover:bg-[#3a7a9b]"
          >
            Envoyer la demande
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
