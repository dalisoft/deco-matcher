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
┌───────┬──────────────┬───────────┬─────────┬──────────┬─────────┬─────────────────────────────┬─────────┬──────────────────────────────────────────────────────────────────────┐
│ (idx) │ name         │ price     │ p_ratio │ coverage │ c_ratio │ speed                       │ s_ratio │ features                                                             │
├───────┼──────────────┼───────────┼─────────┼──────────┼─────────┼─────────────────────────────┼─────────┼──────────────────────────────────────────────────────────────────────┤
│     0 │ "Deco X90"   │ "285 USD" │ "558%"  │ "650 m2" │ "127%"  │ "6579 (4804,1201,574) Mbps" │ "563%"  │ { antennas: 6, bands: 3, wifi: 6, wifi_6e: 0, ofdma: 1, streams: 8 } │
│     1 │ "Deco X5700" │ "165 USD" │ "323%"  │ "557 m2" │ "109%"  │ "5618 (3843,1201,574) Mbps" │ "481%"  │ { antennas: 6, bands: 3, wifi: 6, wifi_6e: 0, ofdma: 1, streams: 8 } │
│     2 │ "Deco X68"   │ "163 USD" │ "320%"  │ "752 m2" │ "147%"  │ "3577 (1802,1201,574) Mbps" │ "306%"  │ { antennas: 5, bands: 3, wifi: 6, wifi_6e: 0, ofdma: 1, streams: 7 } │
│     3 │ "Deco X60"   │ "120 USD" │ "235%"  │ "650 m2" │ "127%"  │ "2976 (2402,574) Mbps"      │ "255%"  │ { antennas: 4, bands: 2, wifi: 6, wifi_6e: 0, ofdma: 1, streams: 6 } │
│     4 │ "Deco X55"   │ "100 USD" │ "196%"  │ "604 m2" │ "118%"  │ "2976 (2402,574) Mbps"      │ "255%"  │ { antennas: 2, bands: 2, wifi: 6, wifi_6e: 0, ofdma: 1, streams: 4 } │
│     5 │ "Deco M9+"   │ "110 USD" │ "215%"  │ "604 m2" │ "118%"  │ "2134 (867,867,400) Mbps"   │ "182%"  │ { antennas: 8, bands: 3, wifi: 5, wifi_6e: 0, ofdma: 0, streams: 0 } │
│     6 │ "Deco X20"   │ "90 USD"  │ "176%"  │ "539 m2" │ "105%"  │ "1775 (1201,574) Mbps"      │ "152%"  │ { antennas: 2, bands: 2, wifi: 6, wifi_6e: 0, ofdma: 1, streams: 4 } │
│     7 │ "Deco M4"    │ "51 USD"  │ "100%"  │ "511 m2" │ "100%"  │ "1167 (867,300) Mbps"       │ "100%"  │ { antennas: 2, bands: 2, wifi: 5, wifi_6e: 0, ofdma: 0, streams: 0 } │
│     8 │ "Deco S4"    │ "47 USD"  │ "91%"   │ "511 m2" │ "100%"  │ "1167 (867,300) Mbps"       │ "100%"  │ { antennas: 2, bands: 2, wifi: 5, wifi_6e: 0, ofdma: 0, streams: 0 } │
│     9 │ "Deco E4"    │ "41 USD"  │ "80%"   │ "372 m2" │ "72%"   │ "1167 (867,300) Mbps"       │ "100%"  │ { antennas: 2, bands: 2, wifi: 5, wifi_6e: 0, ofdma: 0, streams: 0 } │
└───────┴──────────────┴───────────┴─────────┴──────────┴─────────┴─────────────────────────────┴─────────┴──────────────────────────────────────────────────────────────────────┘
The best for buck Deco is {
  name: "Deco S4",
  price: "47 USD",
  p_ratio: "91%",
  coverage: "511 m2",
  c_ratio: "100%",
  speed: "1167 (867,300) Mbps",
  s_ratio: "100%",
  features: { antennas: 2, bands: 2, wifi: 5, wifi_6e: 0, ofdma: 0, streams: 0 }
}
```
