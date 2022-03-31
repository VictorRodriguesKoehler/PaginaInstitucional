<template>
    <v-container class="container">
        <h1 class="text-center">Contato</h1>
   <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="nome"
      :counter="30"
      :rules="nameRules"
      label="Nome completo"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field 
      v-model="cidade"
      label="Identifique sua cidade"
      required
    ></v-text-field>

<v-text-field 
    class="mensagem"
      :counter="500"
      :rules="MensagemRules"
      label="Mensagem"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      label="Você aceita receber atualizações por e-mail?"
    ></v-checkbox>
<router-link class="alert" to="/Alerta">
    <v-btn
      :disabled="!valid"
      color="red lighten-2"
      class="mr-4"
      @click="validate"
    >
      Cadastrar
    </v-btn>
</router-link>

    <v-btn
      class="mr-4"
      @click="reset"
    >
      Refazer Formulário
    </v-btn>

  </v-form>
    </v-container>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Nome é obrigatório',
        v => (v && v.length <= 30) || 'O nome deve ter menos de 30 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
      ],
      MensagemRules: [
        v => !!v || 'Digite sua mensagem',
        v => (v && v.length <= 500) || 'A mensagem deve ter no máximo 500 caracteres',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>
.alert{
    text-decoration: none;
}
</style>