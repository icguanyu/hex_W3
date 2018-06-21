var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
        datasets: [{
                fill: 0,
                backgroundColor: "#7ED321",
                lineTension: 0, //弧度
                label: "REVENUE",
                borderColor: '#7ED321',
                data: [3000, 1000, 5000, 3000, 4000, 3000, 8000],
            },
            {
                fill: false,
                backgroundColor: "#D0021B",
                lineTension: 0, //弧度
                label: "COST",
                borderColor: '#D0021B',
                data: [2000, 500, 2000, 4000, 1000, 2000, 3000],
            },
            {
                fill: false,
                backgroundColor: "#4A90E2",
                lineTension: 0, //弧度
                label: "INCOME",
                borderColor: '#4A90E2',
                data: [5000, 4000, 3000, 5000, 5000, 7000, 6000],
            }
        ]
    },

    // Configuration options go here
    options: {}
});


var revenue = new CountUp("revenue", 0, 54540);
revenue.start();
var cost = new CountUp("cost", 0, 12660);
cost.start();
var income = new CountUp("income", 0, 41880);
income.start();


$('.select_zoom').on('click', function() {
    $('.select_time').toggleClass('hide')
})
$('.select_time li').on('click', function() {
        var nowzoom = $(this).text()
        $('.select_zoom span').text(nowzoom)
        $('.select_time').addClass('hide')
    })
    //jQuery Price Format
$('.orderprice ,.trans_number p').priceFormat({
    prefix: 'NT$',
    thousandsSeparator: ',',
    centsLimit: 0
});