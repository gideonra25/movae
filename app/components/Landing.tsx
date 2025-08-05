import movimg1 from "../../public/mov1.jpg"
import movimg2 from "../../public/mov2.jpg"
import movimg3 from "../../public/mov3.jpg"
import movimg4 from "../../public/mov4.jpg"
import movimg5 from "../../public/mov5.jpg"
import movimg6 from "../../public/mov6.jpg"
import movimg7 from "../../public/mov7.jpg"

const Landing = () => {
    return (
        <div className="items-center justify-center content-center">
            <img src={movimg1.src} alt="" />
            <img src={movimg2.src} alt="" />
            <img src={movimg3.src} alt="" />
            <img src={movimg4.src} alt="" />
            <img src={movimg5.src} alt="" />
            <img src={movimg6.src} alt="" />
            <img src={movimg7.src} alt="" />
            <div className="title text-8xl font-semibold mix-blend-exclusion text-white  z-40 fixed top-1/2 left-1/2 -translate-1/2">MOVAE</div>
            <div className="title text-3xl font-semibold mix-blend-exclusion text-white  z-40 fixed top-5 left-1/2 -translate-1/2">MOVAE</div>
        </div>
    );
};

export default Landing;