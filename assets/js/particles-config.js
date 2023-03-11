function initParticles() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 280,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#ffffff"
                },
                "polygon": {
                    "nb_sides": 3
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.62,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.4,
                    "opacity_min": 0.35,
                    "sync": false
                }
            },
            "size": {
                "value": 2.2,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "size_min": 0.9,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 62,
                "color": "#ffffff",
                "opacity": 0.35,
                "width": 0.4
            },
            "move": {
                "enable": true,
                "speed": 0.05,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 1200,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

initParticles();

// llamar la función en eventos de redimensionamiento y carga
var timer;
window.addEventListener('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(initParticles, 60); //Tiempo de carga de particulas
});

window.addEventListener('load', function () {
    initParticles();
});