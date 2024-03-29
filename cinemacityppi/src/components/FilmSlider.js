import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideImgLoader from "./SlideImgLoader";

const FilmSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [films, setfilms] = useState([
        { id: 1, src: require("../img/dune.jpg"), smallSrc: require("../img/dune1.jpg"), text: "The saga continues with the long-awaited new chapter, the sequel to the first film by director Denis Villeneuve, who won 6 Oscars in 2021. \"Dune: Part Two\" will show us the mythical journey of Paul Atreidsky, who will unite with Chani and the Fremen , to take revenge on the people who destroyed his family. Faced with a choice between love and the fate of the universe, Paul must prevent a terrible future that only he can foresee." },
        { id: 2, src: require("../img/gxk.jpg"), smallSrc: require("../img/gxk1.jpg"), text: "The new film will pit the invincible Kong and the fearsome Godzilla against a colossal new threat lurking deep within the bowels of our planet, threatening both their existence and ours. The epic film will delve even deeper into the history of the Titans, their origins and the mysteries that Skull Island hides. At the same time, it will reveal the truth about the mythical battle that helped create these creatures, and why they are linked to the human race forever." },
        { id: 3, src: require("../img/kfp.jpg"), smallSrc: require("../img/kfp1.jpg"), text: "After three deadly adventures in which Poe manages to defeat ferocious villains of world magnitude, the Dragon Warrior is once again called by fate... to finally rest. Specifically, he was chosen to become the Spiritual Leader of the Valley of Peace. This creates several obvious problems. First, Po knows as much about spiritual leadership as he does about the paleo diet, and second, he needs to quickly find and train a new Dragon Warrior before he can retire to his new high position. Worse yet, rumors abound , that the evil and extremely powerful sorceress Chameleon was recently spotted in the valley - a small lizard, which, however, has the power to transform into any living creature. Chameleon has set her greedy little eyes on the Wand of Wisdom, with which she could summon back all the great villains Poe had sent to the spirit realm. So the kung fu master will need help. He finds it (sort of?) in the muzzle of the resourceful, cunning thief Jen - a corsac fox who does get under Poe's coat, but whose skills will prove invaluable. In their quest to protect the Valley of Peace from the predatory claws of the Chameleon, the heroes of the atypical duo will have to find a way to work together and become more than they are. But will this be enough to achieve peace and harmony?" },
        // add more films as needed
    ]);

    return (
        <div className="slider">
            <h2 className="header-slider">Our Selection</h2>
            <div className="slider-wrapper">
                <Slider {...settings}>
                    {films.map((film) => {
                        return <SlideImgLoader film={film} />;
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default FilmSlider;