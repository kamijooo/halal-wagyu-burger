// Eleventy 設定（ESModule）
// 構成方針:
//   - テンプレート/データは src/ に置く
//   - 画像・動画 assets/ は「リポジトリ直下」に既存のまま置く
//     （GitHub上でフォルダ移動が不要になる）
//   - ビルド時に assets/ をそのまま _site/assets/ へコピー
export default function (eleventyConfig) {
  // リポジトリ直下の assets/ を出力へパススルー
  eleventyConfig.addPassthroughCopy("assets");

  // mailto subject 用の URL エンコードフィルタ
  eleventyConfig.addFilter("urlencode", (str) => {
    return encodeURIComponent(str || "");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
    },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
