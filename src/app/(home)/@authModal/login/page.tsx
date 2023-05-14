"use client"

import { useRouter } from "next/navigation"

import Modal from "../../../../components/modal"

export default async function Login() {
  const router = useRouter()
  return (
    <Modal>
      <div
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <span onClick={() => router.back()}>Close modal</span>
        <h1>Login</h1>
      </div>
    </Modal>
  )
}
