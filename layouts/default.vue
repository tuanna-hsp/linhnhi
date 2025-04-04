<template>
  <v-app class="w-layout">
    <client-only>
      <div
        class="w-content"
        :class="{ 'w-content--mobile': $vuetify.display.mobile }"
      >
        <template v-if="!$vuetify.display.mobile">
          <v-img width="300" class="w-bg__left" src="/images/flower2-up.png" />
          <v-img
            width="300"
            class="w-bg__right"
            src="/images/flower2-down.png"
          />
        </template>

        <headline />
        <main-menu />
        <nuxt-page
          class="w-page"
          :class="{ 'w-page--mobile': $vuetify.display.mobile }"
        />
        <mobile-footer v-if="$vuetify.display.mobile" />
      </div>
    </client-only>
  </v-app>
</template>

<script>
import Headline from "~/components/wedding/headline.vue";
import MainMenu from "~/components/wedding/main-menu.vue";
import MobileFooter from "~/components/wedding/mobile-footer.vue";

export default {
  components: { MainMenu, Headline, MobileFooter },

  head() {
    return {
      title: "Trung & Nhi",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/wedding_favicon.ico" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.w-layout {
  background-color: #fff7f2;
  font-family: "VanChuong";
  min-height: 100vh;
}

.w-content {
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff7f2;
  padding-bottom: 32px;

  &--mobile {
    width: 100%;
    padding-bottom: 0px;
  }
}

.w-page {
  padding: 32px 0px;
  width: 100%;
  z-index: 1;
  background-color: #fff7f2;

  &--mobile {
    padding: 58px 0 0 0;
    min-height: calc(100vh - 290px);
    height: 100%;
    margin-bottom: 32px;
  }
}

.w-bg__left {
  position: fixed;
  top: 250px;
  left: calc((100vw - 1000px) / 2 - 200px);
}

.w-bg__right {
  position: fixed;
  top: 450px;
  right: calc((100vw - 1000px) / 2 - 200px);
}
</style>
