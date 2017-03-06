$(function(){

    getMallNav();
    function getMallNav(){
        $.ajax({
            url:"http://192.168.37.61:3000/api/getindexmenu",
            success:function(data){
                var html = template("indexMenu",data);
                console.log(html)
                $('.nav').html(html);
                $('.nav>.row>div:nth-child(8)').on('click',function(){
                    $(".col-xs-3:nth-last-child(-n+4)").toggle();
                });
            }
        })
    }
    getMoneyCtrl();
    function getMoneyCtrl(){
        $.ajax({
            url:"http://192.168.37.61:3000/api/getmoneyctrl",
            success:function(data){
                var html = template("moneyctrl",data);
                $(".discountList").html(html);
            }
        })
    }




});