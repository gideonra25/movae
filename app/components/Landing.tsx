import movimg1 from "../../public/mov1.jpg"
import movimg2 from "../../public/mov2.jpg"
import movimg3 from "../../public/mov3.jpg"
import movimg4 from "../../public/mov4.jpg"
import movimg5 from "../../public/mov5.jpg"
import movimg6 from "../../public/mov6.jpg"
import movimg7 from "../../public/mov7.jpg"

const Landing = () => {
    return (
        <div className="flex items-center justify-center content-center min-h-screen min-w-screen relative bg-black">
            <img src={movimg1.src} alt="" className="w-64 absolute translate-x-100 translate-y-56" />
            <img src={movimg2.src} alt="" className="w-64 absolute -translate-x-90 translate-y-50" />
            <img src={movimg3.src} alt="" className="w-64 absolute translate-x-60 -translate-y-50" />
            <img src={movimg4.src} alt="" className="w-64 absolute -translate-x-75 -translate-y-65" />
            <img src={movimg5.src} alt="" className="w-64 absolute translate-x-115" />
            <img src={movimg6.src} alt="" className="w-64 absolute -translate-x-130" />
            <img src={movimg7.src} alt="" className="w-64 absolute translate-y-65" />
            <div className="title text-8xl font-semibold mix-blend-exclusion text-white z-20 fixed top-1/2 left-1/2 -translate-1/2">MOVAE</div>
            {/* <div className="title text-3xl font-semibold mix-blend-exclusion text-white z-40 fixed top-5 left-1/2 -translate-1/2">MOVAE</div> */}
        </div>
    );
};

export default Landing;