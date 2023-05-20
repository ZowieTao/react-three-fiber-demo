import Image from "next/image"

import "~/css/live-envmap.css"

import { Overlay } from "../stage-presets/layout"

export default function LiveEnvmapLayout({
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
