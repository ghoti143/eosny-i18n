var EOSNY_en_zh = {
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
  'Our Advisors': '我们的顾问'
}  

function toZH() {
  $( "h1" ).each(function() {
    var en = $(this).text();
    var zh = EOSNY_en_zh[en];
    $(this).text(zh);
  });
}
