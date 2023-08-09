import { Suspense } from "react"
import { CurrentWhaleId, CurrentWhalePick, CurrentWhaleTypes } from "."

const Whales = () => {
  return (
    <>
      <Suspense fallback={<div>Loading whale types...</div>}>
        <CurrentWhaleTypes />
        <Suspense fallback={
          <div>Loading <CurrentWhaleId /> info...</div>
        }>
          <CurrentWhalePick />
        </Suspense>
      </Suspense>
    </>
  )
}

export { Whales }