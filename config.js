const CONFIG = {
    valentineName: "Danah",

    pageTitle: "Will You Be My Valentine? 💝",

    floatingEmojis: {
        hearts: [ '/src/2.png', '/src/3.png', '/src/4.png', '/src/5.png'],
        bears: ['/src/6.png', '/src/7.png']
    },

    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I really do Like you!!! ❤️"
        },
        second: {
            text: "How much do you like me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine on February 17th, 2026? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    loveMessages: {
        extreme: "WOOOOW You like me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },

    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "/music/Laufey - Valentine (Official Audio) [tyKu0uZS86Q].mp3",
        startText: "🎵 Play 'Valentine' — Laufey",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
