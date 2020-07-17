<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <GoogleLogin />
    </div>
</template>

<script>
// @ is an alias to /src
import GoogleLogin from "@/components/GoogleLogin.vue";

export default {
    name: "Home",
    components: {
        GoogleLogin
    }
};
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>