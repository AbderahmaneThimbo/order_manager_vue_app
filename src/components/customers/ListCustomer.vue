<template>
  <div class="container mt-5">

    <h2 class="mb-2 d-inline-block">List of Customers</h2>
    <div class="d-flex justify-content-between mb-3">
      <h2 class="mb-0"></h2>
      <AddCustomer @customer-added="addCustomerToList" />
    </div>
    <table class="table table-hover table-bordered">
      <thead class="table-dark">
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Phone</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td class="text-center">
            <button class="btn btn-outline-info btn-sm me-2" @click="viewDetails(customer)" data-bs-toggle="modal"
              data-bs-target="#viewCustomerModal">
              <i class="fas fa-eye"></i>
            </button>
            <button class="btn btn-outline-warning btn-sm me-2" @click="openEdit(customer)" data-bs-toggle="modal"
              data-bs-target="#editCustomerModal">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-outline-danger btn-sm" @click="confirmDeleteCustomer(customer.id)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>




    <div class="modal fade" id="viewCustomerModal" tabindex="-1" aria-labelledby="viewCustomerModalTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewCustomerModalTitle">Customer Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p><strong>Name:</strong> {{ selectedCustomer?.name }}</p>
            <p><strong>Address:</strong> {{ selectedCustomer?.address }}</p>
            <p><strong>Email:</strong> {{ selectedCustomer?.email }}</p>
            <p><strong>Phone:</strong> {{ selectedCustomer?.phone }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="editCustomerModal" tabindex="-1" aria-labelledby="editCustomerModalTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <UpdateCustomer :customer="customerToEdit" @customer-updated="updateCustomer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddCustomer from "./AddCustomer.vue";
import UpdateCustomer from "./UpdateCustomer.vue";

const customers = ref([
  { id: 1, name: "Aichetou Gaye", address: "123 Main St, New York, NY", email: "johndoe@example.com", phone: "123-456-7890" },
  { id: 2, name: "Ousmane Ly", address: "123 Main St, New York, NY", email: "johndoe@example.com", phone: "123-456-7890" },
  { id: 3, name: "Mangassouba", address: "123 Main St, New York, NY", email: "johndoe@example.com", phone: "123-456-7890" },
  { id: 4, name: "Assa baradji", address: "123 Main St, New York, NY", email: "johndoe@example.com", phone: "123-456-7890" },
  { id: 5, name: "Abderahmane Demba", address: "123 Main St, New York, NY", email: "johndoe@example.com", phone: "123-456-7890" },
  { id: 6, name: "Zubeir Ba", address: "123 Main St, New York, NY", email: "johndoe@example.com", phone: "123-456-7890" },
  { id: 7, name: "Mohamed M'khaityr", address: "456 Oak St, Los Angeles, CA", email: "janesmith@example.com", phone: "098-765-4321" },
]);

const selectedCustomer = ref(null);
const customerToEdit = ref(null);

const viewDetails = (customer) => {
  selectedCustomer.value = customer;
};

const openEdit = (customer) => {
  customerToEdit.value = { ...customer };
};

const confirmDeleteCustomer = (id) => {
  const isConfirmed = confirm("Êtes-vous sûr de vouloir supprimer ce client ?");

  if (isConfirmed) {
    deleteCustomer(id);
  }
};


const deleteCustomer = (id) => {
  customers.value = customers.value.filter((customer) => customer.id !== id);
};

const addCustomerToList = (newCustomer) => {
  if (newCustomer.name && newCustomer.email) {
    newCustomer.id = customers.value.length + 1;
    customers.value.push(newCustomer);
  }
};

const updateCustomer = (updatedCustomer) => {
  const index = customers.value.findIndex((customer) => customer.id === updatedCustomer.id);
  if (index !== -1) {
    customers.value[index] = { ...updatedCustomer };
  }
  customerToEdit.value = null;

  const modal = new bootstrap.Modal(document.getElementById("editCustomerModal"));
  modal.hide();
};
</script>

<style scoped>
h2 {
  color: #495057;
}

.table-hover tbody tr:hover {
  background-color: #f1f1f1;
}

.btn {
  font-size: 0.875rem;
}

.modal-content {
  border-radius: 0.5rem;
}

.modal-header {
  background-color: #f8f9fa;
}

.modal-title {
  color: #343a40;
}

.custom-table {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>