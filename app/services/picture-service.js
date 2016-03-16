app.service('PictureService', function(){
    var vm = this;
    vm.pictures = [{title:"Connection", link: "http://render.fineartamerica.com/images/images-profile-flow/350/images/artworkimages/medium/1/powerful-connections-glass-motivational-art-by-omashte-omaste-witkowski.jpg"},
                    {title:"Intuition", link: "https://owfotografik.files.wordpress.com/2016/01/intuition-for-the-new-year-motivational-artwork-by-omashte.jpg?w=1200"},
                    {title:"Strength & Bravery", link: "https://owfotografik.files.wordpress.com/2015/10/strength-and-bravery-abstract-inspirational-art-by-omashte.jpg?w=857"},
                    {title:"Beckoning Blue Iris", link: "https://owfotografik.files.wordpress.com/2014/09/beckoning-blue-iris-abstract-garden-art-by-omaste-witkowski-owfotografik-com.jpg?w=682&h=1024"},
                    {title:"Nature", link: "http://40.media.tumblr.com/ad02e5e96f652ed21373174882f6f229/tumblr_o3dd2hHa6n1sq4scao1_1280.jpg"},
                    {title:"Creation Abstract", link: "http://images.fineartamerica.com/images-medium-large-5/creation-abstract-digital-artwork-omaste-witkowski.jpg"},
                    ]
                    
    vm.setRandomImage = function() {
        var randomNum = Math.floor(Math.random() * vm.pictures.length);
        return randomNum;
} 

    vm.getImage = function(){
        var index = vm.setRandomImage();
        //alert(index);
        var pic = vm.pictures[index];
        console.log('returning ', pic["link"]);
        return pic["link"];
    }
})