import Modal from "../../../../../../components/modal"
import { Photo } from "../../../../photo/[id]/page"

export default function PhotoModal({ params }) {
  const photos = [{ id: "a" }, { id: "b" }, { id: "c" }]
  const photo = photos.find((p) => p.id === params.id)

  return (
    <Modal>
      <Photo photo={photo.id} />
    </Modal>
  )
}
