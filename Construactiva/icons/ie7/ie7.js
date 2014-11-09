/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'construactiva\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-uniE600': '&#xe600;',
		'icon-uniE601': '&#xe601;',
		'icon-bookmark': '&#xf07b;',
		'icon-briefcase': '&#xf0d3;',
		'icon-calendar': '&#xf068;',
		'icon-clippy': '&#xf035;',
		'icon-cloud-download': '&#xf00b;',
		'icon-cloud-upload': '&#xf00c;',
		'icon-file-media': '&#xf012;',
		'icon-file-pdf': '&#xf014;',
		'icon-file-zip': '&#xf013;',
		'icon-gear': '&#xf02f;',
		'icon-git-branch': '&#xf020;',
		'icon-graph': '&#xf043;',
		'icon-heart': '&#x2665;',
		'icon-history': '&#xf07e;',
		'icon-location': '&#xf060;',
		'icon-mail': '&#xf03b;',
		'icon-mail-read': '&#xf03c;',
		'icon-mention': '&#xf0be;',
		'icon-package': '&#xf0c4;',
		'icon-paintcan': '&#xf0d1;',
		'icon-rocket': '&#xf033;',
		'icon-three-bars': '&#xf05e;',
		'icon-x': '&#xf081;',
		'icon-zap': '&#x26a1;',
		'icon-buildings': '&#xe602;',
		'icon-construactiva': '&#xe603;',
		'icon-two_floor_house': '&#xe604;',
		'icon-calendar2': '&#xe605;',
		'icon-calendar3': '&#xe606;',
		'icon-file': '&#xe607;',
		'icon-file2': '&#xe608;',
		'icon-file3': '&#xe609;',
		'icon-files': '&#xe60a;',
		'icon-checkmark': '&#xe60b;',
		'icon-cancel': '&#xe60c;',
		'icon-plus': '&#xe60d;',
		'icon-minus': '&#xe60e;',
		'icon-lamp': '&#xe60f;',
		'icon-box': '&#xe610;',
		'icon-ruler': '&#xe611;',
		'icon-ruler2': '&#xe612;',
		'icon-attachment': '&#xe613;',
		'icon-pencil': '&#xe614;',
		'icon-profile': '&#xe615;',
		'icon-dollar': '&#xe616;',
		'icon-pig': '&#xe617;',
		'icon-bookmark2': '&#xe618;',
		'icon-envelope': '&#xe619;',
		'icon-envelope2': '&#xe61a;',
		'icon-paperplane': '&#xe61b;',
		'icon-atom': '&#xe61c;',
		'icon-zip': '&#xe61d;',
		'icon-zip2': '&#xe61e;',
		'icon-ruler3': '&#xe61f;',
		'icon-phone': '&#xe620;',
		'icon-mobile': '&#xe621;',
		'icon-directions': '&#xe622;',
		'icon-paperplane2': '&#xe623;',
		'icon-pencil2': '&#xe624;',
		'icon-user': '&#xe625;',
		'icon-users': '&#xe626;',
		'icon-user-add': '&#xe627;',
		'icon-location2': '&#xe628;',
		'icon-map': '&#xe629;',
		'icon-compass': '&#xe62a;',
		'icon-target': '&#xe62b;',
		'icon-share': '&#xe62c;',
		'icon-star': '&#xe62d;',
		'icon-star2': '&#xe62e;',
		'icon-cog': '&#xe62f;',
		'icon-tools': '&#xe630;',
		'icon-camera': '&#xe631;',
		'icon-book': '&#xe632;',
		'icon-newspaper': '&#xe633;',
		'icon-eye': '&#xe634;',
		'icon-clock': '&#xe635;',
		'icon-calendar4': '&#xe636;',
		'icon-bolt': '&#xe637;',
		'icon-briefcase2': '&#xe638;',
		'icon-clipboard': '&#xe639;',
		'icon-logout': '&#xe63a;',
		'icon-login': '&#xe63b;',
		'icon-pictures': '&#xe63c;',
		'icon-folder': '&#xe63d;',
		'icon-archive': '&#xe63e;',
		'icon-trash': '&#xe63f;',
		'icon-arrow-left': '&#xe640;',
		'icon-uniE641': '&#xe641;',
		'icon-twitter': '&#xe642;',
		'icon-facebook': '&#xe643;',
		'icon-googleplus': '&#xe644;',
		'icon-pinterest': '&#xe645;',
		'icon-tumblr': '&#xe646;',
		'icon-linkedin': '&#xe647;',
		'icon-skype': '&#xe648;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
