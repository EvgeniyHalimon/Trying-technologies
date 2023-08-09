import { useRecoilCallback, useRecoilValue } from "recoil"
import { currentWhaleTypesQuery, whaleInfoQuery } from "../store/selector"
import { currentWhaleIdState } from "../store/atoms"
import { IWhales } from "../types"

const CurrentWhaleTypes = () => {
    const whaleTypes = useRecoilValue(currentWhaleTypesQuery)
  
    const changeWhale = useRecoilCallback(
      ({snapshot, set}) => (whaleId: string) => {
        console.log("🚀 ~ file: CurrentWhaleTypes.tsx:11 ~ CurrentWhaleTypes ~ whaleId:", whaleId)
        snapshot.getLoadable(whaleInfoQuery(whaleId))
        set(currentWhaleIdState, whaleId)
      }
    )
  
    return (
      <ul>
        {whaleTypes.map((whale: IWhales) =>
          <li key={whale.id}>
            <a
              href={"#" + whale.id}
              onClick={(e) => {
                e.preventDefault()
                changeWhale(whale.id)
              }}
            >
              {whale.name}
            </a>
          </li>
        )}
      </ul>
    )
}

export { CurrentWhaleTypes }