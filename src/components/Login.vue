<template>
  <div class="bg-gray-200 h-screen">
    <div class="container mx-auto px-5">
      <div class="h-screen flex flex-col items-center justify-center">
        <img class="mb-14" src="/img/icons/logo-club.svg" alt="Logo club">
        <div class="block w-96 p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <form>
            <h3 class="font-display text-2xl mb-5 text-dark">Kirish</h3>
            <div class="form-group mb-6">
              <label
                for="exampleInputEmail2"
                class="form-label font-medium text-xs inline-block mb-2 text-dark uppercase tracking-nav"
                >Login</label
              >
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Loginingizni kiriting"
              />
            </div>
            <div class="form-group mb-6">
              <label
                for="exampleInputPassword2"
                class="form-label font-medium text-xs inline-block mb-2 text-dark uppercase tracking-nav"
                >Parol</label
              >
              <input
                type="password"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Parolingizni kiriting"
              />
            </div>
            <button
              type="submit"
              class="w-full px-6 py-3.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Kirish
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
