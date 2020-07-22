jQuery(function($){

/*-----------------------------
　タブレットVIEWPORT
-----------------------------*/
var ua = navigator.userAgent;
if ((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
    // スマホのとき
    $('head').prepend('<meta name="viewport" content="width=414,user-scalable=1">');
}else{
    // PC・タブレットのとき
    $('head').prepend('<meta name="viewport" content="width=1200,user-scalable=1">');
}

/*-----------------------------
　ページ内リンク
-----------------------------*/

	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
  
/*-----------------------------
　ページトップ固定
-----------------------------*/

$(window).on("scroll", function() {

      if ($(this).scrollTop() > 100) {
          // ↑ スクロール位置が100よりも小さい場合に以下の処理をする
    $('.gotop').slideDown("fast");
          // ↑ (100より小さい時は)ページトップボタンをスライドダウン
      } else {
          $('.gotop').slideUp("fast");
          // ↑ それ以外の場合の場合はスライドアップする。
      }
      
  // フッター固定する

  var scrollHeight = $(document).height(); 
  // ドキュメントの高さ
  var scrollPosition = $(window).height() + $(window).scrollTop(); 
  //　ウィンドウの高さ+スクロールした高さ→　現在のトップからの位置
  var footHeight = $("footer").innerHeight();
  // フッターの高さ
      
  if ( scrollHeight - scrollPosition  <= footHeight ) {
  // 現在の下から位置が、フッターの高さの位置にはいったら
  //  ".gotop"のpositionをabsoluteに変更し、フッターの高さの位置にする		
    $("#pagetop").css({
      "position":"absolute"
      //"bottom": footHeight
    });
  } else {
  // それ以外の場合は元のcssスタイルを指定
    $("#pagetop").css({
      "position":"fixed",
      "bottom": "20px"
    });
  }
});

/*-----------------------------
　プルダウンメニュー
-----------------------------*/
$('nav ul li.pulldown ul').hide();
$('nav ul li.pulldown').hover(function() {
  $("ul:not(:animated)",this).slideDown();
},function() {
  $("ul",this).slideUp();
});
  
/*-----------------------------
　スマホメニュー
-----------------------------*/
  
  $('.sp-menu a').click(function() {
      $('#sp-menu-container').slideToggle(200);
     return false;
     });

/*-----------------------------
　スマホ電話リンク
-----------------------------*/
  
  if(!navigator.userAgent.match(/(iPhone|iPad|Android)/)){
        $("a.tel-link").each(function(){
          $(this).replaceWith("<span>" + $(this).html() + "</span>");
          });
      }

});
