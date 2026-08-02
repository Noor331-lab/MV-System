/* =========================
   MV SYSTEM Dashboard
   MAIN JS
========================= */


/*
    انتظار تحميل الصفحة بالكامل
*/

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =========================
           Counter Animation
        ========================= */


        const counters =
        document.querySelectorAll(
            ".stat h3"
        );


        counters.forEach(
            counter => {


                const target =
                counter.innerText;


                const number =
                parseInt(
                    target
                );


                let current = 0;


                const update =
                () => {


                    const increment =
                    Math.ceil(
                        number / 80
                    );


                    current += increment;


                    if(current >= number){

                        counter.innerText =
                        target;

                        return;

                    }


                    counter.innerText =
                    current + "+";


                    requestAnimationFrame(
                        update
                    );


                };


                update();


            }
        );



        /* =========================
           Scroll Reveal
        ========================= */


        const revealElements =
        document.querySelectorAll(
            ".feature-card, .dashboard-preview, .stat"
        );


        const observer =
        new IntersectionObserver(
            entries => {


                entries.forEach(
                    entry => {


                        if(entry.isIntersecting){


                            entry.target.style.opacity =
                            "1";


                            entry.target.style.transform =
                            "translateY(0)";


                        }


                    }
                );


            },
            {
                threshold:0.15
            }
        );



        revealElements.forEach(
            element => {


                element.style.opacity =
                "0";


                element.style.transform =
                "translateY(40px)";


                element.style.transition =
                "0.6s ease";


                observer.observe(
                    element
                );


            }
        );



        /* =========================
           Mouse Parallax
        ========================= */


        const background =
        document.querySelector(
            ".background"
        );


        document.addEventListener(
            "mousemove",
            event => {


                const x =
                event.clientX /
                window.innerWidth;


                const y =
                event.clientY /
                window.innerHeight;



                background.style.transform =
                `
                translate(
                    ${x * 15}px,
                    ${y * 15}px
                )
                `;


            }
        );



        /* =========================
           Button Effects
        ========================= */


        const buttons =
        document.querySelectorAll(
            "button"
        );


        buttons.forEach(
            button => {


                button.addEventListener(
                    "click",
                    () => {


                        button.style.transform =
                        "scale(0.95)";


                        setTimeout(
                            () => {


                                button.style.transform =
                                "";


                            },
                            150
                        );


                    }
                );


            }
        );


    }
);
