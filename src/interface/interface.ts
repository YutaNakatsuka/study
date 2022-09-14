interface Bread {
  calories: number
}

interface Bread {
  types: string
}

const francePan: Bread = {
  calories: 300,
  types: 'hard',
}

// 型エイリアスで表現

type MaboDofu = {
  calories: number
  spycyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = MaboDofu & Rice // 交差型（Union）

const maboDon: MaboDon = {
  calories: 500,
  spycyLevel: 10,
  gram: 350,
}
