export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object alias sample 1:', japan)

  const america: Country = {
    capital: 'Washinton, D.C.',
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object alias sample 2:', america)

  // 合併型(union)と交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型... KnightまたはWizardの型を持ちますよ
  type Adventurer = Knight | Wizard

  // 交差型... KnightかつWizardの型を持つ
  type Paladin = Knight & Wizard

  const adventure1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の棒',
    swordSkill: '三連斬り',
  }

  const adventure2: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の杖',
    swordSkill: 'ファイアボール',
  }

  console.log('Object alias sample3:', adventure1)
  console.log('Object alias sample3:', adventure2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '五連斬り',
    magicSkill: 'メラゾーマ',
  }

  console.log('Object alias sample3:', paladin)
}
