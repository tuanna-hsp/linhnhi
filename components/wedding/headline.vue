<template>
  <div v-if="$vuetify.display.mobile" class="w-headline-mobile">
    <div class="w-headline-mobile__name-wrapper">
      <span class="w-headline-mobile__name">TRUNG</span>
      <v-img width="40px" src="/images/flower.png" />
      <span class="w-headline-mobile__name">NHI</span>
    </div>
  </div>
  <div v-else class="w-headline">
    <div class="w-headline__name-wrapper">
      <span class="w-headline__name">N. TRUNG</span>
      <v-img width="100px" src="/images/flower.png" />
      <span class="w-headline__name">LINH NHI</span>
    </div>
    <p class="w-headline__date"><i>Nhà trai 17.04.25 - Nhà gái 06.04.25</i></p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.w-headline {
  padding-top: 40px;
  padding-bottom: 20px;

  &__name-wrapper {
    display: flex;
    align-items: center;
  }

  &__name {
    font-size: 60px;
    font-weight: 500;
    font-family: "FilmotypeHoney";
  }

  &__date {
    font-size: 20px;
    text-align: center;
  }
}

.w-headline-mobile {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #fff7f2;
  position: fixed;
  top: 0;
  z-index: 10;

  &__name-wrapper {
    display: flex;
    align-items: center;
  }

  &__name {
    font-size: 30px;
    font-weight: 500;
    font-family: "FilmotypeHoney";
  }
}
</style>
