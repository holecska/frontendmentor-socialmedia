var colorChange = (function() {

  var DOMstrings = {
    checkBox: '.myCheckbox',

    bg: 'body',

    bgTopHeader: '.header',
    bgTopFooter: '.footer',
    bgTopFooterLink: '.footer__link',

    bgCardBig: '.big-card',
    bgCardSmall: '.small-card',

    textGreyHeaderFollowers: '.header-container__followers',
    textGreyHeaderToggle: '.header-container__toggle',
    textGreyUsername: '.username',
    textGreyBCfollow: 'big-card__followers',
    textGreySCheading: '.small-container__heading',
    textGreySocial: '.socialmedia-small__activity',
    textGreyFooter: '.footer',

    textDarkBlueHTitle: '.header-container__title',
    textDarkBlueBCnum: '.big-card__num',
    textDarkBlueSCstatnum: '.small-card__statistic--num'
  };

  var nodeListForEach = function(list, style, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], style);
    }
  };

  var bg, bgTop, bgCard, textGrey, textDark;

  bg = document.querySelectorAll(DOMstrings.bg);
  bgTop = document.querySelectorAll(
    DOMstrings.bgTopHeader + ',' +
    DOMstrings.bgTopFooter + ',' +
    DOMstrings.bgTopFooterLink
  );

  bgCard = document.querySelectorAll(
    DOMstrings.bgCardBig + ',' +
    DOMstrings.bgCardSmall
  );

  textGrey = document.querySelectorAll(
    DOMstrings.textGreyHeaderToggle + ',' +
    DOMstrings.textGreyHeaderFollowers + ',' +
    DOMstrings.textGreyUsername + ',' +
    DOMstrings.textGreyBCfollow + ',' +
    DOMstrings.textGreySocial + ',' +
    DOMstrings.textGreyFooter
  );

  textDark = document.querySelectorAll(
    DOMstrings.textDarkBlueBCnum + ',' +
    DOMstrings.textDarkBlueHTitle + ',' +
    DOMstrings.textGreySCheading + ',' +
    DOMstrings.textDarkBlueSCstatnum
  );

  var obj = {
    bg: bg,
    bgTop: bgTop,
    bgCard: bgCard,
    textGrey: textGrey,
    textDark: textDark
  };

  return {
    getDOMstrings: function() {
      return DOMstrings;
    },
    changeColor: function() {
      var dataCheck = obj;
      var style = '';
      var element;

      for (var property in dataCheck) {

        element = dataCheck[property];
        typ = property;

        switch (typ) {
          case 'bg':
            style = 'bg-dark';
            break;
          case 'bgTop':
            style = 'bg-top-dark';
            break;
          case 'bgCard':
            style = 'bg-card-dark';
            break;
          case 'textGrey':
            style = 'text-grey-dark';
            break;
          case 'textDark':
            style = 'text-darkblue-dark';
            break;

          default:
            alert('Something wrong!');
        }

        nodeListForEach(element, style, function(cur, style) {
          cur.classList.toggle(style);
        });
      }
    }
  };

})();

var controller = (function(UICtrl) {

  var setupEventListener = function() {
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.checkBox).addEventListener('change', changingColor);
  };

  var changingColor = function() {

    UICtrl.changeColor();
    var toggle = document.querySelector('.myCheckbox');
    if (toggle.checked) {
      console.log('Checked');
      document.querySelector('.toggle-mode').textContent = "Light Version";
    } else {
      document.querySelector('.toggle-mode').textContent = "Dark Version";
    }
  };

  return {
    init: function() {
      console.log('Application has started');
      setupEventListener();
    }
  };

})(colorChange);

controller.init();
