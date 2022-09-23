Vue.component("item", {

    props: ['desc', 'price', 'img', 'alt'],
    
    template: '<div class="imageul">\
    <div class="imageli">\
        <a target="_blank" href="img_5terre.jpg">\
            <img src={{ img }} alt={{ alt }} width="600" height="400">\
            <div class="desc">{{ desc }}</div>\
            <div class="price">{{ price }}</div>\
        </a>\
    </div>\
</div>'
})

var app= new Vue ({
    el: "#app",
    data: {
        message: "Hello World",
    },
    
})