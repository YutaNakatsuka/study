export default function callbackSample() {
  const url = 'https://api.github.com/users/Nakatsun'

  // コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    fetch(url)
      // レスポンスのBodyをJSONで読み取った結果を返す
      .then((res) => {
        res
          .json()
          .then((json) => {
            console.log('Asynchronous Callback Sample 1:', json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  console.log('Asynchronous Callback Sample 2:', profile)
}
