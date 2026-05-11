"use client"

import ModalComponent from "../components/ModalComponent"
import NavBar from "../components/NavBar"
import { useState } from "react"

export default function Modal() {
    const [open, setOpen] = useState(false)

    return (
        <div className="w-full items-center justify-center h-screen gap-4">
            <NavBar />
            <h2 className="text-center font-bold text-xl my-4">Modal</h2>
            <div className="flex justify-center">
                <button onClick={() => setOpen(true)}
                    className="bg-blue-600 hover:bg-indigo-700 
                    text-white font-bold py-2 px-4 rounded ">
                    Abrir Modal
                </button>
            </div>

            {/* conteúdo da modal */}
            <ModalComponent isOpen={open} onClose={() => setOpen(false)}>
                <h2 className="text-lg font-bold mb-2 text-center">Título da Modal</h2>
                <p className="text-gray-700 mb-4 text-center">
                    Texto da modal
                </p>
                <div className="flex justify-center">
                    <button onClick={() => setOpen(false)}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Fechar
                    </button>
                </div>
            </ModalComponent>
        </div>
    )
}