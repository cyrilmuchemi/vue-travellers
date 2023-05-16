<template>
 <div class="primary-header flex">
  <div>
    <img src="./assets/shared/logo.svg" alt="space-tourism-logo"/>
  </div>
  <nav>
    <ul class="primary-navigation underline-indicators flex">
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
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>
