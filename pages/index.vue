<template>
  <v-container>
    <img
      class="w-cover"
      :class="{ 'w-cover--mobile': $vuetify.display.mobile }"
      src="/images/wedding-cover.jpg"
    />

    <div v-for="(side, index) in sides" :key="side.name" class="w-event">
      <h1 class="w-event__side">{{ side.name }}</h1>
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
          dad: "Nguyễn Chí Sỹ",
          mon: "Nguyễn Thị Hoài Nam",
          time: "11:00 Chủ Nhật, Ngày 04/06/2025",
          lunarTime: "(tức ngày 09 - 03 năm Ất Tỵ)",
          address:
            "Khách Sạn Sammy, Số 01 Lê Hồng Phong, Phường 4 Tp.Đà Lạt, Tỉnh Lâm Đồng",
        },
        {
          name: "NHÀ NAM",
          dad: "Nguyễn Chí Sỹ",
          mon: "Nguyễn Thị Hoài Nam",
          time: "11:00 Thứ Bảy, Ngày 24 Tháng 12 Năm 2022",
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
    font-size: 24px;
  }

  &__address {
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 48px;
  }
}

.w-cover {
  max-width: 100%;
  height: auto;

  &--mobile {
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>
