<script setup>
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);

    }

})
</script>

<template>
    <div class="home">
     <main class="grid-container grid-container--home">
        <div>
        <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to 
        <span class="fs-900 d-block ff-serif text-white">Space</span></h1>
        <p class="text-white">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
        </div>
        <div>
        <a href="#" class="large-button uppercase ff-serif text-dark bg-white">Explore</a>
        </div>
    </main>
    </div>
</template>

