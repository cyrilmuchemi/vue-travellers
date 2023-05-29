<template>
<main id="crew" class="grid-container grid-container--crew flow">
    <h1 class="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>
    
    <div class="dot-indicators flex">
      <button
      v-for="(member, index) in crew" 
      :key="index"
      :aria-selected="index === 0"
      role="tab"
      :aria-controls="getTaId(index)"
      :tabindex="index === 0 ? 0 : -1"
      @click="setCurrentTabIndex(index)"
      >
      <span 
      class="sr-only">
        {{ currentName.role }}
      </span></button>
    </div>
    
    <article class="crew-details">
      <h2 class="fs-600 ff-serif uppercase">{{ currentName.role }}</h2>
      <p class="fs-700 uppercase ff-serif">{{ currentName.name }}</p>
      <p>{{ currentName.bio }}</p>
    </article>
    <picture>
      <source :srcset="currentName.images?.webp" type="image/webp">
      <img :src="currentName.images?.png" :alt="currentName.name"/>
    </picture>
  </main>
</template>

<script>
export default {
  data(){
    return {
      crew: [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./src/assets/crew/image-douglas-hurley.png",
        "webp": "./src/assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./src/assets/crew/image-mark-shuttleworth.png",
        "webp": "./src/assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./src/assets/crew/image-victor-glover.png",
        "webp": "./src/assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./src/assets/crew/image-anousheh-ansari.png",
        "webp": "./src/assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ],
  curretTabIndex: 0
  } 
  },
  computed: {
    currentName(){
      return this.crew[this.curretTabIndex];
    }
  },
  methods: {
    setCurrentTabIndex(index){
      this.curretTabIndex = index;
    },
    getTaId(index){
      return `${this.crew[index].name.toLocaleLowerCase()}-tab`;
    }
  }

}
</script>