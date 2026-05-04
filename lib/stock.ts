/**
 * Curated Unsplash imagery for editorial / showcase areas of the site.
 * Used in: Hero, ServicesDuo, SignatureSlider, Interiors service cards,
 * About story image. The Gallery and Heritage sections continue to use
 * the studio's own photography.
 *
 * Every URL here was verified live before being committed.
 */

const u = (id: string, w = 1600, q = 78) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const stock = {
  bedroom: {
    moody:        u("1505693416388-ac5ce068fe85"),
    chandelier:   u("1617098900591-3f90928e8c54"),
    tufted:       u("1566665797739-1674de7a421a"),
  },
  dining: {
    chandelier:   u("1600489000300-e590b381ce48"),
    walnut:       u("1600488999806-8efb986d87b1"),
    brick:        u("1593136596203-7212b076f4d2"),
  },
  cafe: {
    arched:       u("1567880905822-56f8e06fe630"),
    edison:       u("1453614512568-c4024d13c247"),
    plants:       u("1600353565737-2427a1ba3d3a"),
  },
  restaurant: {
    gold:         u("1517248135467-4c7edcad34c4"),
    moody:        u("1583354608715-177553a4035e"),
    industrial:   u("1531973968078-9bb02785f13d"),
  },
  living: {
    neutral:      u("1583847268964-b28dc8f51f92"),
    olive:        u("1605774337664-7a846e9cdf17"),
    editorial:    u("1618220179428-22790b461013"),
  },
  kitchen: {
    marble:       u("1556911220-bff31c812dba"),
    industrial:   u("1484154218962-a197022b5858"),
    brass:        u("1565538810643-b5bdb714032a"),
  },
  office: {
    loft:         u("1497366811353-6870744d04b2"),
    corridor:     u("1497366754035-f200968a6e72"),
    creative:     u("1556761175-4b46a572b786"),
  },
  heritage: {
    victoria:     u("1611704526041-5931d84f7cb6"),
    colonial:     u("1664295642134-c77e8f936ecb"),
    gateway:      u("1666955479198-3d0c41357acb"),
  },
} as const;
