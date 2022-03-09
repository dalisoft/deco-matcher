# Deco match

Matches the best for buck Deco model based on your requirements
and your pick lists

## Installation

Just install `deno` on your system and clone this repository

## Running

Go-to folder of this repository

```bash
deno run ./src/deco-compare.ts
```

## Changing

You can try modify these files

- `constants.ts`
- `decos.ts`

## Desired (example) result

As default (main / 100%) result we choosed "Deco M4" and maxium ISP speed
at 1.000 Mbps, so desired result will be as below

```md
┌───────┬──────────────┬──────────────────┬─────────────────┬────────────────────────────────────┐
│ (idx) │ name         │ price            │ coverage        │ speed                              │
├───────┼──────────────┼──────────────────┼─────────────────┼────────────────────────────────────┤
│     0 │ "Deco X90"   │ "285 USD (316%)" │ "650 m2 (120%)" │ "6579 Mbps (4804,1201,574) (370%)" │
│     1 │ "Deco X5700" │ "165 USD (183%)" │ "557 m2 (103%)" │ "5618 Mbps (3843,1201,574) (316%)" │
│     2 │ "Deco X68"   │ "163 USD (181%)" │ "752 m2 (139%)" │ "3577 Mbps (1802,1201,574) (201%)" │
│     3 │ "Deco X60"   │ "120 USD (133%)" │ "650 m2 (120%)" │ "2976 Mbps (2402,574) (167%)"      │
│     4 │ "Deco X55"   │ "100 USD (111%)" │ "604 m2 (112%)" │ "2976 Mbps (2402,574) (167%)"      │
│     5 │ "Deco M9+"   │ "110 USD (122%)" │ "604 m2 (112%)" │ "2134 Mbps (867,867,400) (120%)"   │
│     6 │ "Deco X20"   │ "90 USD (100%)"  │ "539 m2 (100%)" │ "1775 Mbps (1201,574) (100%)"      │
│     7 │ "Deco M4"    │ "51 USD (56%)"   │ "511 m2 (94%)"  │ "1167 Mbps (867,300) (65%)"        │
│     8 │ "Deco S4"    │ "47 USD (51%)"   │ "511 m2 (94%)"  │ "1167 Mbps (867,300) (65%)"        │
│     9 │ "Deco E4"    │ "41 USD (45%)"   │ "372 m2 (68%)"  │ "1167 Mbps (867,300) (65%)"        │
└───────┴──────────────┴──────────────────┴─────────────────┴────────────────────────────────────┘
The best for buck Deco is {
  name: "Deco S4",
  price: "47 USD",
  coverage: "511 m2",
  speed: "1167 Mbps",
  features: { antennas: 2, bands: 2, wifi: 5, wifi_6e: 0, ofdma: 0, streams: 0 }
}
```
