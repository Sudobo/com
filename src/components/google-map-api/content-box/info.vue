<template>
    <div class="content_card">
        <!-- neu content co du lieu thi hien thi -->
        <img :src="content.imgUrl" :alt="content.name" v-if="content.imgUrl != ''">
        <p class="name" v-if="content.name != ''">Name : {{ content.name }}</p>
        <p class="description" v-if="content.description != ''">Adress : {{ content.description }}</p>
        <p class="phone" v-if="content.phone != ''">Phone : {{ content.phone }}</p>
    </div>
</template>

<style type="text/css" scoped lang="scss">
.content_card {
    display: block;
    width: 150px;
    .name {
        color: #29c58d;
        font-weight: 400
    }
    img {
        width: 100%;
    }
    .phone {
        line-height: 0;
    }
}
</style>

<script type="text/javascript">
    export default {
        props: ['content']
    };
</script>