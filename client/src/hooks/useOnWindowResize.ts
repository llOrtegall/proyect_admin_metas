import { useEffect } from "react"

// Tremor useOnWindowResize [v0.0.0]
export const useOnWindowResize = (handler: { (): void }) => {
  useEffect(() => {
    const handleResize = () => {
      handler()
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [handler])
}