<template>
    <div class="container mt-5">
        <h2 class="mb-2 d-inline-block">List of Orders</h2>
        <div class="d-flex justify-content-between mb-3">
            <h2 class="mb-0"></h2>
            <router-link to="/create" class="btn btn-primary text-center" style="font-size: 1.0rem;">
                Add New Order
            </router-link>
        </div>

        <table class="table table-hover table-bordered">
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
                        <button class="btn btn-outline-info btn-sm me-2" @click="view(order.id)">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-outline-warning btn-sm me-2" @click="redirectToEdit(order)">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm" @click="confirmDeleteOrder(order.id)">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>



    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const orders = ref([
    {
        id: 1, date: '2022/01/02', customer: 'Assa Baradji', delivery_address: 'Basra', track_number: 'A10', status: 'Delivered', orderDetail: [
            { name: 'Product 001', quantity: 2, price: 15 },
            { name: 'Product 002', quantity: 1, price: 50 }
        ]
    },
    {
        id: 2, date: '2024/01/02', customer: 'Banckolé', delivery_address: 'Pk8', track_number: 'B10', status: 'Processing', orderDetail: [
            { name: 'Product 002', quantity: 2, price: 20 }]
    },
    {
        id: 3, date: '2023/01/02', customer: 'Harouna Traoré', delivery_address: 'Basra', track_number: 'C10', status: 'Shipped', orderDetail: [
            { name: 'Product 003', quantity: 6, price: 60 }]
    },
]);

const selectedOrder = ref(null);


const view = (orderId) => {
    router.push({ name: 'view', params: { id: orderId } });

};

const confirmDeleteOrder = (id) => {
    const isConfirmed = confirm("Êtes-vous sûr de vouloir supprimer cette commande?");
    if (isConfirmed) {
        deleteOrder(id);
    }
};

const deleteOrder = (id) => {
    orders.value = orders.value.filter((order) => order.id !== id);
};

const router = useRouter();

const redirectToEdit = (order) => {
    router.push({ name: 'edite', params: { id: order.id } });
};
</script>

<style scoped>


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