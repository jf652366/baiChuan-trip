// 获取静态本地资源地址
export const getAssetsUrl = (assetUrl) => {
  return new URL(`../assets/${assetUrl}`, import.meta.url).href;
};

