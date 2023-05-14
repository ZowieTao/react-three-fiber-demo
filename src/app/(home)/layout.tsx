export default async function HomeLayout({
  children,
  authModal,
}: {
  children?: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <div>
      home layout:
      <div
        style={{
          margin: "10px",
        }}
      >
        {children}
        {authModal}
      </div>
    </div>
  )
}
