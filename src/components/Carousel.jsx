import { useState, useEffect } from "react";
import car_hero_1 from "../assets/carPic/car_hero_1.png";
import car_hero_2 from "../assets/carPic/car_hero_2.png";
import car_hero_3 from "../assets/carPic/car_hero_3.png";
import car_hero_4 from "../assets/carPic/car_hero_4.png";
import car_hero_5 from "../assets/carPic/car_hero_5.png";

const images = [car_hero_1, car_hero_2, car_hero_4, car_hero_3, car_hero_5];

const Carousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        className="w-full h-full object-contain flex-shrink-0"
                        alt="Car Image"
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
