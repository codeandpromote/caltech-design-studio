import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "./GalleryGrid";
import gallery from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "Gallery — Caltech Design Studio",
  description:
    "A curated visual archive of interiors and restoration work by Caltech Design Studio, Kolkata.",
};

type Item = { src: string; category: string; w: number; h: number };

export default function GalleryPage() {
  const items = gallery as Item[];

  return (
    <>
      <PageHero
        eyebrow="Visual Archive"
        title="A quiet library"
        italic="of rooms."
        description="A curated selection of interiors we've shaped — across residences, hospitality, offices and outdoor spaces. Filter by category to wander."
      />

      <GalleryGrid items={items} />
    </>
  );
}
