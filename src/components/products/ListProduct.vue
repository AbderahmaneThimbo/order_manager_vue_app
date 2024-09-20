<template>
  <div class="container mt-5">
    <h2 class="mb-2 d-inline-block">List of Products</h2>
    <div class="d-flex justify-content-between mb-3">
      <h2 class="mb-0"></h2>
      <AddProduct @product-added="addProductToList" />
    </div>
    <table class="table table-hover table-bordered">
      <thead class="table-dark">
        <tr>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Category</th>
          <th>Barcode</th>
          <th>Status</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.barcode }}</td>
          <td>{{ product.status }}</td>
          <td class="text-center">
            <button class="btn btn-outline-info btn-sm me-2" @click="viewDetails(product)" data-bs-toggle="modal"
              data-bs-target="#viewproductModal">
              <i class="fas fa-eye"></i>
            </button>
            <button class="btn btn-outline-warning btn-sm me-2" @click="openEdit(product)" data-bs-toggle="modal"
              data-bs-target="#editproductModal">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-outline-danger btn-sm" @click="confirmDeleteProduct(product.id)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>



    <div class="modal fade" id="viewproductModal" tabindex="-1" aria-labelledby="viewproductModalTitle"
      aria-hidden="true">
      <div class="modal-dialog custom-modal-width modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewproductModalTitle">View Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="form-group-container">
              <div class="left-column">
                <div class="mb-3">
                  <label for="name" class="form-label">Product Name</label>
                  <input type="text" name="name" class="form-control" :value="selectedproduct?.name" readonly />
                </div>
                <div class="mb-3">
                  <label for="price" class="form-label">Price</label>
                  <input type="number" name="price" class="form-control" :value="selectedproduct?.price" readonly />
                </div>
                <div class="mb-3">
                  <label for="stock" class="form-label">Stock</label>
                  <input type="number" name="stock" class="form-control" :value="selectedproduct?.stock" readonly />
                </div>
              </div>
              <div class="right-column">
                <div class="mb-3">
                  <label for="category" class="form-label">Category</label>
                  <input type="text" name="category" class="form-control" :value="selectedproduct?.category" readonly />
                </div>
                <div class="mb-3">
                  <label for="barcode" class="form-label">Barcode</label>
                  <input type="text" name="barcode" class="form-control" :value="selectedproduct?.barcode" readonly />
                </div>
                <div class="mb-3">
                  <label for="status" class="form-label">Status</label>
                  <input type="text" name="status" class="form-control" :value="selectedproduct?.status" readonly />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea name="description" class="form-control" :value="selectedproduct?.description"
                readonly></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="editproductModal" tabindex="-1" aria-labelledby="editproductModalTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <UpdateProduct :product="productToEdit" @product-updated="updateProduct" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddProduct from "./AddProduct.vue";
import UpdateProduct from "./UpdateProduct.vue";

const products = ref([
  { id: 1, name: "Product 001", description: "High-quality product", price: "100", stock: "10", category: "Electronics", barcode: "123-456-7890", status: "Active" },
  { id: 2, name: "Product 002", description: "High-quality product", price: "100", stock: "10", category: "Electronics", barcode: "123-456-7890", status: "Active" },
  { id: 3, name: "Product 003", description: "High-quality product", price: "100", stock: "10", category: "Electronics", barcode: "123-456-7890", status: "Active" },


]);

const selectedproduct = ref(null);
const productToEdit = ref(null);

const viewDetails = (product) => {
  selectedproduct.value = product;
};

const openEdit = (product) => {
  productToEdit.value = { ...product };
};

const confirmDeleteProduct = (id) => {
  const isConfirmed = confirm("Êtes-vous sûr de vouloir supprimer ce produit ?");

  if (isConfirmed) {
    deleteProduct(id);
  }
};


const deleteProduct = (id) => {
  products.value = products.value.filter((product) => product.id !== id);
};

const addProductToList = (newProduct) => {
  if (newProduct.name && newProduct.email) {
    newProduct.id = products.value.length + 1;
    products.value.push(newProduct);
  }
};

const updateProduct = (updatedProduct) => {
  const index = products.value.findIndex((product) => product.id === updatedProduct.id);
  if (index !== -1) {
    products.value[index] = { ...updatedProduct };
  }
  productToEdit.value = null;

  const modal = new bootstrap.Modal(document.getElementById("editProductModal"));
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

.form-group-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.left-column,
.right-column {
  flex: 1;
}

input {
  background-color: lavender;
}

textarea {
  width: 100%;
  resize: none;
  background-color: lavender;

}
</style>
