import { useRecoilValue } from "recoil"
import { currentWhaleQuery } from "../store/selector"
import { IWhales } from "../types"

const CurrentWhalePick = () => {
    const whale = useRecoilValue(currentWhaleQuery) as IWhales
    console.log("🚀 ~ file: CurrentWhalePick.tsx:7 ~ CurrentWhalePick ~ whale:", whale)
  return (
    <>
        {whale === undefined
            ? <p>Please choose a whale</p> :
            <>
                <h3>{whale.name}</h3>
                <p>Life span: {whale.maxLifeSpan} yrs</p>
                <p>Diet: {whale.diet} ({whale.favoriteFood})</p>
                <p>{whale.maxLengthInFt}</p>
                <p>{whale.description}</p>
            </>
        }
    </>
  )
}

export { CurrentWhalePick }