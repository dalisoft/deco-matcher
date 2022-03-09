import { MAX_ISP_SPEED, DEFAULT_DECO_MODEL } from "./constants.ts";
import decos from "./decos.ts";
import { getPercent, sum } from "./helpers.ts";
import { IDecoUnit, IDescribe, IPercent, IRaw } from "./types.d.ts";

const compareTo = decos.find(
  (deco) => deco.name === DEFAULT_DECO_MODEL
) as IDecoUnit;

const decosDescribed = decos.reduce((allDecos, deco) => {
  const { name, packs, price, speed, coverage, features } = deco;

  const percents: IPercent = {
    price: -getPercent(compareTo.price / compareTo.packs, price / packs),
    coverage: getPercent(compareTo.coverage * 0.0929, coverage * 0.0929),
    speed: getPercent(compareTo.speed.reduce(sum, 0), speed.reduce(sum, 0)),
    features: Object.values(features).reduce(sum, 0),
  };

  const describe: IDescribe = {
    name,
    price: Math.round(price / packs) + " USD",
    p_ratio: -percents.price + "%",
    coverage: Math.round(coverage * 0.0929) + " m2",
    c_ratio: percents.coverage + "%",
    speed: `${speed.reduce(sum, 0)} (${speed}) Mbps`,
    s_ratio: percents.speed + "%",
    features,
    value: 0,
  };

  Object.defineProperty(describe, "value", {
    value: Object.values({
      ...percents,
      speed: getPercent(
        Math.min(MAX_ISP_SPEED, compareTo.speed.reduce(sum, 0)),
        Math.min(MAX_ISP_SPEED, speed.reduce(sum, 0))
      ),
    }).reduce(sum, 0),
    enumerable: false,
  });

  allDecos.push(describe);
  return allDecos;
}, [] as IDescribe[]);

console.table(decosDescribed);
console.log(
  "The best for buck Deco is",
  decosDescribed.reduce((curr, deco) => {
    if (deco.value > curr.value) {
      return deco;
    }
    return curr;
  }, decosDescribed[0])
);
