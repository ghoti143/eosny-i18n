function EOSNY_I18N() {

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
    'Team': '球队',
    //h3
    'Always Adding Value': '始终增加价值',
    'Everything a Block Away': '一切皆有可能',
    'Subscribe to our mailing list': '订阅我们的邮件列表',
    'The EOS Resource Planner or ERP': 'EOS资源计划员或ERP',
    'Kevin Rose, Co-Founder, Head of Community': '社区负责人联合创始人Kevin Rose',
    'Rick Schlesinger, Co-Founder, Head of Strategy': 'Rick Schlesinger，联合创始人，战略主管',
    'Buddy Deck, Head of Block Production': '块生产主管Buddy Deck',
    'Mike Haggerty, Head of dApp Development': 'dApp Development负责人Mike Haggerty',
    'Joshua Hecht, Advisor': 'Joshua Hecht，顾问',
    'Liya Palagashvili, Ph.D., Advisor': 'Liya Palagashvili，博士，顾问',
  }  

  function lookupZH(index, element) {
    var en = $(element).text().trim();
    var zh = EOSNY_en_zh[en];
    $(element).data('orig', en);
    $(element).text(zh);
  }

  function restoreEN(index, element) {
    var en = $(element).data('orig');
    $(this).text(en);
  }

  function toZH() {
    $( "h1" ).each(lookupZH);
    $( "nav a" ).each(lookupZH);  
    $( "h3" ).each(lookupZH);
  }

  function toEN() {
    $( "h1" ).each(restoreEN);
    $( "nav a" ).each(restoreEN);
    $( "h3" ).each(restoreEN);
  }

  function addLangSelHtml() {
    var langSel = 
        '<div id="lang-selector">' +
          '<a id="lang-en" href="" class="active">EN</a>' + 
          '<a id="lang-zh" href="">ZH</a>' +
        '</div>';
    $('body').append(langSel);
  }
  
  function addLangSelEvts() {
    $('#lang-selector a').click(function() {
      if($(this).hasClass('active')) {
        return false;
      }

      $('#lang-selector a').removeClass('active');
      $(this).addClass('active');

      var id = $(this).attr('id');
      if(id === 'lang-en') {
        toEN();
      } else if(id === 'lang-zh') {
        toZH();
      }

      $(this).blur();
      return false;
    });
  }
  
  this.init = function() {
    addLangSelHtml();
    addLangSelEvts();
  } 
}

$( document ).ready(function() {
  var eosny_i18n = new EOSNY_I18N();
  eosny_i18n.init(); 
});
