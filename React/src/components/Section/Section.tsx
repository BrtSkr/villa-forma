import './Section.scss';
import img1 from '../../assets/img/section/first_section.webp';
import img2 from '../../assets/img/section/second_section.webp';
import img3 from '../../assets/img/section/third_section.webp';

const Section = () => {
    return (
        <>
            <section className={"section section_first swiper-slide"}>
                <div className={"section_first__left"}>
                    <h2 className={"h2 section_first__left___h2"}>
                        <span>Przestrzeń,</span>
                        <span>którą pokochasz</span>
                    </h2>
                    <p className={"section_first__left___p section_first__left___p____elevated"}>Villa forma to enklawa 6 wolnostojących willi na Zielonym
                        Wilanowie. Wyjątkowo duże działki od 1100 do 1650 m2, na których powstają domy o metrażach
                        od
                        250 do 310 m2, od 4 do 7 pokoi.</p>
                    <p className={"section_first__left___p"}>Projekt jest skupiony na funkcjonalności i designie. Villa
                        Forma
                        to połączenie ponadczasowej prostoty i najwyższej jakości materiałów.</p>
                </div>
                <div className={"section_first__right"}>
                    <p className={"section_first__right___p"}>250m <span className={"section_first__right___p_____span section_first__right___p_____span______moved"}>2</span> - 310m <span className={"section_first__right___p_____span"}>2</span></p>
                    <img loading={"lazy"} className={"section_first__right___img"}
                        src={img1} alt={"house"} />
                </div>
            </section>

            <section className={"section section_second swiper-slide"}>
                <div className={"section_second__left"}>
                    <h2 className={"h2 section_second__left___h2"}>
                        <span>Sztuka dobrego życia</span>
                    </h2>
                    <p className={"section_second__left___p section_second__left___p____elevated"}>Wille i ich otoczenie zostały zaprojektowane w taki sposób by
                        mieszkańcy mogli osiągnąć równowagę dnia codziennego. Przestronne ogrody, wolnostojące domy
                        w
                        dużych odległościach. Tutaj chcesz oddychać pełną piersią. Czyste powietrze, trasy rowerowe,
                        ścieżki do porannego joggingu oraz długich spacerów. Świat Villa Forma to szczęście, jakie
                        daje
                        otoczenie przyrody, przy jednoczesnej, niedalekiej odległości miasta i niezbędnej
                        infrastruktury.
                    </p>
                </div>
                <div className={"section_second__right"}>
                    <img loading={"lazy"} className={"section_second__right___img"}
                        src={img2} alt={"villa"} />
                </div>
            </section>
            
            <section className={"section section_third swiper-slide"}>
                <div className={"section_third__left"}>
                    <h2 className={"h2 section_third__left___h2"}>
                        <span>Najwyższa jakość</span>
                        <span>w każdym detalu</span>
                    </h2>
                    <p className={"section_third__left___p"}>Skupiliśmy się na funkcjonalności i designie. Wykorzystaliśmy
                        materiały tylko najwyższej jakości: cegłę, szkło, drewno, beton i aluminium. Abyś otrzymał
                        to,
                        co najlepsze: konsekwentny modernistyczny styl zachwycający w swej prostocie.</p>
                </div>
                <div className="section_third__right">
                    <img loading={"lazy"} className={"section_third__right___img"}
                        src={img3} alt={"house"} />
                </div>
            </section>
        </>
    )
}

export default Section;