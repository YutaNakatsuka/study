export default function genericsBasicSample() {
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log('sample 1', stringReduce(['AAA ', 'BBB ', 'CCC'], 'XXX:'))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log('sample 2', numberReduce([200, 300, 400], 1000))

  type GenericReduce<T> = {
    (array: T[], initValue: T): T
  }

  const genericStringReduce: GenericReduce<string> = (array, initValue) => {
    let result = initValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Sample 3:', genericStringReduce(['AAA', 'BBB'], 'XXX'))
}
