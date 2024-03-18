// import React from "react";

// const Deal_banner = () => {
//     const s = 60;
//     const m = 60;
//     const h = 24;
//     const d = 30;
    
//     function second() {
//         s--;
//         document.getElementById('second').innerHTML = s;
//         if (s == 0) {
//             s = 60;
//             minute();
//         }
//     }
//     function minute() {
//         m--;
//         document.getElementById('minutes').innerHTML = m;
//         if (m == 0) {
//             m = 60;
//             hours();
//         }
//     }
//     function hours() {
//         h--;
//         document.getElementById('hours').innerHTML = h;
//         if (h == 0) {
//             h = 24;
//             day();
//         }
//     }
//     function day() {
//         d--;
//         document.getElementById('days').innerHTML = d;

//     }

//     window.setInterval(second, 1000);

//     return (
//         <>
//             <div className="deal-banner">
//                 <div className="container">
//                     <div className="inner">
//                         <div className="deal-block">
//                             <div className="contain">
//                                 <p> We offer a hot deal offer every festival</p>
//                                 <span>Deal of the day!</span>
//                             </div>
//                             <ul className="cont-down">
//                                 <li className="countdown_section">
//                                     <span style={{ color: "#ffffff" }} id="days" className="countdown_timer">30</span>
//                                     <span style={{ color: "#ffffff" }} className="countdown_title">Day</span>
//                                 </li>
//                                 <li className="countdown_section">
//                                     <span style={{ color: "#ffffff" }} id="hours" className="countdown_timer">24</span>
//                                     <span style={{ color: "#ffffff" }} className="countdown_title">HRS</span>
//                                 </li>
//                                 <li className="countdown_section">
//                                     <span style={{ color: "#ffffff" }} id="minutes" className="countdown_timer">59</span>
//                                     <span style={{ color: "#ffffff" }} className="countdown_title">MIN</span>
//                                 </li>
//                                 <li className="countdown_section">
//                                     <span style={{ color: "#ffffff" }} id="second" className="countdown_timer">60</span>
//                                     <span style={{ color: "#ffffff" }} className="countdown_title">SEC</span>
//                                 </li>
//                             </ul>
//                             <div className="deal-btn">
//                                 <a href="#">shop collection</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Deal_banner;












import React, { useState, useEffect } from "react";

const Deal_banner = () => {
    let [s, setSeconds] = useState(60);
    let [m, setMinutes] = useState(60);
    let [h, setHours] = useState(24);
    let [d, setDays] = useState(30);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 0) {
                    setMinutes(prevMinutes => {
                        if (prevMinutes === 0) {
                            setHours(prevHours => {
                                if (prevHours === 0) {
                                    setDays(prevDays => {
                                        if (prevDays === 0) {
                                            clearInterval(interval);
                                            return 0;
                                        }
                                        return prevDays - 1;
                                    });
                                    return 24;
                                }
                                return prevHours - 1;
                            });
                            return 60;
                        }
                        return prevMinutes - 1;
                    });
                    return 60;
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="deal-banner" data-aos="zoom-in-up">
            <div className="container">
                <div className="inner">
                    <div className="deal-block">
                        <div className="contain">
                            <p> We offer a hot deal offer every festival</p>
                            <span>Deal of the day!</span>
                        </div>
                        <ul className="cont-down">
                            <li className="countdown_section">
                                <span style={{ color: "#ffffff" }} className="countdown_timer">{d}</span>
                                <span style={{ color: "#ffffff" }} className="countdown_title">Day</span>
                            </li>
                            <li className="countdown_section">
                                <span style={{ color: "#ffffff" }} className="countdown_timer">{h}</span>
                                <span style={{ color: "#ffffff" }} className="countdown_title">HRS</span>
                            </li>
                            <li className="countdown_section">
                                <span style={{ color: "#ffffff" }} className="countdown_timer">{m}</span>
                                <span style={{ color: "#ffffff" }} className="countdown_title">MIN</span>
                            </li>
                            <li className="countdown_section">
                                <span style={{ color: "#ffffff" }} className="countdown_timer">{s}</span>
                                <span style={{ color: "#ffffff" }} className="countdown_title">SEC</span>
                            </li>
                        </ul>
                        <div className="deal-btn">
                            <a href="#">shop collection</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deal_banner;
