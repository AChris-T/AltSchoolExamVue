<template>
    <div class="user-containers">
        <div class="user-container" v-for="post in posts" :key="post.id">
            <div class="subcontainer" >
                <img :src="post.thumbnail" alt="" class='containerimage'>
                <div class="products-details">
                    <div class="product-detail">
                        <h5 class="title">{{ post.title }} </h5>
                   </div>
                   <div class="product-detail">
                        <h5 class="desc">{{ post.description }}</h5>
                    </div>
                   <div class="product-detail">
                        <h5 class="brand">Brand: <span> {{ post.brand }} </span></h5>
                    </div>
                    <div class="product-detail">
                        <h5 class="brand">price: <span>${{ post.price }}</span></h5>
                    </div>
                    <div class="product-detail">
                        <h5 class="brand">discount: <span> {{ post.discountPercentage }} %</span></h5>
                    </div>
                    <div class="product-detail">
                        <h5 class="brand">rating: <span> {{ post.rating }} </span></h5>
                    </div>
                    <div class="product-detail">
                        <h5 class="brand">stock: <span> {{ post.stock }} </span></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>


<script >
import Footer from '../components/Footer.vue';
import axios from "axios"


export default {
  components: { Footer },
  name:'User',
  data(){
    return{
      posts:[],
    }
  },
  mounted(){
      axios.get('https://dummyjson.com/products')
        .then((response) => {
          console.log(response.data.products)
          this.posts = response.data.products
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

</script>
 
<style scoped>
.user-containers{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.user-container{
   width: 250px;
   margin: 30px 25px 15px;
   box-shadow: 0px 5px 100px rgba(93, 86, 86, 0.2);
}
.subcontainer{
    margin: 20px;
}
.containerimage{
    width: 100%;
    height: 150px;
    padding-bottom: 30px;
    object-fit: contain;
}
.product-detail{
    display: flex;
    flex-direction: row;
    margin-left: 10px;
}
.title{
    display: flex;
    justify-content: center;
    width: 100%;
    color:tomato;
    font-size: 15px;
}
.brand{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    justify-content: space-between;
    color:rgba(0, 0, 0, 0.662);
}
.brand span{
   font-size: 14px;
   color:black
   
}
@media (max-width: 1030px) {
.user-containers{
    grid-template-columns: 1fr 1fr 1fr;

}
}
@media (max-width: 900px) {
.user-containers{
    grid-template-columns: 1fr 1fr 1fr;

}
.user-container{
   width: 250px;
   margin: 30px 5px 15px;
}
}
@media (max-width: 800px) {
.user-containers{
    grid-template-columns: 1fr 1fr;

}
.user-container{
   width: 250px;
   margin: 30px 50px 15px;
}
}
@media (max-width: 700px) {
.user-containers{
    grid-template-columns: 1fr 1fr;

}
.user-container{
   width: 250px;
   margin: 30px 20px 15px;
}
}
@media (max-width: 590px) {
.user-containers{
    grid-template-columns: 1fr 1fr;

}
.user-container{
   width: 250px;
   margin: 30px 10px 15px;
}
}
@media (max-width: 564px) {
.user-containers{
    grid-template-columns: 1fr;

}
.user-container{
    width: 400px;
   margin: 30px 50px 15px;
}
}
@media (max-width: 490px) {
.user-containers{
    grid-template-columns: 1fr;

}
.user-container{
    width: 350px;
   margin: 30px 50px 15px;
}
}
@media (max-width: 430px) {
.user-containers{
    grid-template-columns: 1fr;

}
.user-container{
    width: 300px;
   margin: 30px 50px 15px;
}
}
@media (max-width: 385px) {
.user-containers{
    grid-template-columns: 1fr;

}
.user-container{
    width: 250px;
   margin: 30px 50px 15px;
}
}
@media (max-width: 330px) {
.user-containers{
    grid-template-columns: 1fr;

}
.user-container{
    width: 200px;
   margin: 30px 50px 15px;
}
}
</style>