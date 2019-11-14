<template>
    <div :class="$style.sidebar" />
</template>

<script>
import { TweenMax, Power4 } from 'gsap'
export default {
    name: 'sidebar',
    props : {

    },
    data() {
        return {
            
        }
    },
    created() {
        // lúc này có thể can thiệp đến data nhưng chưa can thiệp được tới dom
        // thường được sử dụng để fetch data của api
    },
    mounted () {
        // lúc này có thể can thiệp tới data và tới dom
        // thường gọi Dom bằng cách gọi this.$el : ví dụ this.$el.getElementsByTagName('tr')[0]
        TweenMax.set(this.$el, {
            x: this.$el.offsetWidth
        });
    },
    computed: {
        // nơi này thường để convert filter lại những data để xử lý
        // những data nơi đây sẽ bị cache lại
        open () {
            return this.$store.state.ui.sidebarOpen
        }
    },
    watch: {
        // nơi này sẽ luôn lắng nghe sự thay đổi data
        open: function (open) {
            const dX = open ? 0 : this.$el.offsetWidth
            TweenMax.to(this.$el, 0.6, {
                x: dX,
                ease: Power4.easeOut
            })
        }
    },
    methods: {
        // nơi này sẽ viết các phương thức cần thiết
    },
    filters: {

    },
    components:{
        
    }
}
</script>

<style module>
.sidebar {
  z-index: 20;
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  min-height: 100vh;
  max-width: 90vw;
  background-color: var(--accent-color);
}
</style>