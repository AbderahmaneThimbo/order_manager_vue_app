<template>
    <div class="container mt-5">
        <h2 class="mb-4">List of Orders</h2>
        <router-link to="/create" class="btn btn-primary mb-3">
            Add New Order
        </router-link>

        <table class="table table-hover">
            <thead class="table-dark ">
                <tr>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Delivery Address</th>
                    <th>Track Number</th>
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
                            data-bs-target="#viewOrderModal">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-warning btn-sm me-2" @click="openEdit(order)" data-bs-toggle="modal"
                            data-bs-target="#editOrderModal">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" @click="confirmDeleteOrder(order.id)">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="modal fade" id="viewOrderModal" tabindex="-1" aria-labelledby="viewOrderModalTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="viewOrderModalTitle">View Order</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Date:</strong> {{ selectedOrder?.date }}</p>
                        <p><strong>Customer:</strong> {{ selectedOrder?.customer }}</p>
                        <p><strong>Delivery Address:</strong> {{ selectedOrder?.delivery_address }}</p>
                        <p><strong>Track Number:</strong> {{ selectedOrder?.track_number }}</p>
                        <p><strong>Status:</strong> {{ selectedOrder?.status }}</p>

                        <strong>Order Details:</strong>
                        <ul>
                            <li v-for="product in selectedOrder?.products" :key="product.name">
                                {{ product.name }} - Quantity: {{ product.quantity }} - Price: {{ product.price }}mru
                            </li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="editOrderModal" tabindex="-1" aria-labelledby="editOrderModalTitle"
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
import { ref } from 'vue';
import UpdateOrder from './UpdateOrder.vue';

const orders = ref([
    {
        id: 1, date: '2022/01/02', customer: 'Assa Baradji', delivery_address: 'Basra', track_number: 'A10', status: 'Delivered', products: [
            { name: 'Product 001', quantity: 2, price: 15 },
            { name: 'Product 002', quantity: 1, price: 50 }
        ]
    },
    {
        id: 2, date: '2024/01/02', customer: 'Banckolé', delivery_address: 'Pk8', track_number: 'B10', status: 'Processing', products: [
            { name: 'Product 002', quantity: 2, price: 20 }]
    },
    {
        id: 3, date: '2023/01/02', customer: 'Harouna Traoré', delivery_address: 'Basra', track_number: 'C10', status: 'Shipped', products: [
            { name: 'Product 002', quantity: 6, price: 60 }]
    },
]);

const selectedOrder = ref(null);
const orderToEdit = ref(null);

const viewDetails = (order) => {
    selectedOrder.value = order;
};

const openEdit = (order) => {
    orderToEdit.value = { ...order };
};

const confirmDeleteOrder = (id) => {
    const isConfirmed = confirm("Are you sure you want to delete this order?");
    if (isConfirmed) {
        deleteOrder(id);
    }
};

const deleteOrder = (id) => {
    orders.value = orders.value.filter((order) => order.id !== id);
};

const updateOrder = (updatedOrder) => {
    const index = orders.value.findIndex((order) => order.id === updatedOrder.id);
    if (index !== -1) {
        orders.value[index] = { ...updatedOrder };
    }
    orderToEdit.value = null;

    const modal = new bootstrap.Modal(document.getElementById("editOrderModal"));
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