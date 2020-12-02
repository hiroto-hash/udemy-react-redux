export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

//acion作成(オブジェクトのなかでtypeというkeyをもつ)
export const increment = () => ({
  type: INCREMENT
})
export const decrement = () => ({
  type: DECREMENT
})