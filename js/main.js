const signupHandler = {
    init() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.getElementById("menu");
        hamburger.addEventListener("click", e => {
            if (navMenu.classList.contains("hide")) {
                navMenu.classList.remove("hide");
            } else {
                navMenu.classList.add("hide");
            }
        });
        navMenu.addEventListener("click", e => {
            if (e.target === navMenu.children[0]) {
                console.log(e.target);
                navMenu.classList.add("hide");
                document.querySelector(".about").classList.remove("hide");
                if (!document.querySelector(".signup").classList.contains("hide")) {
                    document.querySelector(".signup").classList.add("hide");
                }
            }
            if (e.target === navMenu.children[1]) {
                console.log(e.target);
                navMenu.classList.add("hide");
                document.querySelector(".signup").classList.remove("hide");
                if (!document.querySelector(".about").classList.contains("hide")) {
                    document.querySelector(".about").classList.add("hide");
                }
            }
        });
    },
    render() {

    }
};

const loginHandler = {

};
signupHandler.init();