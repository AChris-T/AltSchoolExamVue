<template>
    <div class="user-containers">
        <div class="user-container" v-for="post in posts" :key="post.id">
            <div class="subcontainer" >
                <img :src="post.thumbnail" alt="" class='containerimage'>
                <div class="products-details">
                    <div class="product-detail">
                        <h5>{{ post.title }} </h5>
                   </div>
                   <div class="product-detail">
                        <h5>Brand: {{ post.brand }}</h5>
                    </div>
                    <div class="product-detail">
                        <h5>{{ post.description }}</h5>
                    </div>
                    <div class="product-detail">
                        <h3>${{ post.price }}</h3>
                    </div>
                    <div class="product-detail">
                        <h5>Discount: {{ post.discountPercentage }}</h5>
                    </div>
                    <div class="product-detail">
                        <h5>rating: {{ post.rating }}</h5>
                    </div>
                    <div class="product-detail">
                        <h5>stock: {{ post.stock }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <!-- <div class="table-wrapper"  >
    <table class="fl-table" >
        <thead>
        <tr >
            <th>Id</th>
            <th>Products</th>
            <th>Brand</th>
            <th>category</th>
            <th>Price ($)</th>
            <th>Dicount</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Products Image</th>
        </tr>
        </thead>
          <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}.</td>
            <td>{{ post.title }}</td>
            <td>{{ post.brand }}</td>
            <td>{{ post.category }}</td>
            <td>${{ post.price }}</td>
            <td>{{ post.discountPercentage }}%</td>
            <td>{{ post.rating }}</td>
            <td>{{ post.stock }}</td>
            <td><img :src="post.thumbnail" alt="" class='tableimage'></td>
           
        </tr>
        </tbody>
    </table>
    </div>
  <div>
</div> -->

</template>


<script >
import axios from "axios"

export default {
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
.fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
}
}

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
}

.fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
    text-align: justify;
}
.tableimage{
  width: 100px;
  height: 100px;
  object-fit: contain;
}
.fl-table thead th {
    color: #ffffff;
    background: #4FC3A1;
}


.fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
}

.fl-table tr:nth-child(even) {
    background: #F8F8F8;
}
button{
  padding: 5px;
  border: none;
  cursor: pointer;
  
}

/* Responsive */

@media (max-width: 940px) {
    .fl-table {
        display: block;
        width: 100%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
        display: block;
    }
    .fl-table thead th:last-child{
        border-bottom: none;
    }
    .fl-table thead {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .fl-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
}
</style>