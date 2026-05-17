/**
 * Curated allocations of the studio's own photography across the site.
 * Each image is referenced in exactly one place — no repeats.
 *
 * See scripts that build /public/portfolio/* and /data/site-images.json.
 */

export const PORTFOLIO = {
  hero: [
    "/portfolio/residential/residential-04.jpg",
    "/portfolio/cafe/cafe-03.jpg",
    "/portfolio/restaurant/restaurant-05.jpg",
    "/portfolio/hospitality/hospitality-01.jpg",
  ],

  servicesInteriorsCard: "/portfolio/cafe/cafe-04.jpg",

  signature: [
    { img: "/portfolio/residential/residential-02.jpg", eyebrow: "Residence",   title: "A Quiet Suite",      place: "Kolkata" },
    { img: "/portfolio/cafe/cafe-09.jpg",               eyebrow: "Hospitality", title: "Sunburst Lounge",    place: "Salt Lake" },
    { img: "/portfolio/restaurant/restaurant-01.jpg",   eyebrow: "Restaurant",  title: "Banquet Hall",       place: "Park Circus" },
    { img: "/portfolio/kitchen/kitchen-01.jpg",         eyebrow: "Kitchen",     title: "Modular Kitchen",    place: "Rajarhat" },
    { img: "/portfolio/puja-mandap/puja-mandap-01.jpg", eyebrow: "Cultural",    title: "Puja Mandap",        place: "Kolkata" },
    { img: "/portfolio/hospitality/hospitality-02.jpg", eyebrow: "Hotel",       title: "Hotel Foyer",        place: "Kolkata" },
    { img: "/heritage/lime-work.jpg",                   eyebrow: "Heritage",    title: "Lime Work",          place: "Scottish Cemetery" },
    { img: "/heritage/structural.jpg",                  eyebrow: "Heritage",    title: "Structural Repair",  place: "La Martiniere" },
  ],

  interiorsSlider: [
    { img: "/portfolio/residential/residential-01.jpg", t: "Residential" },
    { img: "/portfolio/cafe/cafe-01.jpg",               t: "Café" },
    { img: "/portfolio/restaurant/restaurant-02.jpg",   t: "Restaurant" },
    { img: "/portfolio/hospitality/hospitality-03.jpg", t: "Hotel" },
    { img: "/portfolio/residential/residential-06.jpg", t: "Residential" },
    { img: "/portfolio/cafe/cafe-07.jpg",               t: "Café" },
    { img: "/portfolio/kitchen/kitchen-02.jpg",         t: "Kitchen" },
    { img: "/portfolio/office/office-05.jpg",           t: "Office" },
    { img: "/portfolio/residential/residential-09.jpg", t: "Residential" },
    { img: "/portfolio/cafe/cafe-12.jpg",               t: "Café" },
    { img: "/portfolio/restaurant/restaurant-06.jpg",   t: "Restaurant" },
    { img: "/portfolio/hospitality/hospitality-05.jpg", t: "Hotel" },
    { img: "/portfolio/residential/residential-14.jpg", t: "Residential" },
    { img: "/portfolio/cafe/cafe-08.jpg",               t: "Café" },
    { img: "/portfolio/kitchen/kitchen-03.jpg",         t: "Kitchen" },
    { img: "/portfolio/office/office-12.jpg",           t: "Office" },
    { img: "/portfolio/puja-mandap/puja-mandap-02.jpg", t: "Cultural" },
    { img: "/portfolio/restaurant/restaurant-07.jpg",   t: "Restaurant" },
    { img: "/portfolio/residential/residential-19.jpg", t: "Residential" },
    { img: "/portfolio/cafe/cafe-15.jpg",               t: "Café" },
  ],

  marquee: [
    "/portfolio/residential/residential-03.jpg",
    "/portfolio/cafe/cafe-10.jpg",
    "/portfolio/restaurant/restaurant-03.jpg",
    "/portfolio/hospitality/hospitality-06.jpg",
    "/portfolio/residential/residential-10.jpg",
    "/portfolio/cafe/cafe-14.jpg",
    "/portfolio/kitchen/kitchen-04.jpg",
    "/portfolio/office/office-08.jpg",
    "/portfolio/puja-mandap/puja-mandap-04.jpg",
    "/portfolio/residential/residential-15.jpg",
    "/portfolio/cafe/cafe-16.jpg",
    "/portfolio/restaurant/restaurant-08.jpg",
  ],
} as const;
