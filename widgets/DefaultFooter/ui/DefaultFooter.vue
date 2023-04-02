<template>
  <footer :class="cls.footer">
    <div class="container" :class="cls.footerInner">
      <div :class="cls.copyrights">
        <div :class="cls.copyrightsLinks">
          <NuxtLink
            :class="cls.copyrightsLink"
            to="https://github.com/Johnsterr"
            target="_blank"
          >
            <KitBaseIcon
              :class="cls.copyrightsIcon"
              name="Github"
              width="496"
              height="512"
            >
              <GithubIcon />
            </KitBaseIcon>
          </NuxtLink>
          <NuxtLink
            :class="cls.copyrightsLink"
            to="https://t.me/evgeniy_pashko"
            target="_blank"
          >
            <KitBaseIcon
              :class="cls.copyrightsIcon"
              name="Telegram"
              width="496"
              height="512"
            >
              <TelegramIcon />
            </KitBaseIcon>
          </NuxtLink>
        </div>
        <div :class="cls.copyrightsTextWrapper">
          <p :class="cls.copyrightsText">Copyright © 2023 E.Pashko</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { KitBaseIcon } from "~~/shared/ui/BaseIcon";
import GithubIcon from "~~/shared/ui/Icons/Github.vue";
import TelegramIcon from "~~/shared/ui/Icons/Telegram.vue";
import cls from "./DefaultFooter.module.scss";

export default defineComponent({
  components: {
    KitBaseIcon,
    GithubIcon,
    TelegramIcon,
  },
  setup() {
    return {
      cls,
    };
  },
});
</script>
