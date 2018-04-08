'use strict';

var app = {

	x: 0,

	y: 0,

	mobile: false,

	council: null,

	sample: null,

	group: null,

	type: null,

	previous: null,

	tag: 1,

	initialize: function initialize() {

		app.mobile = app.mobile_check();

		$('#nav-wrap').prepend('<div id="menu-icon"></div>');

		$("#menu-icon").on("click", function () {

			$("#nav").slideToggle();

			$(this).toggleClass("active");
		});

		$(".close").on("click", function () {

			app.x = 0;

			$('#council').css('display', 'none');

			$('#table').css('display', 'block');

			window.scrollTo(0, 0);
		});

		app.sample = councils;

		// Load data for the first tab
		app.tab_1();

		// Load the appropriate data when you click on each tab
		$(".tabs").click(function () {

			$("#tabs li").removeClass('selected');

			$(this).addClass('selected');

			$(this).data("tab") == 1 ? app.tab_1() : $(this).data("tab") == 2 ? app.tab_2() : $(this).data("tab") == 3 ? app.tab_3() : $(this).data("tab") == 4 ? app.tab_4() : $(this).data("tab") == 5 ? app.tab_5() : $(this).data("tab") == 6 ? app.tab_6() : $(this).data("tab") == 7 ? app.tab_7() : console.log("Other");
		});

		$(".pop").click(function () {

			app.sampler($(this).data("pop"));
		});
	},

	sampler: function sampler(type) {

		if (type === 'All') {
			app.sample = councils;
		} else {

			app.sample = councils.filter(function (item) {
				return item.type.indexOf(type) != -1;
			});
		}

		app.tag == 1 ? app.tab_1() : app.tag == 2 ? app.tab_2() : app.tag == 3 ? app.tab_3() : app.tag == 4 ? app.tab_4() : app.tag == 5 ? app.tab_5() : app.tag == 6 ? app.tab_6() : app.tag == 7 ? app.tab_7() : console.log("Other");
	},

	tab_1: function tab_1() {

		app.tag = 1;

		var html = '<table id="tab1" class="councilTable">';
		html += '<thead><tr>';
		html += '<th class="hidden">id</th>';
		html += '<th>Type<img src="images/info.png"></th>';
		html += '<th>Council<img src="images/info.png"></th>';
		html += '<th>Population<img src="images/info.png"></th>';
		html += '<th>Area (km&sup2)<img src="images/info.png"></th>';
		html += '<th>Ratepayer Count<img src="images/info.png"></th>';
		html += '<th>Average residential rates<img src="images/info.png"></th>';
		html += '</tr><tr>';
		html += '<th class="hidden">id</th>';
		html += '<th></th>';
		html += '<th></th>';
		html += '<th><img class="tips" data-content="Total population count" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Geographical area in km&sup2" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Total number of residential ratepayers" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Average residential rates" src="images/infoid.png"></th>';
		html += '</tr></thead><tbody>';

		app.sample.forEach(function (value, index) {

			html += '<tr data-id="' + value.a + '"  data-type="' + value.type + '">';
			html += '<td class="hidden">' + value.a + '</td>';
			html += '<td data-sort-value="' + value.type + '"><div class="key' + value.type + '"></div></td>';
			html += '<td data-sort-value="' + value.b + '">' + value.b + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.c.replace(/[^\d\.\-eE+]/g, "")) + '">' + value.c + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.c.replace(/[^\d\.\-eE+]/g, "")) + '">' + value.a3 + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.a4.replace(/[^\d\.\-eE+]/g, "")) + '">' + value.a4 + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.e.replace(/[^\d\.\-eE+]/g, "")) + '">' + (value.e ? '$' : 'refused') + '' + value.e + '</td>';
			html += '</tr>';
		});

		html += '</tbody></table>';

		app.compile(1, html);
	},

	tab_2: function tab_2() {

		app.tag = 2;

		var html = '<table id="tab2" class="councilTable">';
		html += '<thead>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th>Type<img src="images/info.png"></th>';
		html += '<th>Council<img src="images/info.png"></th>';
		html += '<th>Staff<img src="images/info.png"></th>';
		html += '<th>Average councillor remuneration<img src="images/info.png"></th>';
		//html += '<th>Performance-Related Dismissals<img src="images/info.png"></th>';
		html += '<th>Mayoral remuneration<img src="images/info.png"></th>';
		html += '<th>CEO remuneration<img src="images/info.png"></th>';
		html += '<th>Staff earning over $100k<img src="images/info.png"></th>';
		html += '</tr>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th></th>';
		html += '<th></th>';
		html += '<th><img class="tips" data-content="Total number of staff (full-time equivalent) " src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Average councillor remuneration" src="images/infoid.png"></th>';
		//html += '<th><img class="tips" data-content="Performance-Related Dismissals" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Mayoral remuneration" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="CEO remuneration" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Staff earning over $100k" src="images/infoid.png"></th>';
		html += '</tr></thead><tbody>';

		app.sample.forEach(function (value, index) {

			html += '<tr data-id="' + value.a + '"  data-type="' + value.type + '">';
			html += '<td class="hidden">' + value.a + '</td>';
			html += '<td data-sort-value="' + value.type + '"><div class="key' + value.type + '"></div></td>';
			html += '<td data-sort-value="' + value.b + '">' + value.b + '</td>';
			html += '<td data-sort-value="' + value.f + '">' + value.f + '</td>';
			html += '<td data-sort-value="' + value.i + '">' + value.i + '</td>';
			//html += '<td data-sort-value="' + value.h  + '">' + value.h + '</td>';
			html += '<td data-sort-value="' + value.g + '">' + value.g + '</td>';
			html += '<td data-sort-value="' + value.a2 + '">' + value.a2 + '</td>';
			html += '<td data-sort-value="' + value.a1 + '">' + value.a1 + '</td>';
			html += '</tr>';
		});

		html += '</tbody></table>';

		app.compile(2, html);
	},

	tab_3: function tab_3() {

		app.tag = 3;

		var html = '<table id="tab3" class="councilTable">';
		html += '<thead>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th>Type<img src="images/info.png"></th>';
		html += '<th>Council<img src="images/info.png"></th>';
		html += '<th>Personnel costs<img src="images/info.png"></th>';
		html += '<th>Financing costs<img src="images/info.png"></th>';
		html += '<th>Total operating expenses<img src="images/info.png"></th>';
		html += '<th>Advertising spending<img src="images/info.png"></th>';
		html += '</tr>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th></th>';
		html += '<th></th>';
		html += '<th>(per ratepayer)</th>';
		html += '<th>(per ratepayer)</th>';
		html += '<th>(per ratepayer)</th>';
		html += '<th>(total)</th>';
		html += '</tr>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th></th>';
		html += '<th></th>';
		html += '<th><img class="tips" data-content="Personnel costs" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Financing costs" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Total operating expenses" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Advertising spending" src="images/infoid.png"></th>';
		html += '</tr></thead><tbody>';

		app.sample.forEach(function (value, index) {

			html += '<tr data-id="' + value.a + '"  data-type="' + value.type + '">';
			html += '<td class="hidden">' + value.a + '</td>';
			html += '<td data-sort-value="' + value.type + '"><div class="key' + value.type + '"></div></td>';
			html += '<td data-sort-value="' + value.b + '">' + value.b + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.j.replace(/[^\d\.\-eE+]/g, "")) + '">' + (value.j ? '$' : 'refused') + '' + value.j + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.k.replace(/[^\d\.\-eE+]/g, "")) + '">' + (value.k ? '$' : 'refused') + '' + value.k + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.l.replace(/[^\d\.\-eE+]/g, "")) + '">' + (value.l ? '$' : 'refused') + '' + value.l + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.m.replace(/[^\d\.\-eE+]/g, "")) + '">' + (value.m ? '$' : 'refused') + '' + value.m + '</td>';
			html += '</tr>';
		});

		html += '</tbody></table>';

		app.compile(3, html);
	},

	tab_4: function tab_4() {

		app.tag = 4;

		var html = '<table id="tab4" class="councilTable">';
		html += '<thead>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th>Type<img src="images/info.png"></th>';
		html += '<th>Council<img src="images/info.png"></th>';
		html += '<th>Revenue<img src="images/info.png"></th>';
		html += '<th>Personnel costs<img src="images/info.png"></th>';
		html += '<th>Financing costs<img src="images/info.png"></th>';
		html += '<th>Total operating expenses<img src="images/info.png"></th>';
		html += '</tr>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th></th>';
		html += '<th></th>';
		html += '<th>(per ratepayer)</th>';
		html += '<th>(per ratepayer)</th>';
		html += '<th>(per ratepayer)</th>';
		html += '<th>(per ratepayer)</th>';
		html += '</tr>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th></th>';
		html += '<th></th>';
		html += '<th><img class="tips" data-content="Revenue per ratepayer" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Personnel costs" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Financing costs" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Total operating expenses" src="images/infoid.png"></th>';
		html += '</tr></thead><tbody>';

		app.sample.forEach(function (value, index) {

			html += '<tr data-id="' + value.a + '"  data-type="' + value.type + '">';
			html += '<td class="hidden">' + value.a + '</td>';
			html += '<td data-sort-value="' + value.type + '"><div class="key' + value.type + '"></div></td>';
			html += '<td data-sort-value="' + value.b + '">' + value.b + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.n.replace(/[^\d\.\-eE+]/g, "")) + '">' + (value.n ? '$' : 'refused') + '' + value.n + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.o.replace(/[^\d\.\-eE+]/g, "")) + '">' + (value.o ? '$' : 'refused') + '' + value.o + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.p.replace(/[^\d\.\-eE+]/g, "")) + '">' + (value.p ? '$' : 'refused') + '' + value.p + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.q.replace(/[^\d\.\-eE+]/g, "")) + '">' + (value.q ? '$' : 'refused') + '' + value.q + '</td>';
			html += '</tr>';
		});

		html += '</tbody></table>';

		app.compile(4, html);
	},

	tab_5: function tab_5() {

		app.tag = 5;

		var html = '<table id="tab5" class="councilTable">';
		html += '<thead>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th>Type<img src="images/info.png"></th>';
		html += '<th>Council<img src="images/info.png"></th>';
		html += '<th>Total assets<img src="images/info.png"></th>';
		html += '<th>Total liabilities<img src="images/info.png"></th>';
		html += '<th>Total equity<img src="images/info.png"></th>';
		//html += '<!--th>Group Liabilities Trend<img src="images/info.png"></th-->
		html += '</tr>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th></th>';
		html += '<th></th>';
		html += '<th>(per ratepayer)</th>';
		html += '<th>(per ratepayer)</th>';
		html += '<th>(per ratepayer)</th>';
		//html += '<!--th>(i.e. debt)</th-->';
		html += '</tr>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th></th>';
		html += '<th></th>';
		html += '<th><img class="tips" data-content="Total assets" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Total liabilities" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Total equity" src="images/infoid.png"></th>';
		//html += '<!--th><img class="tips" data-content="Is debt increasing or decreasing?" src="images/infoid.png"></th-->';
		html += '</tr></thead><tbody>';

		app.sample.forEach(function (value, index) {

			html += '<tr data-id="' + value.a + '"  data-type="' + value.type + '">';
			html += '<td class="hidden">' + value.a + '</td>';
			html += '<td data-sort-value="' + value.type + '"><div class="key' + value.type + '"></div></td>';
			html += '<td data-sort-value="' + value.b + '">' + value.b + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.r.replace(/[^\d\.\-eE+]/g, "")) + '">' + (value.n ? '$' : 'refused') + '' + value.r + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.s.replace(/[^\d\.\-eE+]/g, "")) + '">' + (value.n ? '$' : 'refused') + '' + value.s + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.t.replace(/[^\d\.\-eE+]/g, "")) + '">' + (value.n ? '$' : 'refused') + '' + value.t + '</td>';
			//html += '<td data-sort-value="' + value.Direction + '"><img src="' + value.Direction + '"></td>';
			html += '</tr>';
		});

		html += '</tbody></table>';

		app.compile(5, html);
	},

	tab_6: function tab_6() {

		app.tag = 6;

		var html = '<table id="tab6" class="councilTable">';
		html += '<thead>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th>Type<img src="images/info.png"></th>';
		html += '<th>Council<img src="images/info.png"></th>';
		html += '<th>Number of members</th>';
		html += '<th>Independent members</th>';
		html += '<th>Lawyers</th>';
		html += '<th>Accountants</th>';
		html += '<th>Independent chair</th>';
		html += '</tr>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th></th>';
		html += '<th></th>';
		html += '<th><img class="tips" data-content="Number of members on the Audit and Risk Committee (or equivalent)" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Independent members of Audit and Risk Committee (or equivalent)" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Lawyers on the Audit and Risk Committee (or equivalent)" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Accountants on the Audit and Risk Committee (or equivalent)" src="images/infoid.png"></th>';
		html += '<th><img class="tips" data-content="Independent chair of the Audit and Risk Committee (or equivalent)" src="images/infoid.png"></th>';
		html += '</tr></thead><tbody>';

		app.sample.forEach(function (value, index) {

			html += '<tr data-id="' + value.a + '"  data-type="' + value.type + '">';
			html += '<td class="hidden">' + value.a + '</td>';
			html += '<td data-sort-value="' + value.type + '"><div class="key' + value.type + '"></div></td>';
			html += '<td data-sort-value="' + value.b + '">' + value.b + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.u.replace(/[^\d\.\-eE+]/g, "")) + '">' + value.u + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.v.replace(/[^\d\.\-eE+]/g, "")) + '">' + value.v + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.w.replace(/[^\d\.\-eE+]/g, "")) + '">' + value.w + '</td>';
			html += '<td data-sort-value="' + parseFloat(value.x.replace(/[^\d\.\-eE+]/g, "")) + '">' + value.x + '</td>';
			html += '<td data-sort-value="' + value.y + '">' + value.y + '</td>';
			html += '</tr>';
		});

		html += '</tbody></table>';

		app.compile(6, html);
	},

	tab_7: function tab_7() {

		app.tag = 7;

		var html = '<table id="tab7" class="councilTable">';
		html += '<thead>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th>Type<img src="images/info.png"></th>';
		html += '<th>Council<img src="images/info.png"></th>';
		html += '<th>Code of conduct</th>';
		html += '</tr>';
		html += '<tr>';
		html += '<th class="hidden">Id</th>';
		html += '<th></th>';
		html += '<th></th>';
		html += '<th><img class="tips" data-content="Code of conduct" src="images/infoid.png"></th>';
		html += '</tr></thead><tbody>';

		app.sample.forEach(function (value, index) {

			html += '<tr data-id="' + value.a + '"  data-type="' + value.type + '">';
			html += '<td class="hidden">' + value.a + '</td>';
			html += '<td data-sort-value="' + value.type + '"><div class="key' + value.type + '"></div></td>';
			html += '<td data-sort-value="' + value.b + '">' + value.b + '</td>';
			html += '<td data-sort-value="' + value.z + '">' + value.z + '</td>';
			html += '</tr>';
		});

		html += '</tbody></table>';

		app.compile(7, html);

		console.log(html);
	},

	compile: function compile(tab, markup) {

		$("#counciltable").html(markup);

		$("#tab" + tab).tablesorter({

			textExtraction: function textExtraction(node) {

				var attr = $(node).attr('data-sort-value');

				if (typeof attr !== 'undefined' && attr !== false) {

					return attr;
				}

				return $(node).text();
			}
		});

		$("tr").on("click", function () {

			$('#table').css('display', 'none');

			app.type = $(this).data('type');

			app.info($(this).data('id'));
		});

		Tipped.create('.tips', function (element) {
			return {
				content: $(element).data('content')
			};
		}, {
			skin: 'light',
			position: 'right',
			close: true
		});
	},

	generate: function generate() {

		var national = [];

		var group = [];

		var local = app.council[0].b;

		var html = '';

		var varchar = factsheet[app.x].target;

		// Council calculations

		var council = parseFloat(app.council[0][varchar].replace(/[^\d\.\-eE+]/g, ""));

		var label = isNaN(council) ? 'not supplied' : '$' + app.makeItLookNice(council);

		// Group calculations

		app.group.forEach(function (value, index) {

			var num = parseFloat(value[varchar].replace(/[^\d\.\-eE+]/g, ""));

			!isNaN(num) ? group.push(num) : '';
		});

		var group_total = group.reduce(function (a, b) {
			return a + b;
		}, 0); // Total

		var group_average = parseInt(group_total / group.length); // Avergae of group

		// National calculations

		councils.forEach(function (value, index) {

			var num = parseFloat(value[varchar].replace(/[^\d\.\-eE+]/g, ""));

			!isNaN(num) ? national.push(num) : '';
		});

		var national_total = national.reduce(function (a, b) {
			return a + b;
		}, 0); // Total

		var national_average = parseInt(national_total / national.length); // National average

		var max = Math.max.apply(null, national); // Maximum value

		html += '<div class="conti">';
		html += '<h3>' + factsheet[app.x].label + '</h3>';
		html += '<div class="council_block"><div class="label">' + local + '</div><div class="bar_block">' + (isNaN(council) ? label : council == 0 ? '<span>0</span>' : '<div class="council tips" style="' + (Math.round(100 / max * council) < 8 ? 'color:black;' : '') + 'width: ' + (isNaN(council) ? '0' : Math.round(100 / max * council)) + '%;" data-content="' + local + ': ' + label + '">' + label + '</div>') + '</div></div>';
		html += '<div class="council_block"><div class="label">Average for ' + app.tagger(app.type) + '</div><div class="bar_block"><div class="group tips" style="' + (Math.round(100 / max * group_average) < 8 ? 'color:black;' : '') + 'width: ' + Math.round(100 / max * group_average) + '%;" data-content="Average for ' + app.tagger(app.type) + ' - $' + app.makeItLookNice(group_average) + '">$' + app.makeItLookNice(group_average) + '</div></div></div>';
		html += '<div class="council_block"><div class="label">National average</div><div class="bar_block"><div class="national tips" style="' + (Math.round(100 / max * national_average) < 8 ? 'color:black;' : '') + 'width: ' + Math.round(100 / max * national_average) + '%;" data-content="National average - $' + app.makeItLookNice(national_average) + '">$' + app.makeItLookNice(national_average) + '</div></div></div>';
		html += '</div>';
		html += varchar == 'e' ? '<p>Average residential rates include compulsory user charges (such as water). More information is available <a href="http://www.taxpayers.org.nz/average_rates" target="_blank">here</a>.</p>' : '';
		html += '<div class="miniDividier"></div>';

		$('#council_info').append(html);

		Tipped.create('.tips', function (element) {
			return {
				content: $(element).data('content')
			};
		}, {
			skin: 'light',
			position: 'right',
			close: true
		});

		app.check();
	},

	proportion: function proportion() {

		var national = [];

		var group = [];

		var local = app.council[0].b;

		var html = '';

		// Council calculations

		var council = Math.round(100 / parseFloat(app.council[0].f.replace(/[^\d\.\-eE+]/g, "")) * parseFloat(app.council[0].a1.replace(/[^\d\.\-eE+]/g, "")));

		var label = isNaN(council) ? 'not supplied' : app.makeItLookNice(council) + '%';

		// Group calculations

		app.group.forEach(function (value, index) {

			var num = Math.round(100 / parseFloat(value.f.replace(/[^\d\.\-eE+]/g, "")) * parseFloat(value.a1.replace(/[^\d\.\-eE+]/g, "")));

			!isNaN(num) ? group.push(num) : '';
		});

		var group_total = group.reduce(function (a, b) {
			return a + b;
		}, 0); // Total

		var group_average = parseInt(group_total / group.length); // Avergae of group

		// National calculations

		councils.forEach(function (value, index) {

			var num = Math.round(100 / parseFloat(value.f.replace(/[^\d\.\-eE+]/g, "")) * parseFloat(value.a1.replace(/[^\d\.\-eE+]/g, "")));

			!isNaN(num) ? national.push(num) : '';
		});

		var national_total = national.reduce(function (a, b) {
			return a + b;
		}, 0); // Total

		var national_average = parseInt(national_total / national.length); // National average

		var max = 100;

		html += '<div class="council_block"><div class="label">' + local + '</div><div class="bar_block">' + (isNaN(council) ? label : council == 0 ? '<span>0</span>' : '<div class="council tips" style="' + (Math.round(100 / max * council) < 8 ? 'color:black;' : '') + 'width: ' + (isNaN(council) ? '0' : Math.round(100 / max * council)) + '%;" data-content="' + local + ': ' + label + '">' + label + '</div>') + '</div></div>';
		html += '<div class="council_block"><div class="label">Average for ' + app.tagger(app.type) + '</div><div class="bar_block"><div class="group tips" style="' + (Math.round(100 / max * group_average) < 8 ? 'color:black;' : '') + 'width: ' + Math.round(100 / max * group_average) + '%;" data-content="Average for ' + app.tagger(app.type) + ' - ' + app.makeItLookNice(group_average) + '%">' + app.makeItLookNice(group_average) + '%</div></div></div>';
		html += '<div class="council_block"><div class="label">National average</div><div class="bar_block"><div class="national tips" style="' + (Math.round(100 / max * national_average) < 8 ? 'color:black;' : '') + 'width: ' + Math.round(100 / max * national_average) + '%;" data-content="National average - ' + app.makeItLookNice(national_average) + '%">' + app.makeItLookNice(national_average) + '%</div></div></div>';
		html += '</div>';

		return html;
	},

	tagger: function tagger(type) {

		return type == 'P' ? 'provincial councils' : type == 'U' ? 'unitary councils' : type == 'M' ? 'metro councils' : type == 'R' ? 'rural councils' : 'city councils';
	},

	formal: function formal(type) {

		return type == 'P' ? 'Provincial' : type == 'U' ? 'Unitary' : type == 'M' ? 'Metro' : type == 'R' ? 'Rural' : 'City';
	},

	makeItLookNice: function makeItLookNice(num) {

		var result = parseFloat(num).toFixed();

		result = result.replace(/(\d)(?=(\d{3})+$)/g, '$1,');

		return result;
	},

	check: function check() {

		if (app.x < app.y - 1) {

			app.x = app.x + 1;

			app.generate();
		} else {

			app.audit();
		}
	},

	audit: function audit() {

		var html = '<h3>Staff</h3>';
		html += '<p>Number of staff: <strong>' + app.council[0].f + '</strong></p>';
		html += '<p>Staff earning over $100,000: <strong>' + app.council[0].a1 + '</strong></p>';
		html += '<p>Proportion of staff earning over $100,000:</p>';
		html += app.proportion();
		html += '<p>Performance-Related dismissals in last 12 months: <strong>' + app.council[0].h + '</strong></p>';
		html += '<div class="miniDividier"></div>';

		html += '<h3>Audit and Risk Oversight</h3>';

		html += '<p>Audit and risk committees provide ratepayers with improved assurance of value and financial risk management.  We asked Councils whether they follow best practise in having independent members, and input from at least one lawyer and accountant, and an independent chairperson on their audit and risk committee.</p>';

		if (app.council[0].u != '') {

			html += '<p>Number of members on the Audit and Risk Committee: <strong>' + app.council[0].u + '</strong></p>';
			html += '<p>Independent member of Audit and Risk Committee: ' + (app.council[0].v > 0 ? '<img src="images/yes.png">' : '<img src="images/no.png">') + '</p>';
			html += '<p>Lawyer on Audit and Risk Committee: ' + (app.council[0].w > 0 ? '<img src="images/yes.png">' : '<img src="images/no.png">') + '</p>';
			html += '<p>Accountant on Audit and Risk Committee: ' + (app.council[0].x > 0 ? '<img src="images/yes.png">' : '<img src="images/no.png">') + '</p>';
			html += '<p>Independent chair of Audit and Risk Committee: ' + (app.council[0].y == 'Yes' ? 'Yes <img src="images/yes.png">' : 'No <img src="images/no.png">') + '</p>';
		} else {

			html += '<p><strong>This council has no Audit and Risk Committee.</strong></p>';
		}

		html += '<p>Code of conduct requiring political neutrality: ' + (app.council[0].z == 'Yes' ? 'Yes <img src="images/yes.png">' : 'No <img src="images/no.png">') + '</p>';

		html += '<div class="miniDividier"></div>';

		html += '<p><em>Ratepayers’ Report is free for anyone to use, however we ask that any republication of the data be attributed to the New Zealand Taxpayers’ Union.</em></p>';

		$('#council_info').append(html);

		Tipped.create('.tips', function (element) {
			return {
				content: $(element).data('content')
			};
		}, {
			skin: 'light',
			position: 'right',
			close: true
		});
	},

	info: function info(cid) {

		app.y = factsheet.length;

		console.log(app.y);

		// Get the data for the council the user selected

		app.council = councils.filter(function (value) {

			return parseInt(value.a) == cid;
		});

		var html = '';

		html += '<div class="title_bar"><div class="title"><h2>' + app.council[0].b + '</h2></div></div>';
		html += '<p>Council type: ' + app.formal(app.council[0].type) + '</p>';
		html += '<p>Population served: ' + app.council[0].c + '</p>';
		html += '<p>Number of residential ratepayers: ' + app.council[0].a4 + '</p>';
		html += '<p>Area: ' + app.council[0].a3 + ' square km</p>';
		html += '<div class="miniDividier"></div>';

		$('#council_info').html(html);

		// Get data for all the councils in the same group

		app.group = councils.filter(function (value) {

			return value.type == app.type;
		});

		app.generate();

		$('#council').css('display', 'block');

		window.scrollTo(0, 0);
	},

	mobile_check: function mobile_check() {

		var check = false;

		(function (a) {
			if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
		})(navigator.userAgent || navigator.vendor || window.opera);

		var isiPad = navigator.userAgent.match(/iPad/i) != null;

		return check || isiPad ? true : false;
	}

};

app.initialize();

//# sourceMappingURL=app.js.map