<template>

    <header class="bg-white shadow-md">
        <nav class="container mx-auto flex justify-between items-center p-4">
            <div class="text-xl capitalize font-bold">
                journal store
            </div>
            <ul class="flex space-x-4">
                <li class="capitalize">
                    <nuxt-link to="/">
                        home
                    </nuxt-link>
                </li>
                <li class="capitalize">
                    <nuxt-link to="/about">
                        about
                    </nuxt-link>
                </li>
                <li class="capitalize">
                    <nuxt-link to="/shop">
                        shop
                    </nuxt-link>
                </li>
                <li class="capitalize">
                    <nuxt-link to="/contact">
                        contact
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </header>


</template>