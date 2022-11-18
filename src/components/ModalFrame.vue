<template>
  <vue-final-modal v-model="show">
    <div class="modal-container">
      <div class="modal-container_block">
        <div class="modal-container_block_header">
          <h4>{{ title }}</h4>
        </div>
        <div class="modal-container_block_content" v-html="content"></div>
        <div class="modal-container_block_footer">
          <button class="modal-container_close" @click="modalClose('', '', false)">Close</button>
        </div>
      </div>
    </div>
  </vue-final-modal>
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef } from "vue";

export default defineComponent({
  name: "ModalFrame",
  props: {
    modalShow: {
      required: true,
      type: Boolean,
    },
    modalClose: {
      required: true,
      type: Function,
    },
    modalContent: {
      required: true,
      type: String,
    },
    modalTitle: {
      required: true,
      type: String,
    }
  },
  setup(props) {
    const content = computed(() => { return props.modalContent})
    const title = computed(() => { return props.modalTitle})
    const show: WritableComputedRef<boolean> = computed({
      get: () => props.modalShow,
      set: () => false,
    });

    return {
      show,
      title,
      content,
    }
  },
})
</script>

<style>
  .modal-container{
    justify-content: center;
    align-items: center;
    display: flex;

    height: 100%;
  }
  .modal-container_block {
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;

    border: 3px solid #989f1e;
    background-color: #171717;
    padding: 5%;

    width: 80%;
    max-width: 550px;

    height: 80%;
    max-height: 300px;
  }
  .modal-container_block_header{
    border-bottom: 1px solid #ffffff;
  }
  .modal-container_block_footer{
    text-align: right;
  }
  .modal-container_close{
    border: 1px solid #989f1e;
    background: none;
    color: #5b5a5a;

    font-size: 16px;
    letter-spacing: 2px;

    padding: 12px;
    cursor: pointer;
  }
  .modal-container_close:hover{
    color: #989f1e;
  }

  .vfm__content{
    height: 100%;
  }
</style>