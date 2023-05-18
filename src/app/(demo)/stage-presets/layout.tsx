import Image from "next/image"

import "~/css/stage-presets.css"

export default function ScrollControlsLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <>
      <Overlay />
      <Image
        alt="logo"
        src="/assets/svg/favicon.svg"
        height={30}
        width={30}
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
        }}
      />
      {children}
    </>
  )
}

function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <a
        href="/"
        style={{ position: "absolute", bottom: 40, left: 90, fontSize: "13px" }}
      >
        zowie.tao
        <br />
        dev collective
      </a>
      <div
        style={{ position: "absolute", top: 40, left: 40, fontSize: "13px" }}
      >
        ok —
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          fontSize: "13px",
        }}
      >
        18/05/2023
      </div>
    </div>
  )
}
