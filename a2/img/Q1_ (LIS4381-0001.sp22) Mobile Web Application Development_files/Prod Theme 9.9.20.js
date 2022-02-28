////////////////////////////////////////////////////
// DESIGN TOOLS CONFIG                            //
////////////////////////////////////////////////////
// Copyright (C) 2016  Utah State University
var DT_variables = {
        iframeID: '',
        // Path to the hosted USU Design Tools
        path: 'https://designtools.ciditools.com/',
        templateCourse: '1148',
	// OPTIONAL: Relocate Ally alternative formats dropdown and hide heading
	overrideAllyHeadings: true,
	// OPTIONAL: Make assignment rubrics sortable
        sortableRubrics: true,
        // OPTIONAL: Button will be hidden from view until launched using shortcut keys
        hideButton: false,
        // OPTIONAL: Limit tools loading by users role
        limitByRole: false, // set to true to limit to roles in the roleArray
        // adjust roles as needed
        roleArray: [
            'student',
            'teacher',
            'admin'
        ],
        // OPTIONAL: Limit tools to an array of Canvas user IDs
        limitByUser: false, // Change to true to limit by user
        // add users to array (Canvas user ID not SIS user ID)
        userArray: [
            '1234',
            '987654'
        
        ]
    };

// Run the necessary code when a page loads
$(document).ready(function () {
    'use strict';
    // This runs code that looks at each page and determines what controls to create
    $.getScript(DT_variables.path + 'js/master_controls.js', function () {
        console.log('master_controls.js loaded');
    });
});
////////////////////////////////////////////////////
// END DESIGN TOOLS CONFIG                        //
////////////////////////////////////////////////////



/* CUSTOM FSU JAVASCRIPT - 3/28/17 - jhernandez */

/*EvaluationKIT START*/var evalkit_jshosted = document.createElement('script');evalkit_jshosted.setAttribute('type', 'text/javascript');evalkit_jshosted.setAttribute('src', 'https://fsu.evaluationkit.com/canvas/js');document.getElementsByTagName('head')[0].appendChild(evalkit_jshosted);/*EvaluationKIT END*/

var $wrapthese = $('#footer').children();
$wrapthese.wrapAll('<div class="wraptheselonelies"/>');


(function(a,d,p){a.fn.backstretch=function(c,b){(c===p||0===c.length)&&a.error("No images were supplied for Backstretch");0===a(d).scrollTop()&&d.scrollTo(0,0);return this.each(function(){var d=a(this),g=d.data("backstretch");if(g){if("string"==typeof c&&"function"==typeof g[c]){g[c](b);return}b=a.extend(g.options,b);g.destroy(!0)}g=new q(this,c,b);d.data("backstretch",g)})};a.backstretch=function(c,b){return a("body").backstretch(c,b).data("backstretch")};a.expr[":"].backstretch=function(c){return a(c).data("backstretch")!==p};a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5E3,fade:0};var r={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},s={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},q=function(c,b,e){this.options=a.extend({},a.fn.backstretch.defaults,e||{});this.images=a.isArray(b)?b:[b];a.each(this.images,function(){a("<img />")[0].src=this});this.isBody=c===document.body;this.$container=a(c);this.$root=this.isBody?l?a(d):a(document):this.$container;c=this.$container.children(".backstretch").first();this.$wrap=c.length?c:a('<div class="backstretch"></div>').css(r).appendTo(this.$container);this.isBody||(c=this.$container.css("position"),b=this.$container.css("zIndex"),this.$container.css({position:"static"===c?"relative":c,zIndex:"auto"===b?0:b,background:"none"}),this.$wrap.css({zIndex:-999998}));this.$wrap.css({position:this.isBody&&l?"fixed":"absolute"});this.index=0;this.show(this.index);a(d).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===d.pageYOffset&&(d.scrollTo(0,1),this.resize())},this))};q.prototype={resize:function(){try{var a={left:0,top:0},b=this.isBody?this.$root.width():this.$root.innerWidth(),e=b,g=this.isBody?d.innerHeight?d.innerHeight:this.$root.height():this.$root.innerHeight(),j=e/this.$img.data("ratio"),f;j>=g?(f=(j-g)/2,this.options.centeredY&&(a.top="-"+f+"px")):(j=g,e=j*this.$img.data("ratio"),f=(e-b)/2,this.options.centeredX&&(a.left="-"+f+"px"));this.$wrap.css({width:b,height:g}).find("img:not(.deleteable)").css({width:e,height:j}).css(a)}catch(h){}return this},show:function(c){if(!(Math.abs(c)>this.images.length-1)){var b=this,e=b.$wrap.find("img").addClass("deleteable"),d={relatedTarget:b.$container[0]};b.$container.trigger(a.Event("backstretch.before",d),[b,c]);this.index=c;clearInterval(b.interval);b.$img=a("<img />").css(s).bind("load",function(f){var h=this.width||a(f.target).width();f=this.height||a(f.target).height();a(this).data("ratio",h/f);a(this).fadeIn(b.options.speed||b.options.fade,function(){e.remove();b.paused||b.cycle();a(["after","show"]).each(function(){b.$container.trigger(a.Event("backstretch."+this,d),[b,c])})});b.resize()}).appendTo(b.$wrap);b.$img.attr("src",b.images[c]);return b}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){this.paused=!0;return this},resume:function(){this.paused=!1;this.next();return this},cycle:function(){1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(a.proxy(function(){this.paused||this.next()},this),this.options.duration));return this},destroy:function(c){a(d).off("resize.backstretch orientationchange.backstretch");clearInterval(this.interval);c||this.$wrap.remove();this.$container.removeData("backstretch")}};var l,f=navigator.userAgent,m=navigator.platform,e=f.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],h=f.match(/Fennec\/([0-9]+)/),h=!!h&&h[1],n=f.match(/Opera Mobi\/([0-9]+)/),t=!!n&&n[1],k=f.match(/MSIE ([0-9]+)/),k=!!k&&k[1];l=!((-1<m.indexOf("iPhone")||-1<m.indexOf("iPad")||-1<m.indexOf("iPod"))&&e&&534>e||d.operamini&&"[object OperaMini]"==={}.toString.call(d.operamini)||n&&7458>t||-1<f.indexOf("Android")&&e&&533>e||h&&6>h||"palmGetResource"in d&&e&&534>e||-1<f.indexOf("MeeGo")&&-1<f.indexOf("NokiaBrowser/8.5.0")||k&&6>=k)})(jQuery,window);

$("body.ic-Login-Body").backstretch(
  [
      "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/3.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/4.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/5.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/9.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/11.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/13.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/15.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/16.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/17.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/18.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/19.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/20.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/21.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/22.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/23.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/24.jpg"
    , "https://dl.dropboxusercontent.com/u/8569338/CanvasThemes/FSU/25.jpg"
  ], {duration: 3000, fade: 750});

////////////////////////////////////////////////////
/////////// FSU-INITIATED CUSTOMIZATIONS ///////////
////////////////////////////////////////////////////

// course settings customizations - installed by scott on 8.22.2017
var leng = ENV['current_user_roles'].length - 1
var role = ENV['current_user_roles'][leng];

// add more roles to hidding functions -- Cissy 9.6.2018
if ((window.location.href.indexOf("details") > 0 || window.location.href.indexOf("settings") > 0) && 
   (role == "teacher" || role == "TA" || role == "designer" || role == "observer")) {
        $("a:contains('Reset Course Content')").hide();
        $("a:contains('Conclude this Course')").hide();
		$("a:contains('Delete this Course')").hide();
        $("#course_visibility").hide();
        $("#add_section_form").hide();
};

////////////////////////////////////////////////////
// Make pages link to go page list not wiki front page
if ($('.section .pages').length > 0) {
    var pagesHref = $('.section .pages').attr('href'),
        newHref;
    if (pagesHref.indexOf("wiki") > -1) {
        newHref = pagesHref.replace('wiki', 'pages');
        $('.section .pages').attr('href', newHref);
    }
}
////////////////////////////////////////////////////



// Dashboard Card Sorter from https://github.com/jamesjonesmath/canvancement
(function() {
  if (window.location.pathname !== '/') {
    return;
  }
  var scope = '/dashboard/order';
  var namespace = 'canvancement';
  var cardOrder;
  var hasLoaded = false;

  try {
    loadCardOrder();
    checkCards();
  } catch (e) {
    console.log(e);
  }

  function makeSortable() {
    hasLoaded = true;
    if (typeof cardOrder !== 'undefined' && cardOrder.length > 0) {
      sortCards();
    }
    var box = document.querySelector('div#DashboardCard_Container > div.ic-DashboardCard__box');
    var cards = box.childNodes;
    if (cards.length < 2) {
      return;
    }
    $('div.ic-DashboardCard__box').sortable({
      'containment' : 'parent',
      'items' : '> div',
      'update' : saveCardOrder
    });
    return;
  }

  function checkCards() {
    var el = document.querySelector('div#DashboardCard_Container > div.ic-DashboardCard__box a.ic-DashboardCard__link');
    if (el) {
      makeSortable();
    } else {
      var src = document.querySelector('div#DashboardCard_Container');
      var observer = new MutationObserver(function(mutations) {
        observer.disconnect();
        makeSortable();
      });
      var config = {
        childList : true,
      };
      observer.observe(src, config);
    }
  }

  function getCardOrder() {
    var order = [];
    var links = document.querySelectorAll('div#DashboardCard_Container > div.ic-DashboardCard__box a.ic-DashboardCard__link');
    if (links.length === 0) {
      return;
    }
    var courseRegex = new RegExp('/courses/([0-9]+)$');
    for (var i = 0; i < links.length; i++) {
      var matches = courseRegex.exec(links[i].href);
      if (matches) {
        order.push(matches[1]);
      }
    }
    return order;
  }

  function sortCards() {
    var box = document.querySelector('div#DashboardCard_Container > div.ic-DashboardCard__box');
    var cards = box.childNodes;
    if (cards.length < 2) {
      deleteCardOrder();
      return;
    }
    var order = getCardOrder();
    // New cards
    var pos = 0;
    var needsUpdated = false;
    var j;
    var k;
    var id;
    var el;
    for (k = 0; k < order.length; k++) {
      id = cardOrder[k];
      j = cardOrder.indexOf(id);
      if (j === -1) {
        el = cards[k];
        box.insertBefore(el, cards[pos]);
        order.splice(k, 1);
        order.splice(pos, 0, id);
        pos++;
      }
    }
    // Existing cards
    for (j = 0; j < cardOrder.length; j++) {
      id = cardOrder[j];
      k = order.indexOf(id);
      if (k === -1) {
        needsUpdated = true;
        continue;
      }
      if (k === pos) {
        pos++;
        continue;
      }
      el = cards[k];
      box.insertBefore(el, cards[pos]);
      order.splice(k, 1);
      order.splice(pos, 0, id);
      pos++;
    }
    if (needsUpdated) {
      saveCardOrder();
    }
    return;
  }

  function saveCardOrder(event, ui) {
    var currentOrder = getCardOrder();
    var url = '/api/v1/users/self/custom_data' + scope;
    var parms = {
      'ns' : namespace,
      'data' : currentOrder.join(',')
    };
    $.ajax({
      'url' : url,
      'type' : 'PUT',
      'data' : parms
    });
  }

  function loadCardOrder() {
    var url = '/api/v1/users/self/custom_data' + scope;
    var parms = {
      'ns' : namespace
    };
    $.getJSON(url, parms, function(data) {
      cardOrder = data.data.split(',');
      if (hasLoaded) {
        sortCards();
      }
    });
    return;
  }

  function deleteCardOrder() {
    var url = '/api/v1/users/self/custom_data' + scope;
    var parms = {
      'ns' : namespace
    };
    $.ajax({
      'url' : url,
      'type' : 'DELETE',
      'data' : parms
    });
    cardOrder = undefined;
    return;
  }

})();

// Feedback Box - Activity Report Remove Code
$(document).ready(function(){
  $('tr.access.context_external_tool:contains(Anonymous Feedback)').remove();
});
////////////////////////////////////////////////////

/* Blackboard Ally Configuration - 8/22/18 - bgiraudy */ 

window.ALLY_CFG = {
    'baseUrl': 'https://prod.ally.ac',
    'clientId': 2711
};
$.getScript(ALLY_CFG.baseUrl + '/integration/canvas/ally.js');