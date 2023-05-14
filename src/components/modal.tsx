"use client"

import { useRouter } from "next/navigation"
import { useCallback, useEffect, useRef } from "react"

export default function Modal({ children }) {
  const overlay = useRef()
  const wrapper = useRef()
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper],
  )

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss()
    },
    [onDismiss],
  )

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown)

    return () => document.removeEventListener("keydown", onKeyDown)
  }, [onKeyDown])

  return (
    <div
      ref={overlay}
      style={{
        position: "fixed",
        zIndex: 10,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "rgb(0 0 0 / 0.6)",
      }}
      onClick={onClick}
    >
      <div
        ref={wrapper}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "40%",
          padding: "1.5rem",
          transform: "translateX(-50%) translateY(-50%)",
        }}
      >
        {children}
      </div>
    </div>
  )
}
