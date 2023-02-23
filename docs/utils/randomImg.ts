// 返回随机图片地址
export const randomImg = () => {
  const randInt = Math.floor(Math.random() * (100 - 1 + 1)) + 1
  return `https://picsum.photos/200/300?random=${randInt}`
}
