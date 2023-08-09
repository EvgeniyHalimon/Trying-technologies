import { useRecoilValue } from "recoil"
import { currentWhaleIdState } from "../store/atoms"

const CurrentWhaleId = () => {
    const whaleId = useRecoilValue(currentWhaleIdState)
    console.log("🚀 ~ file: CurrentWhaleId.tsx:6 ~ CurrentWhaleId ~ whaleId:", whaleId)
  return (
    <div>{whaleId.replace('_', ' ')}</div>
  )
}

export { CurrentWhaleId }