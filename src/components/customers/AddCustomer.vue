<template>
  <button type="button" class="btn btn-primary text-center" data-bs-toggle="modal" data-bs-target="#addCustomerModal">
    Add New Customer
  </button>
  <div class="modal fade" id="addCustomerModal" tabindex="-1" aria-labelledby="addCustomerModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="addCustomerModalLabel">
            Create new customer
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="name" class="form-label">Ccustomer Name </label>
            <input type="text" name="name" class="form-control" v-model="newCustomer.name" required />
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">Address</label>
            <textarea name="description" class="form-control" v-mpdel="newCustomer.address" required></textarea>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email </label>
            <input type="email" name="email" class="form-control" v-model="newCustomer.email" required />
          </div>

          <div class="mb-3">
            <label for="phone" class="form-label">Phone </label>
            <input type="tel" name="phone" class="form-control" v-model="newCustomer.phone" required />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="addCustomer">
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits();

const newCustomer = ref({
  name: "",
  address: "",
  email: "",
  phone: "",
});

const addCustomer = () => {
  const customer = {
    ...newCustomer.value,
  };

  emit("customer-added", customer);


  newCustomer.value = {
    name: "",
    address: "",
    email: "",
    phone: "",
  };
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