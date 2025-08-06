'use client'

import movimg1 from "../../public/mov1.jpg"
import movimg2 from "../../public/mov2.jpg"
import movimg3 from "../../public/mov3.jpg"
import movimg4 from "../../public/mov4.jpg"
import movimg5 from "../../public/mov5.jpg"
import movimg6 from "../../public/mov6.jpg"
import movimg7 from "../../public/mov7.jpg"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const Landing = () => {
    const hero = useRef(null);

    useGSAP(
        () => {
            const images = ['.img1', '.img2', '.img3', '.img4', '.img5', '.img6', '.img7'];

            const initialPositions = [
                { x: 400, y: 200 },
                { x: -390, y: 190 },
                { x: 360, y: -195 },
                { x: -300, y: -205 },
                { x: 445, y: 0 },
                { x: -540, y: 0 },
                { x: 0, y: 215 },
            ]
        
            const quickToX: any[] = []
            const quickToY: any[] = []
        
            images.forEach((image, i) => {
                gsap.set(image, {
                    x: initialPositions[i].x,
                    y: initialPositions[i].y,
                })
        
                quickToX.push(gsap.quickTo(image, "x", { duration: 0.6, ease: "power3.out" }))
                quickToY.push(gsap.quickTo(image, "y", { duration: 0.6, ease: "power3.out" }))
            })
        
            const moveAmount = 100
        
            const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window
            const offsetX = (e.clientX / innerWidth - 0.5) * moveAmount
            const offsetY = (e.clientY / innerHeight - 0.5) * moveAmount
        
            quickToX.forEach((fn, i) => fn(initialPositions[i].x + offsetX))
            quickToY.forEach((fn, i) => fn(initialPositions[i].y + offsetY))
            }
        
            window.addEventListener("mousemove", handleMouseMove);

            gsap.to('.img1', { x: 12, y: 12, scrollTrigger: { start: 0, end: 800, scrub: true, }, });
            gsap.to('.img2', { x: 10, y: 10, scrollTrigger: { start: 0, end: 800, scrub: true, }, });
            gsap.to('.img3', { x: 8, y: 8, scrollTrigger: { start: 0, end: 800, scrub: true, }, });
            gsap.to('.img4', { x: 6, y: 6, scrollTrigger: { start: 0, end: 800, scrub: true, }, });
            gsap.to('.img5', { x: 4, y: 4, scrollTrigger: { start: 0, end: 800, scrub: true, }, });
            gsap.to('.img6', { x: 2, y: 2, scrollTrigger: { start: 0, end: 800, scrub: true, }, });
            gsap.to('.img7', { x: 0, y: 0, scrollTrigger: { start: 0, end: 800, scrub: true, }, });

            images.forEach(selector => {
                gsap.to(selector, {
                    width: 1530,
                    scrollTrigger: {
                        start: 800,
                        end: 1500,
                        scrub: true,
                    },
                });
            });

            gsap.to('.landt', {
                fontSize: 120,
                scrollTrigger: {
                    start: 800,
                    end: 1500,
                    scrub: true,
                },
            });
            gsap.to('.navt', {
                opacity: 1,
                scrollTrigger: {
                    start: 950,
                    end: 1500,
                    scrub: true,
                },
            });

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };
        },
        { scope: hero }
    )

    return (
        <>
        <div className="flex items-center justify-center content-center relative min-h-screen min-w-screen bg-black" ref={hero}>
            <img src={movimg1.src} alt="" className="w-64 fixed img1" />
            <img src={movimg2.src} alt="" className="w-64 fixed img2" />
            <img src={movimg3.src} alt="" className="w-64 fixed img3" />
            <img src={movimg4.src} alt="" className="w-64 fixed img4" />
            <img src={movimg5.src} alt="" className="w-64 fixed img5" />
            <img src={movimg6.src} alt="" className="w-64 fixed img6" />
            <img src={movimg7.src} alt="" className="w-64 fixed img7" />
            <div className="title text-7xl font-semibold mix-blend-exclusion text-white z-20 fixed top-1/2 left-1/2 -translate-1/2 landt">MOVAE</div>
            <div className="title text-3xl font-semibold mix-blend-exclusion text-white z-40 fixed top-5 left-1/2 -translate-1/2 opacity-0 navt">MOVAE</div>
        </div>
        <div className="flex min-h-screen min-w-screen bg-black"></div>
        <div className="flex min-h-screen min-w-screen bg-black"></div>
        </>
    );
};

export default Landing;