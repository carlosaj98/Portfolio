import { useState, useEffect, useRef } from "react"
import { useMediaQuery } from "@mui/material"

function useReveal() {
  const isMobileScreen = useMediaQuery("(max-width:600px)")
  let thresholdValue = ""
  isMobileScreen ? (thresholdValue = "0.1") : (thresholdValue = "0.2")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: thresholdValue,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return { isVisible, sectionRef }
}
export default useReveal
