{

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


    //訂單狀態選單
    $(document).on('click', function() {
        $('.select_status').removeClass('show_status_list')
    })
    $('.status').on('click', function(e) {
        e.stopPropagation()
        $('.select_status').removeClass('show_status_list')
        $(this).children('.select_status').toggleClass('show_status_list')
    })

    $('.select_status span').on('click', function(e) {
        e.stopPropagation()
        var nowstatus = $(this).index()
        $(this).parent().removeClass('show_status_list')
        $(this).parent().siblings('div').children('span').text($(this).text())
        $(this).parent().siblings().removeClass().addClass(`s_${nowstatus}`)
    })
}