"use client"

import Image from "next/image"
import { useRef, useState, type PointerEvent } from "react"

export function FlowcraftMark() {
  const button = useRef<HTMLButtonElement>(null)
  const [energized, setEnergized] = useState(false)

  function tilt(event: PointerEvent<HTMLButtonElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty("--tilt-x", `${((event.clientY - bounds.top) / bounds.height - .5) * -16}deg`)
    event.currentTarget.style.setProperty("--tilt-y", `${((event.clientX - bounds.left) / bounds.width - .5) * 16}deg`)
  }
  function resetTilt() {
    button.current?.style.setProperty("--tilt-x", "0deg")
    button.current?.style.setProperty("--tilt-y", "0deg")
  }

  return (
    <div className="flowcraft-mark-wrap">
      <button ref={button} type="button" className={`venture-emblem flowcraft-mark ${energized ? "is-energized" : ""}`} aria-label="Toggle Flowcraft logo glow" aria-pressed={energized} onClick={() => setEnergized(!energized)} onPointerMove={tilt} onPointerLeave={resetTilt} onBlur={resetTilt}>
        <span className="venture-orbit" aria-hidden="true">{Array.from({ length: 6 }, (_, i) => <i key={i} style={{ transform: `rotate(${i * 60}deg) translateY(-102px)` }} />)}</span>
        <span className="flowcraft-logo"><Image src="/flowcraft-logo.png" alt="Flowcraft" width={668} height={701} sizes="170px" /></span>
      </button>
      <span className="micro mark-hint">{energized ? "FLOW MODE ON · TAP TO RESET" : "MOVE TO TILT · TAP TO GLOW"}</span>
    </div>
  )
}
