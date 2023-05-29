<template>
  <main id="destination" class="grid-container grid-container--destination">
    <h1 class="numbered-title"><span aria-hidden="true">01</span>Pick your destination</h1>
    <picture>
      <source :srcset="currentDestination.images?.webp" type="image/webp">
      <img :src="currentDestination.images?.png" :alt="currentDestination.name" />
    </picture>
    <div class="tab-list underline-indicators flex" role="tablist" aria-label="destination list">
      <button
        v-for="(destination, index) in destinations"
        :key="index"
        :aria-selected="index === 0"
        role="tab"
        :aria-controls="getTabId(index)"
        :class="['uppercase', 'button', 'ff-sans-cond', 'text-accent', 'letter-spacing-2', { 'active': index === currentTabIndex }]"
        :tabindex="index === 0 ? 0 : -1"
        @click="setCurrentTab(index)"
      >
        {{ destination.name }}
      </button>
    </div>
    <article class="destination-info">
      <h2 class="fs-800 uppercase ff-serif">{{ currentDestination.name }}</h2>
      <p>{{ currentDestination.description }}</p>
      <div class="destination-meta flex">
        <div>
          <h3>Avg. distance</h3>
          <p class="fs-500 ff-serif uppercase">{{ currentDestination.distance }}</p>
        </div>
        <div>
          <h3>Est. travel time</h3>
          <p class="fs-500 ff-serif uppercase">{{ currentDestination.travel }}</p>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      destinations: [
        {
          name: "Moon",
          images: {
            png: "./src/assets/destination/image-moon.png",
            webp: "./src/assets/destination/image-moon.webp"
          },
          description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 km",
          travel: "3 days"
        },
        {
          name: "Mars",
          images: {
            png: "./src/assets/destination/image-mars.png",
            webp: "./src/assets/destination/image-mars.webp"
          },
          description:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          distance: "225 mil. km",
          travel: "9 months"
        },
        {
          name: "Europa",
          images: {
            png: "./src/assets/destination/image-europa.png",
            webp: "./src/assets/destination/image-europa.webp"
          },
          description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance: "628 mil. km",
          travel: "3 years"
        },
        {
          name: "Titan",
          images: {
            png: "./src/assets/destination/image-titan.png",
            webp: "./src/assets/destination/image-titan.webp"
          },
          description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          distance: "1.6 bil. km",
          travel: "7 years"
        }
      ],
      currentTabIndex: 0
    };
  },
  computed: {
    currentDestination() {
      return this.destinations[this.currentTabIndex];
    }
  },
  methods: {
    setCurrentTab(index) {
      this.currentTabIndex = index;
    },
    getTabId(index) {
      return `${this.destinations[index].name.toLowerCase()}-tab`;
    }
  }
};
</script>


