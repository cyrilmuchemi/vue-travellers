<template>
    <div class="primary-header flex">
     <div>
       <img class="logo" src="../assets/shared/logo.svg" alt="space-tourism-logo"/>
     </div>
     <button class="mobile-nav-toggle" aria-controls="primary-navigation"><span class="sr-only" aria-expanded="false">Menu</span></button>
     <nav>
       <ul class="primary-navigation underline-indicators flex"  data-visible="false">
         <li class="active">
           <a class="uppercase ff-sans-cond letter-spacing-2" >
             <span>00</span><RouterLink to="/">Home</RouterLink> </a>
         </li>
         <li>
           <a class="uppercase ff-sans-cond  letter-spacing-2">
             <span>01</span><RouterLink to="/destination">Destination</RouterLink> </a>
         </li>
         <li>
           <a class="uppercase ff-sans-cond  letter-spacing-2">
             <span>02</span><RouterLink to="/crew">Crew</RouterLink> </a>
         </li>
         <li>
           <a class="uppercase ff-sans-cond  letter-spacing-2">
             <span>03</span><RouterLink to="/technology">Technology</RouterLink></a>
         </li>
       </ul>
     </nav>  
     </div>
     <div>
       <RouterView></RouterView>
     </div>
</template>

<script>
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