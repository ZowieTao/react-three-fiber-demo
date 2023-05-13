export default async function HomeLayout({
  children,
  authModal,
}: {
  children?: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <div>
      {children}
      {authModal}
    </div>
  )
}
