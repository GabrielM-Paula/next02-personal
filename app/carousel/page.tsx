"use client"
import CarouselComponent from "../components/CarouselComponent"
import NavBar from "../components/NavBar"

export default function Carousel(){
    return (
        <div className="w-full items-center justify-center">
            <NavBar />
            <h2 className="m-4 text-2xl font-bold text-center">Carousel</h2>
            <CarouselComponent />
        </div>
    )
}