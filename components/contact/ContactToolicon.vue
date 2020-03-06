<template>
  <v-layout>
    <v-flex>
      <a
        href="https://www.messenger.com/t/mizuki.onogawa"
        class="contact messanger"
        target=”_blank”
      >
        <i class="fab fa-facebook-messenger  contact__icon"></i>
        <br>
        <span>Messanger</span>
      </a>
    </v-flex>
  </v-layout>
</template>]
<script>
export default {
  name: 'ContactToolicon'
}
</script>

<style lang="scss" scoped>
.contact {
  text-decoration: none;
  color: #fff;
}
.contact__icon {
  font-size: 3rem;
}
.messanger:hover {
  opacity: 0.3;
  transition: 0.2s ease;
}
</style>
