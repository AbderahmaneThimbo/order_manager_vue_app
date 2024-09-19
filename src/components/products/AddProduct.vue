<template>
  <button type="button" class="btn btn-primary text-center" data-bs-toggle="modal" data-bs-target="#addProductModal">
    Add New Product
  </button>
  <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
    <div class="modal-dialog custom-modal-width modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="addProductModalLabel">
            Create new product
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="row g-3">
          <div class="modal-body">
            <div class="form-group-container">
              <div class="left-column">
                <div class="mb-3">
                  <label for="name" class="form-label">Product Name</label>
                  <input type="text" name="name" class="form-control" v-model="newProduct.name" required />
                </div>
                <div class="mb-3">
                  <label for="price" class="form-label">Price</label>
                  <input type="number" name="price" class="form-control" v-model="newProduct.price" required />
                </div>
                <div class="mb-3">
                  <label for="stock" class="form-label">Stock</label>
                  <input type="number" name="stock" class="form-control" v-model="newProduct.stock" required />
                </div>
              </div>
              <div class="right-column">
                <div class="mb-3">
                  <label for="category" class="form-label">Category</label>
                  <input type="text" name="category" class="form-control" v-model="newProduct.category" required />
                </div>
                <div class="mb-3">
                  <label for="barcode" class="form-label">Barcode</label>
                  <input type="text" name="barcode" class="form-control" v-model="newProduct.barcode" required />
                </div>
                <div class="mb-3">
                  <label for="status" class="form-label">Status</label>
                  <select name="status" class="form-control" v-model="newProduct.status" required>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea name="description" class="form-control" v-model="newProduct.description" required></textarea>
            </div>
          </div>
        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="addProduct">
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

const newProduct = ref({
  name: "",
  description: "",
  price: "",
  stock: "",
  category: "",
  barcode: "",
  status: "",
});

const addProduct = () => {
  const product = {
    ...newProduct.value,
  };

  emit("product-added", product);

  newProduct.value = {
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    barcode: "",
    status: "",
  };
};
</script>

<style scoped>
.form-group-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.left-column,
.right-column {
  flex: 1;
}

textarea {
  width: 100%;
  resize: none;
}
</style>