export default function promiseSample() {
  const url = 'https://api.github.com/users/Nakatsun'

  type Profile = {
    login: string
    id: number
  }

  type FethProfile = () => Promise<Profile | null>

  const fetchProfile: FethProfile = () => {
    return new Promise((resolve, reject) => {
      fetch(url)
        // レスポンスのBodyをJSONで読み取った結果を返す
        .then((res) => {
          res
            .json()
            .then((json: Profile) => {
              console.log('Asynchronous Callback Sample 1:', json)
              resolve(json)
            })
            .catch((error) => {
              console.error(error)
              reject(null)
            })
        })
        .catch((error) => {
          console.error(error)
          reject(null)
        })
    })
  }

  fetchProfile().then((profile: Profile | null) => {
    if (profile) {
      console.log('Asynchronous Promise Sample 2:', profile)
    }
  })
}
