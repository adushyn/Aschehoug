<template>
  <div class="container">
    <!-- Media Selection and Display -->
    <div id="video-container" class="mt-3">
      <div class="title-container">
        <h2>Select and Play Media</h2>
        <div class="actions-container">
          <input class="btn btn-primary" type="file" ref="fileInput" @change="handleFileChange" accept="video/*, image/jpeg"/>
          <button class="btn btn-primary " @click="removeMedia">Remove Video</button>
        </div>
      </div>
      <div class="files-container">
        <video v-if="isVideo && mediaSrc" controls width="500" :src="mediaSrc"></video>
        <img v-if="isImage && mediaSrc" :src="mediaSrc" alt="Selected Media" width="500"/>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: "video-view",
  setup() {
    const mediaSrc = ref(null);
    const isVideo = ref(false);
    const isImage = ref(false);

    function handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        mediaSrc.value = URL.createObjectURL(file);
        isVideo.value = file.type.startsWith("video/");
        isImage.value = file.type.startsWith("image/");
      }
    }

    function removeMedia() {
      mediaSrc.value = null;
      isVideo.value = false;
      isImage.value = false;
    }

    return {
      mediaSrc,
      isVideo,
      isImage,
      handleFileChange,
      removeMedia
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#video-container {
  text-align: center;
  width: 100%; /* Ensures the full width is used */
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* Spacing between h2, the input, and the button */
  position: sticky;
  top: 0;
  background-color: white; /* Make sure the background is solid so content doesn't show through */
  padding: 10px 0;
  z-index: 10;
}

video, img {
  margin-top: 15px;
}

.actions-container {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;

  > button {
    width: fit-content;
    margin-top: 20px;
  }
}
</style>
