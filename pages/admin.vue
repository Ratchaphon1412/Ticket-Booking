<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Swal from 'sweetalert2';

interface Product {
  id: number;
  name: string;
  image: string;
  status: string;
}

export default defineComponent({
  name: "AdminPage",
  setup() {
    const products = ref<Product[]>([]);

    const fetchData = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg0OTAxNDQzLCJleHAiOjE3NzEzMDE0NDN9.YehEuxm0-1NHrn-8XwufivF2aYoU-dyMkCDfqeHJbAM";
      const options = {
         headers: {
            "x-access-token": token,
          },
      };
        const response = await fetch('https://sore-leg-warmers-clam.cyclic.app/api/concert' , options);
        const result = await response.json();
        products.value = result.data.map((product: Product) => ({
          id: product.id,
          name: product.name,
          image: product.image,
          status: product.status,
        }));
      } catch (error) {
        console.error(error);
      }
    };

   

    const deleteProduct = async (id: number) => {
  console.log(id)
  try {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg0OTAxNDQzLCJleHAiOjE3NzEzMDE0NDN9.YehEuxm0-1NHrn-8XwufivF2aYoU-dyMkCDfqeHJbAM";
    const options = {
      method: "DELETE",
      headers: {
        "x-access-token": token,
      },
    };
    const result = await Swal.fire({
      title: 'Are you sure to delete this row ?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    });
    if (result.isConfirmed) {
      const response = await fetch(`https://sore-leg-warmers-clam.cyclic.app/api/admin/concert/delete/${id}`, options);
      if (response.ok) {
        // Remove the product from the local array
        products.value = products.value.filter((product) => product.id !== id);
        await Swal.fire(
          'Deleted!',
          'Your concert has been deleted.',
          'success'
        );
      } else {
        console.error("Failed to delete product");
      }
    }
  } catch (error) {
    console.error(error);
  }
};

    onMounted(() => {
      fetchData();
    });

    return {
      products,
      editProduct,
      deleteProduct
    };
  },
});
</script>

<template>
  <h1 class="text-center mt-20 text-4xl">Concert Management</h1>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-600 mr-52 ml-52 mt-20">
    <table class="w-full text-sm text-left bg-gray-600 text-gray-500:text-gray-400">
      <thead class="text-xs text-gray-50 uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            ID
          </th>
          <th scope="col" class="px-6 py-3">
            Name
          </th>
          <th scope="" class="px-6 py-3">
            Image
          </th>
          <th scope="col" class="px-6 py-3">
            Status
          </th>
          <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
          </th>
          <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Delete</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ product.id }}
          </td>
          <td class="px-6 py-4">
            {{ product.name }}
          </td>
          <td class="px-6 py-4">
            <img :src="product.image" alt="Product Image" width="200" height="200">
          </td>
          <td class="px-6-4">
            {{ product.status }}
          </td>
         <td class="px-6 py-4 text-center">
  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-5" @click="editProduct(product)">Edit</a>
</td>
                <td class="px-6 py-4 text-center">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-5" @click="deleteProduct(product.id)">Delete</a>
                </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
