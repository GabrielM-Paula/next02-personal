"use client" //necessário para lidar com dados

import { useState, useEffect } from "react"

const images = [ //vetor de imagens do carrossel
    "http://picsum.photos/id/1018/800/400",
    "http://picsum.photos/id/1015/800/400",
    "http://picsum.photos/id/1019/800/400"
]

export default function CarouselComponent(){

    const [current,setCurrent] = useState(0) //pega o índice da imagem no vetor

    useEffect(()=>{ //controle de eventos na tela
        const interval = setInterval(()=>{
            setCurrent((prev)=>
                prev === images.length - 1? 0 : prev +1
            )
        }, 3000) // 3mil milisegundos = 3 segundos
        
        return ()=> clearInterval(interval)
    },[])

    return (
        <div className="flex justify max-w-2l mx-auto">
            <img src={images[current]} alt="" 
            className="w-600 h-80 m-10 object-cover rounded-2xl shadow-lg transition-all duration-500"/>
        </div>
    )
}






