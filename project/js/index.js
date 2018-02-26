$(()=>{
    ajax({
        type:"get",
        url:"header.html"
    }).then(data=>{
        $(".header").html(data);
    });
})