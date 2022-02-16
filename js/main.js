var myFullpage = new fullpage('#fullpage', {
    menu: '.gnb_list',
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
    sectionsColor: ['#000', 'transparent', 'transparent', '#7E8F7C','#95aaa3'],
    autoScrolling: true, //스크롤 하면 한 페이지씩 넘어감(스크롤바가 없음) 
    responsiveHeight: 350, //세로 높이가 350px 보다 작아졌을 때 오토스크롤링이 적용X 
    scrollBar: true,
    scrollingSpeed: 700,
    fitToSectionDelay: 500,
    verticalCentered: true, //글씨가 중간에 있도록 하는
    //navigation: true - 화면 오른쪽에 점으로 된 네비게이션 생성
    //scrollOverflow: true, - 정상스크롤 되게(old), scrolloverflow.min.js 연결 필요, fullpage.js 보다 앞에 오게 */
    normalScrollElements: '#s2', //오토스크롤이 아닌 정상스크롤이 적용됨
});

/*
document.querySelector('.scroll_guide').addEventListener('click', function(e){
    // e.preventDefault(); : a 태그를 썼다면 필요함, 마지막 화면에서 첫화면으로 돌아가고 싶다면 생략
    fullpage_api.moveSectionDown();
});
*/

document.querySelector('.nextS').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveSectionDown();
});

document.querySelector('.prevS').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveSectionUp();
});

$('.totalMitem').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    } else {
        $('.totalMitem').removeClass('active');
        $(this).addClass('active');
    }
});

$('.btn_total').click(function(){
    $('.total_menuZ').addClass('active')
});

$('.btn_totalClose').click(function(){
    $('.total_menuZ').removeClass('active')
});

//var myScroll =new IScroll('.total_menu');
myScroll = new IScroll('.total_menu', {
    mouseWheel: true,
    scrollbars: true
});

new WOW().init();

//구글 맵 설정
let map;

function initMap() {
    const myLatLng = {
        lat: 37.50013823967703, 
        lng: 127.0289640142032
    } //위도(latitude), 경도(longitude) 변수화

    map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 18, //확대 정도 : 1~20
    }); //구글 API map에 들어있는 Map 함수 실행
    
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
    }); //마커표시
}