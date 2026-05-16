// stores データローダー
// stores.source.json を読み込み、defaults を各店舗にマージして返す。
// 各店舗で個別に値を持っていればそちらを優先（上書き可能）。
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const raw = JSON.parse(
  readFileSync(join(__dirname, "stores.source.json"), "utf-8")
);

const { domain, defaults, stores } = raw;

const merged = stores.map((store) => {
  const m = { ...defaults, ...store };
  // Instagram が空なら公式アカウントにフォールバック
  if (!m.instagram_url) {
    m.instagram_url = m.instagram_official;
  }
  return m;
});

export default {
  domain,
  defaults,
  stores: merged,
};
