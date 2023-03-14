<template>
    <div class="Home">
        <div class="home_container">
        <div class="home_btn">
            <div class="home-details">
                <h1>Discover Products <br>for a life well lived</h1>
                <a href="/login" class="button">Get Products</a>
                <h6>Limited Qualities available</h6>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
    export default{

    }
</script>

<style scoped>
    .Home{
        background: rgba(76,175,80,0.5) url("../assets/site.jpg");
        height: 90vh;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        color:rgb(61, 56, 56);
        overflow: hidden;
        
       
    }
    div.home_container{
        background-color: aliceblue;
        opacity:0.8;
        height: 93vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .home-details{
        font-size: 15px;
        font-weight: 100;
        letter-spacing: 2px;
        line-height: 40px;
        padding: 30px;
        width: fit-content;
    }
    .home-details h1{
        margin-bottom:30px;
    }
    .button{
        padding: 10px 95px;
        border: none;
        background-color: tomato;
        text-decoration: none;
        font-size: 17px;
        letter-spacing:1.5px;
        color: white;
    }
    @media (max-width: 382.99px) {
        .home-details h1{
            font-size: 24px;
        margin-bottom:30px;
    }
        .button{
            padding: 10px 60px;
        }
    }
       @media (max-width: 312px) {
        .home-details h1{
            font-size: 20px;
        margin-bottom:30px;
    }
        .button{
            padding: 10px 40px;
        }
    }
    
</style>