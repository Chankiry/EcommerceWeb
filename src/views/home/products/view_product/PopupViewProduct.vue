<template>
  <div class="view">
    <div class="view-inner">
      <slot />
      <div class="flex gap-10 text-white justify-center">
        <button
          type="button"
          class="popup-close btn btn-secondary p-2 rounded-md bg-blue-900 hover:bg-slate-600"
          @click="TogglePopup()"
        >
        
          Post
        </button>
        <button
          type="button"
          class="popup-close btn btn-dark p-2 rounded-md bg-white font-bold border border-lg text-black hover:bg-slate-600 hover:text-white"
          @click="TogglePopup()"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["TogglePopup"],
};
</script>

<style>
.view {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  .view-inner {
    background: white;
    padding: 32px;
  }
}
.popup-close {
  margin-top: 16px;
}
</style>
