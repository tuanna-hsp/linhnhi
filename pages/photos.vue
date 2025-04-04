<template>
  <v-container fluid>
    <v-row class="w-album__row" no-gutters>
      <v-col cols="12">
        <div
          class="w-album__cover-wrapper"
          :class="{
            'w-album__cover-wrapper--mobile': $vuetify.display.mobile,
          }"
        >
          <img
            class="w-album__cover"
            :src="preWeddingALbum.coverPhoto"
            @click.stop="showAlbum(preWeddingALbum)"
          />
        </div>
        <h2 class="w-album__title">{{ preWeddingALbum.name }}</h2>
        <p class="w-album__subtitle">{{ preWeddingALbum.photos.length }} ảnh</p>
      </v-col>
    </v-row>

    <!-- <v-row
      class="w-album__row"
      v-for="(row, index) in albumRows"
      :key="index"
      no-gutters
    >
      <v-col cols="12" sm="6" v-for="(album, index) in row" :key="album.name">
        <div
          class="w-album__cover-wrapper"
          :class="{
            'w-album__cover-wrapper--mobile': $vuetify.display.mobile,
            'w-album__cover-wrapper--left': index % 2 === 0,
            'w-album__cover-wrapper--right': index % 2 === 1,
          }"
        >
          <img
            class="w-album__cover"
            :src="album.coverPhoto"
            @click.stop="showAlbum(album)"
          />
        </div>
        <h2 class="w-album__title">{{ album.name }}</h2>
        <p class="w-album__subtitle">{{ album.photos.length }} ảnh</p>
      </v-col>
    </v-row> -->

    <v-dialog class="w-album__dialog" v-model="isAlbumShown" max-width="1280px">
      <v-carousel
        hide-delimiter-background
        hide-delimiters
        v-model="slideItem"
        :height="$vuetify.display.mobile ? null : '720px'"
        v-if="shownAlbum"
      >
        <v-carousel-item
          v-for="(photo, i) in shownAlbum.photos"
          :key="`${shownAlbum.name}${i}`"
        >
          <v-sheet height="100%">
            <video
              v-if="photo.includes('.mov') || photo.includes('.mp4')"
              width="100%"
              controls
            >
              <source :src="photo" type="video/mp4" />
            </video>
            <v-img v-else contain :src="photo" height="100%" />
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      shownAlbum: null,
      isAlbumShown: false,
      slideItem: 0,
      preWeddingALbum: {
        name: "Pre-wedding",
        coverPhoto: "/images/albums/wedding/cover.jpg",
        photos: [
          "/images/albums/wedding/TC1_6833.jpg",
          "/images/albums/wedding/TC1_6931.jpg",
          "/images/albums/wedding/TC1_7039.jpg",
          "/images/albums/wedding/TC1_7101.jpg",
          "/images/albums/wedding/TC1_7217.jpg",
          "/images/albums/wedding/TC1_7292.jpg",
          "/images/albums/wedding/TC1_7379.jpg",
          "/images/albums/wedding/TC1_7574.jpg",
          "/images/albums/wedding/TC1_7777.jpg",
          "/images/albums/wedding/TC1_7860.jpg",
          "/images/albums/wedding/TC1_8019.jpg",
          "/images/albums/wedding/TC1_8320.jpg",
          "/images/albums/wedding/TC1_8516.jpg",
          "/images/albums/wedding/TC1_6853.jpg",
          "/images/albums/wedding/TC1_6940.jpg",
          "/images/albums/wedding/TC1_7051.jpg",
          "/images/albums/wedding/TC1_7165.jpg",
          "/images/albums/wedding/TC1_7236.jpg",
          "/images/albums/wedding/TC1_7299.jpg",
          "/images/albums/wedding/TC1_7392.jpg",
          "/images/albums/wedding/TC1_7610.jpg",
          "/images/albums/wedding/TC1_7825.jpg",
          "/images/albums/wedding/TC1_7903.jpg",
          "/images/albums/wedding/TC1_8053.jpg",
          "/images/albums/wedding/TC1_8326.jpg",
          "/images/albums/wedding/TC1_8612.jpg",
          "/images/albums/wedding/TC1_6871.jpg",
          "/images/albums/wedding/TC1_6962.jpg",
          "/images/albums/wedding/TC1_7076.jpg",
          "/images/albums/wedding/TC1_7184.jpg",
          "/images/albums/wedding/TC1_7257.jpg",
          "/images/albums/wedding/TC1_7346.jpg",
          "/images/albums/wedding/TC1_7497.jpg",
          "/images/albums/wedding/TC1_7644.jpg",
          "/images/albums/wedding/TC1_7839.jpg",
          "/images/albums/wedding/TC1_7935.jpg",
          "/images/albums/wedding/TC1_8207.jpg",
          "/images/albums/wedding/TC1_8399.jpg",
          "/images/albums/wedding/TC1_6904.jpg",
          "/images/albums/wedding/TC1_6977.jpg",
          "/images/albums/wedding/TC1_7078.jpg",
          "/images/albums/wedding/TC1_7195.jpg",
          "/images/albums/wedding/TC1_7263.jpg",
          "/images/albums/wedding/TC1_7347.jpg",
          "/images/albums/wedding/TC1_7552.jpg",
          "/images/albums/wedding/TC1_7674.jpg",
          "/images/albums/wedding/TC1_7840.jpg",
          "/images/albums/wedding/TC1_7962.jpg",
          "/images/albums/wedding/TC1_8217.jpg",
          "/images/albums/wedding/TC1_8494.jpg",
          "/images/albums/wedding/TC1_6911.jpg",
          "/images/albums/wedding/TC1_7002.jpg",
          "/images/albums/wedding/TC1_7093.jpg",
          "/images/albums/wedding/TC1_7198.jpg",
          "/images/albums/wedding/TC1_7277.jpg",
          "/images/albums/wedding/TC1_7355.jpg",
          "/images/albums/wedding/TC1_7565.jpg",
          "/images/albums/wedding/TC1_7717.jpg",
          "/images/albums/wedding/TC1_7846.jpg",
          "/images/albums/wedding/TC1_7981.jpg",
          "/images/albums/wedding/TC1_8234.jpg",
          "/images/albums/wedding/TC1_8501.jpg",
        ],
      },
    };
  },

  computed: {
    albumRows() {
      return [
        this.albums.slice(0, 2),
        this.albums.slice(2, 4),
        this.albums.slice(4, 6),
      ];
    },
  },

  watch: {
    isAlbumShown(value) {
      if (!value) {
        this.slideItem = 0;
      }
    },
  },

  methods: {
    showAlbum(album) {
      this.shownAlbum = album;
      this.isAlbumShown = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.w-album {
  &__row {
    margin-bottom: 16px;
  }

  &__title {
    margin-top: 10px;
    text-align: center;
  }

  &__subtitle {
    text-align: center;
  }

  &__cover-wrapper {
    cursor: pointer;

    &--left {
      padding-right: 16px;
    }

    &--right {
      padding-left: 16px;
    }

    &--mobile {
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  &__cover {
    width: 100%;
    border-radius: 4px;
  }
}
</style>
