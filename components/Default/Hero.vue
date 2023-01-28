<template>
  <section class="hero" id="home">
    <figure class="hero-banner">
      <picture>
        <source
          srcset="./assets/images/hero-banner.png"
          media="(min-width: 768px)"
        />
        <source
          srcset="./assets/images/hero-banner-md.png"
          media="(min-width: 500px)"
        />
        <img
          src="./assets/images/hero-banner-sm.png"
          alt="A man in a blue shirt with a happy expression"
          class="w-100"
        />
      </picture>
    </figure>

    <div class="hero-content">
      <h2 class="h2 hero-title">We Design & Build Creative Products</h2>

      <a href="#contact" class="btn btn-primary">Get in touch</a>
    </div>

    <ul class="hero-social-list">
      <li>
        <a href="#" class="hero-social-link">
          <ion-icon name="logo-facebook"></ion-icon>

          <div class="tooltip">Facebook</div>
        </a>
      </li>

      <li>
        <a href="#" class="hero-social-link">
          <ion-icon name="logo-twitter"></ion-icon>

          <div class="tooltip">Twitter</div>
        </a>
      </li>

      <li>
        <a href="#" class="hero-social-link">
          <ion-icon name="logo-linkedin"></ion-icon>

          <div class="tooltip">Linkedin</div>
        </a>
      </li>
    </ul>

    <a href="#stats" class="scroll-down">Scroll</a>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
