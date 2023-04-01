<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="copyrights">
        <div class="copyrights__links">
          <NuxtLink
            class="copyrights__link"
            to="https://github.com/Johnsterr"
            target="_blank"
          >
            <KitBaseIcon
              class="copyrights-icon"
              name="Github"
              width="496"
              height="512"
            >
              <Github />
            </KitBaseIcon>
          </NuxtLink>
          <NuxtLink
            class="copyrights__link"
            to="https://t.me/evgeniy_pashko"
            target="_blank"
          >
            <KitBaseIcon
              class="copyrights-icon"
              name="Telegram"
              width="496"
              height="512"
            >
              <Telegram />
            </KitBaseIcon>
          </NuxtLink>
        </div>
        <div class="copyrights__text-wrapper">
          <p class="copyrights__text">
            Copyright &copy; 2023 E.A. Pashko | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { KitBaseIcon } from "~~/shared/ui/Icon";
import Github from "~~/shared/ui/Icons/Github.vue";
import Telegram from "~~/shared/ui/Icons/Telegram.vue";

export default defineComponent({
  components: {
    KitBaseIcon,
    Github,
    Telegram,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.footer {
  background-color: var(--primary-color);
}
.footer__inner {
  margin: 0 auto;
  padding: 1rem 2rem;
}
.copyrights {
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-primary-color);
}
.copyrights__links {
  display: flex;
  justify-content: space-between;
}
.copyrights__link {
  margin-right: 12px;
  width: auto;
  height: 24px;
  color: var(--text-secondary-color);
}
.copyrights__link:hover {
  color: var(--text-hover-secondary-color);
}
.copyrights__link:last-child {
  margin-right: 0;
}
.copyrights-icon {
  width: auto;
  height: 24px;
}
.copyrights__text-wrapper {
}
.copyrights__text {
  font: var(--font-base);
  color: var(--text-primary-color);
}
</style>
