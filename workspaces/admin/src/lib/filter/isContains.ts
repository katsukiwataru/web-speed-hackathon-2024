// ひらがな・カタカナ変換用のマップ
const kanaToHira = (str: string): string => {
  return str.replace(/[\u30A1-\u30F6]/g, (match) => {
    return String.fromCharCode(match.charCodeAt(0) - 0x60);
  });
};

// 全角英数を半角に変換
const fullToHalf = (str: string): string => {
  return str.replace(/[\uFF01-\uFF5E]/g, (match) => {
    return String.fromCharCode(match.charCodeAt(0) - 0xfee0);
  });
};

// 正規化
const normalize = (str: string): string => {
  return fullToHalf(kanaToHira(str.toLowerCase()));
};

type Params = {
  query: string;
  target: string;
};

// ひらがな・カタカナ・半角・全角を区別せずに文字列が含まれているかを調べる
export function isContains({ query, target }: Params): boolean {
  const normalizedTarget = normalize(target);
  const normalizedQuery = normalize(query);
  return normalizedTarget.includes(normalizedQuery);
}
