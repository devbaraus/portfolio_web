<template>
  <div
    class="h-screen container flex items-center justify-center flex-col text-gray-light"
  >
    <h2 class="text-4xl font-bold font-ubuntu mb-8">Sucesso!</h2>
    <p>Seu e-mail foi enviado com sucesso! Em breve retornarei sua mensagem.</p>
    <button type="button" @click="$router.go(-1)" class="bg-primary py-2 px-3 mt-4">Voltar página</button>
  </div>
</template>

<script>
export default {
  name: 'form-success',
}
</script>
