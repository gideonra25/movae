'use client'

import movimg1 from "../../public/mov1.jpg"
import movimg2 from "../../public/mov2.jpg"
import movimg3 from "../../public/mov3.jpg"
import proimg1 from "../../public/pro1.jpg"
import proimg2 from "../../public/pro2.jpg"
import proimg3 from "../../public/pro3.jpg"
import movimg4 from "../../public/mov4.jpg"
import movimg5 from "../../public/mov5.jpg"
import movimg6 from "../../public/mov6.jpg"
import movimg7 from "../../public/mov7.jpg"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { useRef } from "react"
import { relative } from "path"

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

            gsap.to('.img1', { x: 12, y: 12, scrollTrigger: { start: 0, end: 800, scrub: true, onEnter: () => { window.removeEventListener("mousemove", handleMouseMove); }, onLeaveBack: () => { window.addEventListener("mousemove", handleMouseMove); } }, });
            gsap.to('.img2', { x: 10, y: 10, scrollTrigger: { start: 0, end: 800, scrub: true, }, });
            gsap.to('.img3', { x: 8, y: 8, scrollTrigger: { start: 0, end: 800, scrub: true, }, });
            gsap.to('.img4', { x: 6, y: 6, scrollTrigger: { start: 0, end: 800, scrub: true, }, });
            gsap.to('.img5', { x: 4, y: 4, scrollTrigger: { start: 0, end: 800, scrub: true, }, });
            gsap.to('.img6', { x: 2, y: 2, scrollTrigger: { start: 0, end: 800, scrub: true, }, });
            gsap.to('.img7', { x: 0, y: 0, scrollTrigger: { start: 0, end: 800, scrub: true, }, });

            images.forEach(selector => {
                gsap.to(selector, {
                    width: "100vw",
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
            gsap.to('.subt', {
                opacity: 1,
                scrollTrigger: {
                    start: 950,
                    end: 1500,
                    scrub: true,
                },
            });
            gsap.to('.chilt', {
                opacity: 1,
                scrollTrigger: {
                    start: 950,
                    end: 1500,
                    scrub: true,
                },
            });

            gsap.to('.sec2', {
                opacity: 1,
                y: 1,
                scrollTrigger: {
                    start: 500,
                    end: 1900,
                    scrub: true,
                },
            });
            gsap.to('.landt', {
                opacity: 0,
                scrollTrigger: {
                    start: 1780,
                    end: 1840,
                    scrub: true,
                },
            });
            gsap.to('.chilt', {
                opacity: 0,
                scrollTrigger: {
                    start: 1780,
                    end: 1930,
                    scrub: true,
                },
            });
            gsap.to('.abt', {
                opacity: 1,
                scrollTrigger: {
                    start: 1830,
                    end: 1900,
                    scrub: true,
                },
            });

            gsap.to('.img1', { opacity: 0, scrollTrigger: { start: 1840, end: 2300, scrub: true, }, });
            gsap.to('.img2', { opacity: 0, scrollTrigger: { start: 1840, end: 2300, scrub: true, }, });
            gsap.to('.img3', { opacity: 0, scrollTrigger: { start: 1840, end: 2300, scrub: true, }, });
            gsap.to('.img4', { opacity: 0, scrollTrigger: { start: 1840, end: 2300, scrub: true, }, });
            gsap.to('.img5', { opacity: 0, scrollTrigger: { start: 1840, end: 2300, scrub: true, }, });
            gsap.to('.img6', { opacity: 0, scrollTrigger: { start: 1840, end: 2300, scrub: true, }, });

            gsap.to('.img7', { opacity: 0, scrollTrigger: { start: 1840, end: 2300, scrub: true, }, });

            gsap.to('.ovl1', { x:1200, scrollTrigger: { start: 2350, end: 2650, scrub: true, }, });
            gsap.to('.ovl2', { x:1200, scrollTrigger: { start: 3000, end: 3300, scrub: true, }, });
            gsap.to('.ovl3', { x:1200, scrollTrigger: { start: 3650, end: 3950, scrub: true, }, });


        },
        { scope: hero }
    )

    return (
        <div ref={hero} className="overflow-x-clip">
            <div className="flex items-center justify-center content-center relative min-h-screen min-w-screen bg-black" >
                <img src={movimg1.src} alt="" className="w-64 fixed img1" />
                <img src={movimg2.src} alt="" className="w-64 fixed img2" />
                <img src={movimg3.src} alt="" className="w-64 fixed img3" />
                <img src={movimg4.src} alt="" className="w-64 fixed img4" />
                <img src={movimg5.src} alt="" className="w-64 fixed img5" />
                <img src={movimg6.src} alt="" className="w-64 fixed img6" />
                <img src={movimg7.src} alt="" className="w-64 fixed img7" />
                <div className="title text-7xl font-semibold mix-blend-exclusion text-white z-20 fixed top-1/2 left-1/2 -translate-1/2 landt">movae</div>
                <div className="title text-2xl font-semibold mix-blend-exclusion text-white z-20 fixed top-80 left-1/2 -translate-1/2 opacity-0 chilt">A S &nbsp; F E A T U R E D &nbsp; I N</div>
                <div className="title text-3xl font-semibold mix-blend-exclusion text-white z-40 fixed top-8 left-1/2 -translate-1/2 opacity-0 navt"><a href="/">movae</a></div>
                <div className="desc text-md mix-blend-exclusion text-white z-40 fixed top-8 left-50 -translate-1/2 opacity-0 subt">Learn, earn, and take your turn.</div>
            </div>
            <div className="flex min-h-screen min-w-screen bg-black"></div>
            <div className="flex min-h-screen min-w-screen bg-black"></div>
            <div className="block min-h-screen min-w-screen z-30 opacity-0 sec2 bg-gray-200">
                <div className="grid px-20 py-30 grid-cols-4 gap-4 opacity-0 abt">
                    <div className="title col-span-2 text-7xl font-semibold">ABOUT</div>
                    <div className="desc text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam repellat accusantium blanditiis eligendi eaque officiis iste dolore quae laboriosam sit ut maxime nesciunt error ipsum aspernatur quibusdam magni, earum praesentium?</div>
                    <div className="desc text-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nostrum maiores quis, cupiditate doloremque, modi dolorum dolore eligendi perspiciatis porro nesciunt at natus, expedita quibusdam officia consequatur fugiat. Exercitationem, adipisci?</div>
                </div>
                <div className="block px-20 py-30">
                    <div className="title text-7xl font-semibold">PROJECTS</div>
                    <div className="grid grid-cols-5 px-6 py-15">
                        <div className="col-span-4 overflow-visible">
                            <div className="ovl1 min-w-[1200px] h-150 bg-gray-200 fixed block"></div>
                            <img src={proimg1.src} alt="" className="min-w-[1200px] h-150 object-cover" />
                        </div>
                        <div className="flex justify-center items-center content-center">
                            <div className="h-90 min-w-60 p-7 items-center content-center bg-white/85 drop-shadow-xl">
                                <div className="title py-2">Sunshine Retreat</div>
                                <div className="desc py-1 text-gray-400">Lorem ipsum dolor sit amet.</div>
                                <div className="desc py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi iusto est voluptates minus quos!</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 px-6 py-15">
                        <div className="col-span-4 overflow-visible">
                        <div className="ovl2 min-w-[1200px] h-150 bg-gray-200 fixed block"></div>
                            <img src={proimg2.src} alt="" className="min-w-[1200px] h-150 object-cover" />
                        </div>
                        <div className="flex justify-center items-center content-center">
                            <div className="h-90 min-w-60 p-7 items-center content-center bg-white/85 drop-shadow-xl">
                                <div className="title py-2">Sunshine Retreat</div>
                                <div className="desc py-1 text-gray-400">Lorem ipsum dolor sit amet.</div>
                                <div className="desc py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi iusto est voluptates minus quos!</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 px-6 py-15">
                        <div className="col-span-4 overflow-visible">
                            <div className="ovl3 min-w-[1200px] h-150 bg-gray-200 fixed block"></div>
                            <img src={proimg3.src} alt="" className="min-w-[1200px] h-150 object-cover" />
                        </div>
                        <div className="flex justify-center items-center content-center">
                            <div className="h-90 min-w-60 p-7 items-center content-center bg-white/85 drop-shadow-xl">
                                <div className="title py-2">Sunshine Retreat</div>
                                <div className="desc py-1 text-gray-400">Lorem ipsum dolor sit amet.</div>
                                <div className="desc py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi iusto est voluptates minus quos!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;