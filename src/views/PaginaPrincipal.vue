<template>
   <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
        <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h3">
              {{ item.title }}
            </div>
          </v-row>
    </v-carousel-item>

  </v-carousel>
</template>

<script>
export default {
    name: 'PaginaPrincipal',
    data () {
      return {
        items: [
          {
            src: require('../assets/imgs/Title Page.png'),
          },
          {
            src: 'https://img.freepik.com/free-photo/business-woman-working-office-computer_1303-28021.jpg?w=996&t=st=1648564694~exp=1648565294~hmac=5cc3168597367a7c2277db8ce2bc53dd861f301ae430cfa01eb7554279117fcc',
            
          },
          {
            src: 'https://img.freepik.com/free-photo/businessman-reading-contract-closeup_1098-14742.jpg?w=996&t=st=1648564706~exp=1648565306~hmac=38e679d0a941b607ebb4f6ad6b6d26f112df4f320319e5ae9f1b9f2b45d93006',
            
          },
          {
            src: 'https://img.freepik.com/free-photo/top-view-person-writing-laptop-with-copy-space_23-2148708035.jpg?w=1380&t=st=1648564763~exp=1648565363~hmac=548751811dffd57861e18503b573329e562b21bf01911c4609ee744d89fd0e47',
             
          },
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
        ],
      }
    },
}
</script>

<style scoped>
.text-h3{
  color:black;
  font-size: 5px;
}
</style>