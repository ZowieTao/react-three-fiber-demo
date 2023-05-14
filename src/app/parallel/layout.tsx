"use client"

export default function ParallelLayout(props) {
  return (
    <div>
      parallel layout
      <div>{props.children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1" }}>{props.a}</div>
        <div style={{ flex: "1" }}>{props.b}</div>
        <div style={{ flex: "1" }}>{props.c}</div>
        <div style={{ flex: "1" }}>{props.d}</div>
      </div>
    </div>
  )
}
