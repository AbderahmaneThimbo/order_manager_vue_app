<template>
    <div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
      <div class="modal-dialog custom-modal-width modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editProductModalLabel">Edit Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form class="row g-3">
            <div class="modal-body">
              <div class="form-group-container">
                <div class="left-column">
                  <div class="mb-3">
                    <label for="name" class="form-label">Product Name</label>
                    <input type="text" name="name" class="form-control" v-model="product.name" required />
                  </div>
                  <div class="mb-3">
                    <label for="price" class="form-label">Price</label>
                    <input type="number" name="price" class="form-control" v-model="product.price" required />
                  </div>
                  <div class="mb-3">
                    <label for="stock" class="form-label">Stock</label>
                    <input type="number" name="stock" class="form-control" v-model="product.stock" required />
                  </div>
                </div>
                <div class="right-column">
                  <div class="mb-3">
                    <label for="category" class="form-label">Category</label>
                    <input type="text" name="category" class="form-control" v-model="product.category" required />
                  </div>
                  <div class="mb-3">
                    <label for="barcode" class="form-label">Barcode</label>
                    <input type="text" name="barcode" class="form-control" v-model="product.barcode" required />
                  </div>
                  <div class="mb-3">
                    <label for="status" class="form-label">Status</label>
                    <select name="status" class="form-control" v-model="product.status" required>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea name="description" class="form-control" v-model="product.description"></textarea>
              </div>
            </div>
          </form>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="updateProduct">Update</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from "vue";
  
  const emit = defineEmits();
  const product = ref({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    barcode: "",
    status: "",
  });
  
  const updateProduct = () => {
    emit("product-updated", product.value);
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
  