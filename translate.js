var EOSNY_en_zh = {
  //h1
  'EOS New York': 'EOS纽约',
  'About Us': '关于我们',
  'Our Values': '我们的价值',
  'Events': '活动',
  'Vote For Us': '为美国投票',
  'Connect With Us': '联系我们',
  'Our Roadmap': '我们的路线图',
  'Block Producer Specs': '阻止制片人规格',
  'Our Initiatives': '我们的举措',
  'Our Team': '我们的队伍',
  'Our Advisors': '我们的顾问',
  //menu
  'Home': '家',
  'About': '关于',
  'Events': '活动',
  'Vote': '投票',
  'Connect': '连',
  'Plan': '计划',
  'Initiatives': '倡议',
  'Team': '球队'
}  

function toZH() {
  $( "h1" ).each(function() {
    var en = $(this).text().trim();
    var zh = EOSNY_en_zh[en];
    $(this).data('orig', en);
    $(this).text(zh);
  });
  
  $( "nav a" ).each(function() {
    var en = $(this).text().trim();
    var zh = EOSNY_en_zh[en];
    $(this).text(zh);
  });
}

function toEN() {
  $( "h1" ).each(function() {
    var en = $(this).data('orig');
    $(this).text(en);
  });
  
  $( "nav a" ).each(function() {
    var en = $(this).data('orig');
    $(this).text(en);
  });
}

$( document ).ready(function() {
  var langSel = 
      '<div id="lang-selector">' +
        '<a id="lang-en" href="" class="active">EN</a>' + 
        '<a id="lang-zh" href="">ZH</a>' +
      '</div>';
  $('body').append(langSel);
  
  $('#lang-selector a').click(function() {
    $('#lang-selector a').removeClass('active');
    $(this).addClass('active');
    
    var id = $(this).id();
    if(id === 'lang-en') {
      toEN();
    } else if(id === 'lang-zh') {
      toZH();
    }

    return false;
  });
});
