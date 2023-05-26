<script setup lang="ts">
import Swal from "sweetalert2";

definePageMeta({
  layout: "base",
  middleware: ["loginauth"],
});
const authentication = useAuthStore();

let email: string;
let password: string;

const loginClick = async () => {
  try {
    await authentication.login(email, password);
    const checkAuth = computed(() => authentication.getIsAuth);
    const checkRole = authentication.getRole;

    if (checkAuth) {
      if (checkRole == "ROLE_ADMIN") {
        navigateTo("/admin");
      } else if (checkRole == "ROLE_USER") {
        navigateTo("/ticket");
      }
    } else {
    }
  } catch (e) {
    console.log(e);
    await Swal.fire({
      title: "Error !",
      text: "Unknow user or password",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    });
  }
};

//
</script>

<template>
  <div>
    <section class="bg-gray-50 dark:bg-gray-900 h-screen">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            class="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Sign in to your account
            </h1>
            <form
              class="space-y-4 md:space-y-6"
              v-on:submit.prevent="loginClick"
            >
              <div>
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your username</label
                >
                <input
                  type="username"
                  name="username"
                  v-model.trim="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username or Email"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  type="password"
                  name="password"
                  v-model.trim="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                class="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <NuxtLink
                  to="/register"
                  class="font-medium text-gray-600 hover:underline"
                  >Sign up</NuxtLink
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
