<template>
    <div class="container mt-5">
        <h2 class=" mb-4">List of Products</h2>
        <table class="table table-hover">
            <thead class="table-dark">
                <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Category</th>
                    <th>Barcode</th>
                    <th>Starus</th>
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
                        <button class="btn btn-info btn-sm me-2" @click="viewDetails(product)" data-bs-toggle="modal"
                            data-bs-target="#viewproductModal">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-warning btn-sm me-2" @click="openEdit(product)" data-bs-toggle="modal"
                            data-bs-target="#editproductModal">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" @click="confirmDeleteProduct(product.id)">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div>
            <AddProduct @product-added="addProductToList" />
        </div>


        <div class="modal fade" id="viewproductModal" tabindex="-1" aria-labelledby="viewproductModalTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="viewproductModalTitle">Viwe Product </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Product Name:</strong> {{ selectedproduct?.name }}</p>
                        <p><strong>Category</strong> {{ selectedproduct?.category }}</p>
                        <p><strong>Price</strong> {{ selectedproduct?.price }}</p>
                        <p><strong>Stock Quantity </strong> {{ selectedproduct?.stock }}</p>
                        <p><strong>Barcode</strong> {{ selectedproduct?.barcode }}</p>
                        <p><strong>Status</strong> {{ selectedproduct?.status }}</p>
                        <p><strong>Description</strong> {{ selectedproduct?.description }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
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
    {id: 1, name: "Product 001", description: "High-quality product", price: "100", stock: "10", category: "Electronics", barcode: "123-456-7890", status: "Active" },
    {id: 2, name: "Product 002", description: "High-quality product", price: "100", stock: "10", category: "Electronics", barcode: "123-456-7890", status: "Active" },
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
</style>