<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Edit customer</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="mb-3">
        <label for="name" class="form-label">Customer Name</label>
        <input type="text" id="name" class="form-control" v-model="clientModifie.name" required />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Adresse</label>
        <input type="text" id="address" class="form-control" v-model="clientModifie.address" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-control" v-model="clientModifie.email" required />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Phone</label>
        <input type="text" id="phone" class="form-control" v-model="clientModifie.phone" required />
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        Close
      </button>
      <button type="button" class="btn btn-primary" @click="modifierClient">
        Confirm
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";


const props = defineProps({
  client: Object,
});


const clientModifie = ref({ ...props.client });


watch(
  () => props.client,
  (nouveauClient) => {
    clientModifie.value = { ...nouveauClient };
  },
  { deep: true }
);


const emit = defineEmits(["client-modifie"]);

const modifierClient = () => {
  emit("client-modifie", { ...clientModifie.value });
};
</script>

<style scoped></style>