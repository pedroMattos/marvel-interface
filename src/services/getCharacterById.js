import axios from 'axios'
import md5 from 'md5'
const publicKey = '8a2e07fa56ea6c6640fcc0127602b791'
const privateKey = '80268368a463e73b04fa43dc2acbbc2e026f4ba0'

async function getCharacterById(id) {
  const timestamp = new Date().getTime()
  const md5Hash = md5(timestamp + privateKey + publicKey)
  const { data } = await axios
    .get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}`)

  return data.data
}

export default getCharacterById