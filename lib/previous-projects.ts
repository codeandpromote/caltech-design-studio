/**
 * Past interior projects executed by the studio (originally documented as
 * "Green & Mortar United — Interior Design, A systems approach").
 *
 * Photographs are the studio's own — extracted from the legacy project
 * presentation and cleaned up for the live site.
 */

export type PreviousProject = {
  id: string;
  name: string;
  category:
    | "Corporate Office"
    | "Foodcourt"
    | "Restaurant"
    | "Banquet Hall"
    | "Bar & Lounge"
    | "Living Room"
    | "Bedroom"
    | "Retail Showroom"
    | "Hospitality";
  location: string;
  img: string;
  note: string;
};

export const PREVIOUS_PROJECTS: PreviousProject[] = [
  {
    id: "souk-tajbengal",
    name: "Souk Luxury Restaurant",
    category: "Restaurant",
    location: "Taj Bengal, Kolkata",
    img: "/portfolio/previous/souk-tajbengal.jpg",
    note: "Design coordination and PMC for the fine-dine signature room.",
  },
  {
    id: "glook-bar",
    name: "Glook Bar",
    category: "Bar & Lounge",
    location: "Terminus Mall, Kolkata",
    img: "/portfolio/previous/glook-bar.jpg",
    note: "Times Award-winning bar — indoor, outdoor, counter and private dining.",
  },
  {
    id: "basera-banquets",
    name: "Basera Banquets",
    category: "Banquet Hall",
    location: "Terminus Mall, Kolkata",
    img: "/portfolio/previous/basera-banquets.jpg",
    note: "An elegant banquet hall with a well-equipped kitchen.",
  },
  {
    id: "nola-finedine",
    name: "Nola Fine Dine",
    category: "Restaurant",
    location: "Kolkata",
    img: "/portfolio/previous/nola-finedine.jpg",
    note: "Mediterranean, Moorish and Colonial influences with a show-kitchen.",
  },
  {
    id: "mahabharat-motors",
    name: "Mahabharat Motors",
    category: "Corporate Office",
    location: "Kolkata",
    img: "/portfolio/previous/mahabharat-motors.jpg",
    note: "Rich materials and detailing for a classic corporate ambience.",
  },
  {
    id: "mahabharat-motors-boardroom",
    name: "Mahabharat Motors — Boardroom",
    category: "Corporate Office",
    location: "Kolkata",
    img: "/portfolio/previous/mahabharat-motors-boardroom.jpg",
    note: "State-of-the-art teleconferencing built into the furniture system.",
  },
  {
    id: "luna-tyres",
    name: "Luna Tyres Office",
    category: "Corporate Office",
    location: "Kolkata",
    img: "/portfolio/previous/luna-tyres.jpg",
    note: "Maximum space utilisation with double mezzanines for brand drama.",
  },
  {
    id: "cnbc-newdelhi",
    name: "CNBC Office",
    category: "Corporate Office",
    location: "New Delhi",
    img: "/portfolio/previous/cnbc-newdelhi.jpg",
    note: "Lively, hot-desking interior for a round-the-clock newsroom.",
  },
  {
    id: "icra-icteas",
    name: "ICRA Icteas",
    category: "Corporate Office",
    location: "Salt Lake Sector V",
    img: "/portfolio/previous/icra-icteas.jpg",
    note: "Corporate office for an ICRA software subsidiary.",
  },
  {
    id: "computer-exchange",
    name: "Computer Exchange Office",
    category: "Corporate Office",
    location: "Kolkata",
    img: "/portfolio/previous/computer-exchange.jpg",
    note: "Vibrant colours and glass surfaces for transparency and light.",
  },
  {
    id: "axis-foodcourt",
    name: "Axis Mall Foodcourt",
    category: "Foodcourt",
    location: "Kolkata",
    img: "/portfolio/previous/axis-foodcourt.jpg",
    note: "Sculptural ceiling and counter language for a high-traffic foodcourt.",
  },
  {
    id: "bakeshop-retail",
    name: "Bakeshop Retail",
    category: "Retail Showroom",
    location: "Kolkata",
    img: "/portfolio/previous/bakeshop-retail.jpg",
    note: "Space-maximising hard-wearing interior with strong brand colour coordination.",
  },
  {
    id: "hi-living-aquarium",
    name: "Hi-Range Living Room",
    category: "Living Room",
    location: "Kolkata",
    img: "/portfolio/previous/hi-living-aquarium.jpg",
    note: "L-sofa, in-built aquarium, LED panelling and perforated ceiling.",
  },
  {
    id: "mid-living-terrace",
    name: "Mid-Range Living Room",
    category: "Living Room",
    location: "Kolkata",
    img: "/portfolio/previous/mid-living-terrace.jpg",
    note: "L-sofa, integral display, perforated ceiling and terrace opening.",
  },
  {
    id: "hi-bedroom-artdresser",
    name: "Hi-Range Bedroom",
    category: "Bedroom",
    location: "Kolkata",
    img: "/portfolio/previous/hi-bedroom-artdresser.jpg",
    note: "Bed with art-dresser, wardrobe and ornamental backdrop.",
  },
  {
    id: "midhi-bedroom-cladding",
    name: "Mid-Hi Range Bedroom",
    category: "Bedroom",
    location: "Kolkata",
    img: "/portfolio/previous/midhi-bedroom-cladding.jpg",
    note: "Bed with wall-cladding, integrated dresser and entertainment unit.",
  },
  {
    id: "mid-bedroom-boys",
    name: "Boys' Bedroom",
    category: "Bedroom",
    location: "Kolkata",
    img: "/portfolio/previous/mid-bedroom-boys.jpg",
    note: "Compact bedroom with dresser and study table.",
  },
  {
    id: "khadims-showroom",
    name: "Khadim's Shoe Showroom",
    category: "Retail Showroom",
    location: "Kolkata",
    img: "/portfolio/previous/khadims-showroom.jpg",
    note: "A fairground-themed family showroom — bright, spacious, memorable.",
  },
  {
    id: "bata-mgf-mall",
    name: "Bata Showroom",
    category: "Retail Showroom",
    location: "MGF Mall, Gurgaon",
    img: "/portfolio/previous/bata-mgf-mall.jpg",
    note: "A total revamp of Bata's space retail systems with product-specific displays.",
  },
  {
    id: "bata-dlf-mall",
    name: "Bata Showroom",
    category: "Retail Showroom",
    location: "DLF Mall, Gurgaon",
    img: "/portfolio/previous/bata-dlf-mall.jpg",
    note: "Contextual solution solving congestion, AC, lighting and branding at once.",
  },
  {
    id: "diamond-showroom",
    name: "Diamond Boutique",
    category: "Retail Showroom",
    location: "New Delhi",
    img: "/portfolio/previous/diamond-showroom.jpg",
    note: "Boutique themed around the evolution of diamond from carbon.",
  },
  {
    id: "star-mall",
    name: "Star Mall",
    category: "Hospitality",
    location: "Kolkata",
    img: "/portfolio/previous/star-mall.jpg",
    note: "Atrium, escalator wells and circulation finishes across the mall.",
  },
];

export const CLIENTS = [
  "Calcutta Medical Center",
  "Fortune Hotels (ITC)",
  "Indian Post",
  "MBE — Beyond Engineering",
  "Mescab",
  "Monginis",
  "Regus",
  "SAIL",
  "Shiraz Restaurant",
] as const;
