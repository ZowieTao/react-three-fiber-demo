export default function PhotoPage({ params }) {
  const photos = [{ id: "a" }, { id: "b" }, { id: "c" }]
  const photo = photos.find((p) => p.id === params.id)

  return <Photo photo={photo.id} />
}

export function Photo(props: { photo: string }) {
  return (
    <div
      style={{
        padding: "10px",
        background: "#282828",
        color: "#ffffff",
      }}
    >
      {props.photo ?? "photo not found"}
    </div>
  )
}
