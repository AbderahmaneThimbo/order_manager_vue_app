<template>
    <div class="container mt-5">
      <h2 class="mb-2">View Order </h2>
  
      <div class="d-flex justify-content-end mb-3">
        <button type="button" class="btn btn-secondary" @click="goHome">Back to Orders List</button>
      </div>
  
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label"><strong>Date</strong></label>
          <input type="date" class="form-control" :value="selectedorder?.date" readonly />
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label"><strong>Customer Name</strong></label>
          <input type="text" class="form-control" :value="selectedorder?.customer" readonly />
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label"><strong>Delivery Address</strong></label>
          <input type="text" class="form-control" :value="selectedorder?.delivery_address" readonly />
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label"><strong>Track Number</strong></label>
          <input type="text" class="form-control" :value="selectedorder?.track_number" readonly />
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label"><strong>Status</strong></label>
          <input type="text" class="form-control" :value="selectedorder?.status" readonly />
        </div>
      </div>
  
      <h5 class="mt-4">Order Details</h5>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(detail, index) in orderDetails" :key="index">
          <td>
            <select v-model="detail.product_id" class="form-select" required>
              <option value="" disabled readonly>Product 001</option>
            </select>
          </td>
          <td>
            <input type="number" v-model="detail.quantity" class="form-control" placeholder="Quantity" required readonly>
          </td>
          <td>
            <input type="number" step="0.01" v-model="detail.price" class="form-control" placeholder="Price" required readonly>
          </td>
          
        </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  
  const selectedorder = ref(null); 
  
  const orders = ref([
    {
      id: 1,
      date: '2022-01-02',
      customer: 'Assa Baradji',
      delivery_address: 'Basra',
      track_number: 'A10',
      status: 'Delivered',
    },
    {
      id: 2,
      date: '2024-01-02',
      customer: 'Banckolé',
      delivery_address: 'Pk8',
      track_number: 'B10',
      status: 'Processing',
    },
    {
      id: 3,
      date: '2023-01-02',
      customer: 'Harouna Traoré',
      delivery_address: 'Basra',
      track_number: 'C10',
      status: 'Shipped',
    }
  ]);
  
  const router = useRouter();
  const route = useRoute();
  
  const goHome = () => {
    router.push({ name: 'orders' });
};



const orderDetails = ref([
  { product_id: '', quantity: 5, price: 50 },
]);

  
  </script>
  
  <style scoped>
  h2 {
    color: #495057;
  }
  .table {
    margin-top: 20px;
  }
  input {
  background-color: lavender;
}
  </style>
  