"use client"

import {useEffect} from "react"

export default function ModalComponent({ isOpen, onClose, children }: any) {
    useEffect(() => {
        function handle(e: any) { //pega evento de teclado
            if (e.key === "Escape") onClose() //se for a tecla escape, fecha a modal
        }
        window.addEventListener("keydown", handle) //adiciona o evento de teclado
        return () => window.removeEventListener("keydown", handle) //remove o evento de teclado quando o componente for desmontado
    }, [onClose])

    if (!isOpen) return null //se a modal não estiver aberta, não renderiza nada
        //se a modal estiver aberta, renderiza o conteúdo da modal
    return ( //modal centralizada na tela, com fundo branco, bordas arredondadas e sombra
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <div className="flex justify-end">
                    <button onClick={onClose}>
                        X
                    </button>
                </div>

                {children}
            </div>
        </div>
    )
}