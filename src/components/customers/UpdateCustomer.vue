<template>
  <div class="modal fade" id="editCustomerModal" tabindex="-1" aria-labelledby="editCustomerModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Customer</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="name" class="form-label">Customer Name</label>
            <input type="text" id="name" class="form-control" v-model="clientModifie.name" required />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <textarea id="address" class="form-control" v-model="clientModifie.address" required></textarea>
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

<style scoped>
.modal-content {
  border-radius: 0.5rem;
}

.modal-header {
  background-color: #f8f9fa;
}

.modal-title {
  color: #343a40;
}
</style>
