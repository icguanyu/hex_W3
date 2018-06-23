//訂單狀態選單
$(document).on('click', () => {
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

//新增產品
$('.edit_section').on('click', function(e) {
    e.stopPropagation();
    $('.mask').addClass('mask_on');
})
$('.close').on('click', function() {
    $('.mask').removeClass('mask_on')
})
$('.addnewproduct').on('click', function(e) {
    e.stopPropagation()
})
$(document).on('click', function() {
    $('.mask').removeClass('mask_on')
})

//新增商品規格
$('.add_speci').on('click', function() {
    $('.speci_area').append($('.specification').eq(0).clone())
})