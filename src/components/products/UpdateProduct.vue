<template>
    <div class="modal-content custom-modal-width modal-lg">
        <div class="modal-header">
            <h5 class="modal-title">Edit Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="row g-3">
            <div class="modal-body">
                <div class="form-group-container">
                    <div class="left-column">
                        <div class="mb-3">
                            <label for="name" class="form-label">Product Name</label>
                            <input type="text" id="name" class="form-control" v-model="productToEdit.name" required />
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="number" id="price" class="form-control" v-model="productToEdit.price"
                                required />
                        </div>
                        <div class="mb-3">
                            <label for="stock" class="form-label">Stock</label>
                            <input type="number" id="stock" class="form-control" v-model="productToEdit.stock"
                                required />
                        </div>
                    </div>
                    <div class="right-column">
                        <div class="mb-3">
                            <label for="category" class="form-label">Category</label>
                            <input type="text" id="category" class="form-control" v-model="productToEdit.category"
                                required />
                        </div>
                        <div class="mb-3">
                            <label for="barcode" class="form-label">Barcode</label>
                            <input type="text" id="barcode" class="form-control" v-model="productToEdit.barcode"
                                required />
                        </div>
                        <div class="mb-3">
                            <label for="status" class="form-label">Status</label>
                            <select id="status" class="form-control" v-model="productToEdit.status" required>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea id="description" class="form-control" v-model="productToEdit.description"
                        required></textarea>
                </div>
            </div>
        </form>

        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
            </button>
            <button type="button" class="btn btn-primary" @click="updateProduct">
                Confirm
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
    product: Object,
});

const productToEdit = ref({ ...props.product });

watch(
    () => props.product,
    (newProduct) => {
        productToEdit.value = { ...newProduct };
    },
    { deep: true }
);

const emit = defineEmits(["product-updated"]);

const updateProduct = () => {
    emit("product-updated", { ...productToEdit.value });
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