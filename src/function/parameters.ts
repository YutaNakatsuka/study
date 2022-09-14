// オプションパラーメータを持つ関数
export const isUserSinedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! Username is', username)
    return true
  } else {
    console.log('Function parameters sample 2: User is signed in.')
    return false
  }
}

// レストパラーメーターを持つ関数
export const sumProductsPrice = (...productsPrices: number[]): number => {
  return productsPrices.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice
  }, 0)
}
