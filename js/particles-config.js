particlesJS("particles-js", {
    particles: {
      number: {
        value: 100, // Количество снежинок
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff" // Белый цвет снежинок
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.8,
        random: true
      },
      size: {
        value: 5,
        random: true
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 2,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        },
        resize: true
      }
    },
    retina_detect: true
  });
  