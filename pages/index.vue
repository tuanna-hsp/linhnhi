<template>
  <v-container>
    <img
      class="w-cover"
      :class="{ 'w-cover--mobile': $vuetify.display.mobile }"
      src="/images/wedding-cover.jpg"
    />

    <div v-for="(side, index) in sides" :key="side.name" class="w-event">
      <h1 class="w-event__side">{{ side.name }}</h1>
      <p class="w-event__main">{{ side.main }}</p>
      <p class="w-event__dad">{{ side.dad }}</p>
      <p class="w-event__mom">{{ side.mom }}</p>
      <p class="w-event__time">{{ side.time }}</p>
      <p>
        <i>{{ side.lunarTime }}</i>
      </p>
      <p class="w-event__address">
        {{ side.address }}
      </p>
      <hr v-if="index !== sides.length - 1" />
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sides: [
        {
          name: "NHÀ NỮ",
          dad: "Ông: Nguyễn Chí Sỹ",
          mom: "Bà: Nguyễn Thị Hoài Nam",
          main: "Nguyễn Thị Linh Nhi (trưởng nữ)",
          time: "11:00 Chủ Nhật, Ngày 04/06/2025",
          lunarTime: "(tức ngày 09 - 03 năm Ất Tỵ)",
          address:
            "Nhà Văn Hóa Xóm 6 Thôn Pháp Kệ, Xã Quảng Phương, Huyện Quảng Trạch, Tỉnh Quảng Bình",
        },
        {
          name: "NHÀ NAM",
          dad: "Ông: Nguyễn Hữu Bình",
          mom: "Bà: Cao Thị Tuyết",
          main: "Nguyễn Nam Trung (trưởng nam)",
          time: "11:00 Thứ Năm, Ngày 17 Tháng 04 Năm 2025",
          lunarTime: "(tức ngày 20 - 03 năm Ất Tỵ)",
          address:
            "Nhà Văn Hóa Thôn Pháp Kệ, Xã Quảng Phương, Huyện Quảng Trạch, Tỉnh Quảng Bình",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.w-event {
  text-align: center;
  margin-top: 48px;
  padding: 0 16px;

  &__side {
    font-size: 28px;
    margin-bottom: 8px;
  }

  &__time {
    font-size: 22px;
  }

  &__address {
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 48px;
  }

  &__main {
    font-size: 24px;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  &__dad {
    font-size: 18px;
    margin-right: 16px;
    margin-bottom: 8px;
  }

  &__mom {
    font-size: 18px;
    margin-bottom: 16px;
  }
}

.w-cover {
  max-width: 100%;
  height: auto;
  border-radius: 12px;

  &--mobile {
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>
