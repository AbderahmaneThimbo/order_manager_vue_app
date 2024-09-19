<template>
  <form @submit.prevent="submitOrder">

    <div class="d-flex justify-content-end mb-3 mt-3">
      <button type="button" class="btn btn-secondary" @click="goHome">Return to Home</button>
      <button type="submit" class="btn btn-primary ms-2">Submit</button>
    </div>


    <div class="row">

      <div class="col-md-6 mb-3">
        <label for="orderDate" class="form-label">Date</label>
        <input type="date" v-model="order.date" class="form-control" required>
      </div>
      <div class="col-md-6 mb-3">
        <label for="customerName" class="form-label">Customer name</label>
        <input type="text" v-model="order.customer_name" class="form-control" required>
      </div>

      <div class="col-md-6 mb-3">
        <label for="deliveryAddress" class="form-label">Delivery Address</label>
        <input type="text" v-model="order.delivery_address" class="form-control" required>
      </div>
      <div class="col-md-6 mb-3">
        <label for="trackNumber" class="form-label">Track Number</label>
        <input type="text" v-model="order.track_number" class="form-control" required>
      </div>
      <div class="col-md-6 mb-3">
        <label for="status" class="form-label">Order Status</label>
        <select class="form-select" v-model="order.status" id="status">
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
    </div>


    <h5 class="mt-4">Order Details</h5>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(detail, index) in orderDetails" :key="index">
          <td>
            <select v-model="detail.product_id" class="form-select" required>
              <option value="" disabled>Select a product</option>
              <option value="1">Product 001</option>
              <option value="2">Product 002</option>
              <option value="3">Product 003</option>
            </select>
          </td>
          <td>
            <input type="number" v-model="detail.quantity" class="form-control" placeholder="Quantity" required>
          </td>
          <td>
            <input type="number" step="0.01" v-model="detail.price" class="form-control" placeholder="Price" required>
          </td>
          <td>
            <button type="button" class="btn btn-danger" @click="removeDetail(index)">Remove</button>
          </td>
        </tr>

        <tr>
          <td colspan="4" class="text-start">
            <button type="button" class="btn btn-success" @click="addDetail">Add New Detail</button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const order = ref({
  date: '',
  customer_name: '',
  delivery_address: '',
  track_number: '',
  status: '',
});


const orderDetails = ref([
  { product_id: '', quantity: 1, price: 0.00 },
]);


const addDetail = () => {
  orderDetails.value.push({ product_id: '', quantity: 1, price: 0.00 });
};


const removeDetail = (index) => {
  if (orderDetails.value.length === 1) {
    alert('A command must have at least one detail.');
  } else {
    orderDetails.value.splice(index, 1);
  }
};


const submitOrder = () => {
  const newOrder = {
    ...order.value,
    details: orderDetails.value,
  };
  console.log('Order Submitted:', newOrder);
};


const router = useRouter();

const goHome = () => {
  router.push({ name: 'orders' });
};
</script>
