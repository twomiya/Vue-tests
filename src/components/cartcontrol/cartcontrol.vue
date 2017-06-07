<template>
	<div class="cartcontrol">
		<div class="cart-decrease" v-show="food.count>0" @click="decreaseCart($event)" transition="move">
			<span class="inner icon-remove_circle_outline"></span>
		</div>
		<div class="cart-count " v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @click="addCart($event)"></div>
	</div>
</template>
<script>
  export default {
    props: ['food'],
    methods: {
      addCart (event) {
        if (!event._constructed) {
          return
        }
        if (!this.food.count) {
          this.$set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
        this.$emit('addcart', event.target)
      },
      decreaseCart (event) {
        if (!event._constructed) {
          return
        }
        if (this.food.count) {
          this.food.count--
        }
        this.$emit('decreasecart', event.target)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size 0
		.cart-decrease, .cart-add
			display inline-block
			padding 6px
			font-size 24px
			line-height 24px
			color rgb(0, 160, 220)
		.cart-count
			display inline-block
			vertical-align top
			width 12px
			padding-top 6px
			line-height 24px
			text-align center
			font-size 10px
			color rgb(147, 153, 159)
		.cart-add
			display inline-block
			
</style>