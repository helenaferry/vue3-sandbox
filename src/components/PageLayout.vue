<template>
    <nav className="m-8">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/webshop">Webshop Example</router-link> |
        <router-link to="/form">FormKit Example</router-link> |
        <router-link to="/my-form">My Form Example</router-link>
    </nav>
    <header>
        <h1 className="m-8 text-2xl">{{ $route.meta.title || 'Heading' }}</h1>
    </header>
    <main className="m-8">
        <slot/>
    </main>
</template>
