<template>
    <div class="container mt-5">
        <h2 class=" mb-4">List of orders</h2>
        <router-link to="/create" class="btn btn-primary mb-3">
      Add New Order
    </router-link>
        
        <table class="table table-hover">
            <thead class="table-dark">
                <tr>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Delivery Address</th>
                    <th>Track Numbre</th>
                    <th>Status</th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.id">
                    <td>{{ order.date }}</td>
                    <td>{{ order.customer }}</td>
                    <td>{{ order.delivery_address }}</td>
                    <td>{{ order.track_number }}</td>
                    <td>{{ order.status }}</td>
                    <td class="text-center">
                        <button class="btn btn-info btn-sm me-2" @click="viewDetails(order)" data-bs-toggle="modal"
                            data-bs-target="#vieworderModal">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-warning btn-sm me-2" @click="openEdit(order)" data-bs-toggle="modal"
                            data-bs-target="#editorderModal">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" @click="confirmDeleteOrder(order.id)">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div>
            <AddOrder @order-added="addOrderToList" />
        </div>


        <div class="modal fade" id="vieworderModal" tabindex="-1" aria-labelledby="vieworderModalTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="vieworderModalTitle">Viwe order </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Date</strong> {{ selectedorder?.date}}</p>
                        <p><strong>Customer</strong> {{ selectedorder?.customer }}</p>
                        <p><strong>Delivery Address</strong> {{ selectedorder?.delivery_address }}</p>
                        <p><strong>Track Number </strong> {{ selectedorder?.track_number }}</p>
                        <p><strong>Status</strong> {{ selectedorder?.status }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="editorderModal" tabindex="-1" aria-labelledby="editorderModalTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <UpdateOrder :order="orderToEdit" @order-updated="updateOrder" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import AddOrder from "./AddOrder.vue";
import UpdateOrder from "./UpdateOrder.vue";

const orders = ref([
    {id: 1, date: "2022/01/02", customer: "Assa baradji", delivery_address: "Basra", track_number: "A10", status: "Delivered" },
    {id: 2, date: "2024/01/02", customer: "Banckolé", delivery_address: "Pk8", track_number: "B10", status: "Processing" },
    {id: 3, date: "2023/01/02", customer: "Harouna Traoré", delivery_address: "Basra", track_number: "C10", status: "Shipped" },

]);

const selectedorder = ref(null);
const orderToEdit = ref(null);

const viewDetails = (order) => {
    selectedorder.value = order;
};

const openEdit = (order) => {
    orderToEdit.value = { ...order };
};

const confirmDeleteOrder = (id) => {
    const isConfirmed = confirm("Êtes-vous sûr de vouloir supprimer cette commande ?");

    if (isConfirmed) {
        deleteorder(id);
    }
};


const deleteorder = (id) => {
    orders.value = orders.value.filter((order) => order.id !== id);
};

const addOrderToList = (neworder) => {
    if (neworder.name && neworder.email) {
        neworder.id = orders.value.length + 1;
        orders.value.push(neworder);
    }
};

const updateOrder = (updatedorder) => {
    const index = orders.value.findIndex((order) => order.id === updatedorder.id);
    if (index !== -1) {
        orders.value[index] = { ...updatedorder };
    }
    orderToEdit.value = null;

    const modal = new bootstrap.Modal(document.getElementById("editorderModal"));
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
</style>