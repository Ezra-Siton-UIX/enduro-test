{{>head}}
<!--plugins-->
{{>fancybox-css}}
</head>

<body itemscope itemtype="http://schema.org/AboutPage" style="background: #f8f8f8;">
	{{#>body}}
	
	<header class="uk-background-cover" itemscope itemtype="http://schema.org/WPHeader">
		<div class="uk-grid uk-grid-large uk-flex uk-flex-middle " data-uk-grid>
			<div class="uk-width-5-5@s">
				<div class="uk-section uk-section-primary uk-section-smnall  uk-text-center uk-ligh3t">
					<h1 itemprop="headline" class="uk-heading-primary uk-margin-remove">{{ main_heading}}</h1>
					<span itemprop="description" class="uk-h3 uk-display-block st-text-light uk-text-primary uk-margin-remove">WEB & GRAPHIC DESIGNER </span>
				</div>
			</div>
		</div>
	</header>
	
	<!-- Breadcrumb -->
	<nav class="uk-container uk-container-large uk-margin-bottom" itemprop="breadcrumb">
		<ol itemscope itemtype="http://schema.org/BreadcrumbList" class="uk-breadcrumb uk-margin-small-top">
			<li itemprop="itemListElement" itemscope	itemtype="http://schema.org/ListItem">
				<a itemscope itemtype="http://schema.org/Thing" itemprop="item"  href="../index.html" data-uk-tooltip="pos: bottom" title="חזרה למסך הראשי">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewbox="0 0 24 24">
						<g class="nc-icon-wrapper" fill="#999999">
							<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
						</g>
					</svg>
					<span itemprop="name">בית</span>
				</a>
				<meta itemprop="position" content="1" />
			</li>
			<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
				<a itemscope itemtype="http://schema.org/Thing" itemprop="item" href="about.html"> <span itemprop="name">אודות</span></a>
				<meta itemprop="position" content="2" />
			</li>
		</ol>
	</nav>
	
	<section class="uk-section uk-section-default uk-section-l2arge">
		<div class="uk-container uk-container-large">
			<div class="uk-flex uk-grid-large uk-flex-middle" data-uk-grid="">
				<div class="uk-width-2-5@m">
					<h2 itemprop="headline" class="uk-h2 uk-text-bold uk-heading-line"><span>{{section_1.heading_top}}</span></h2>
					<p itemprop="description" class="uk-text-lead">
						{{section_1.paragraph_top}}
					</p>
				</div>
				<div class="uk-width-3-5@m" id="gallery">
					<ul class="uk-grid-match uk-grid-small" id="nested-grid" data-uk-grid="">
						<li class="uk-width-1-2m uk-width-1-2">
							<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
								<a itemprop="contentUrl" data-fancybox="web-design-uix" data-width="1920" data-height="1080" href="/assets/img/webdesign/responsive-web-design-uix-clean-design-hr-siton.jpg">
									<div class="uk-inline-clip uk-transition-toggle">
										<img itemprop="thumbnail" class="uk-transition-scale-up uk-transition-opaque" src="/assets/img/webdesign/thumbnails/800w/responsive-web-design-uix-clean-design-hr-siton.jpg" alt="עיצוב אתר רספונסיבי" />
									</div>
								</a>
								<!-- image metadata -->
								<meta itemprop="width" content="800">
								<meta itemprop="height" content="450">
								<meta itemprop="fileFormat" content="jpeg">
								<!-- figcaption -->
								<figcaption class="uk-margin-small-top uk-hidden uk-text-small" itemprop="description caption">עיצוב אתר רספונסיבי</figcaption>
							</figure>
						</li>
						<li class="uk-width-1-2m uk-width-1-2">
							<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
								<a itemprop="contentUrl" data-fancybox="web-design-uix" data-width="1920" data-height="1080" href="/assets/img/webdesign/webdesign-uix-startup-one-page-siton.jpg">
									<div class="uk-inline-clip uk-transition-toggle">
										<img itemprop="thumbnail" class="uk-transition-scale-up uk-transition-opaque" src="/assets/img/webdesign/thumbnails/800w/webdesign-uix-startup-one-page-siton.jpg" alt="עיצוב אתר בסגנון נקי" />
									</div>
								</a>
								<!-- image metadata -->
								<meta itemprop="width" content="800">
								<meta itemprop="height" content="450">
								<meta itemprop="fileFormat" content="jpeg">
								<!-- figcaption -->
								<figcaption class="uk-margin-small-top  uk-hidden uk-text-small" itemprop="description caption">עיצוב אתר בסגנון נקי</figcaption>
							</figure>
						</li>
						<li class="uk-width-1-3@m uk-width-1-1">
							<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
								<a itemprop="contentUrl" data-fancybox="web-design-uix" data-width="1920" data-height="1080" href="/assets/img/webdesign/app-design-uix-profile-screen-siton.jpg">
									<div class="uk-inline-clip uk-transition-toggle">
										<img itemprop="thumbnail" class="uk-transition-scale-up uk-transition-opaque" src="/assets/img/webdesign/thumbnails/800w/app-design-uix-profile-screen-siton.jpg" alt="עיצוב למובייל - דף פרופיל" />
									</div>
								</a>
								<!-- image metadata -->
								<meta itemprop="width" content="300">
								<meta itemprop="height" content="169">
								<meta itemprop="fileFormat" content="jpeg">
								<!-- figcaption -->
								<figcaption class="uk-margin-small-top  uk-hidden uk-text-small" itemprop="description caption">עיצוב למובייל - דף פרופיל</figcaption>
							</figure>
						</li>
						<li class="uk-width-1-3@m uk-width-1-2">
							<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
								<a itemprop="contentUrl" data-fancybox="web-design-uix" data-width="1920" data-height="1080" href="/assets/img/webdesign/webdesign-uix-about-page-rtl-siton.jpg">
									<div class="uk-inline-clip uk-transition-toggle">
										<img itemprop="thumbnail" class="uk-transition-scale-up uk-transition-opaque" src="/assets/img/webdesign/thumbnails/300w/webdesign-uix-about-page-rtl-siton.jpg" alt="עיצוב אתר רספונסיבי - דף אודות" />
									</div>
								</a>
								<!-- image metadata -->
								<meta itemprop="width" content="300">
								<meta itemprop="height" content="169">
								<meta itemprop="fileFormat" content="jpeg">
								<!-- figcaption -->
								<figcaption class="uk-margin-small-top  uk-hidden uk-text-small" itemprop="description caption">עיצוב אתר רספונסיבי - דף אודות</figcaption>
							</figure>
						</li>
						<li class="uk-width-1-3@m uk-width-1-2">
							<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
								<a itemprop="contentUrl" data-fancybox="web-design-uix" data-width="1920" data-height="1080" href="/assets/img/webdesign/app-design-offcanvas-menu-design-siton.jpg">
									<div class="uk-inline-clip uk-transition-toggle">
										<img itemprop="thumbnail" class="uk-transition-scale-up uk-transition-opaque" src="/assets/img/webdesign/thumbnails/300w/app-design-offcanvas-menu-design-siton.jpg" alt="   עיצוב למובייל - תפריט רספונסיבי - offCanvas" />
									</div>
								</a>
								<!-- image metadata -->
								<meta itemprop="width" content="300">
								<meta itemprop="height" content="169">
								<meta itemprop="fileFormat" content="jpeg">
								<!-- figcaption -->
								<figcaption class="uk-hidden uk-margin-small-top  uk-text-small" itemprop="description caption">
									עיצוב למובייל - תפריט רספונסיבי - offCanvas
									<!-- optionally define copyright -->
								</figcaption>
							</figure>
						</li>
					</ul>
					<p class="uk-margin-medium-top uk-text-center"><a href="portfolio/web-design-uix.html" class="uk-button uk-button-primary">
						{{section_1.button_text}}
						
					</a></p>
				</div>
			</div>
		</div>
	</section>
	
	<!-- main - tabs + aside -->
	<div class="uk-section">
		<div class="uk-container uk-container-large uk-margin-large-bottom">
			<div class="uk-grid uk-grid-large" data-uk-grid="">
				<!-- col1 -->
				<aside class="uk-width-1-4@m " itemscope itemtype="http://schema.org/WPSideBar">
					<div class="uk-card uk-card-default uk-card-body">
						<header>
							<h2 class="uk-margin-small uk-text-meta">
							מי אני</h2>
							<h3 itemprop="name" class="uk-h1 uk-margin-remove-top">עזרא סיטון</h3>
							<figure class="uk-margin">
								<img width="150" src="/assets/img/ezra-siton-profile-image/ezra-siton-profile-image.jpg" class="uk-border-circle" alt="עזרא סיטון - תמונת פרופיל">
							</figure>
							<p itemprop="about" class="uk-margin-medium uk-h3 uk-margin-remove-top">
							מעצב גרפי ומפתח אתרים ורסטילי המשלב יכולות עיצוב ופיתוח. בעל ניסיון רב בסטודיואים ומשרדי פרסום מובילים.</p>
						</header>
						<h3 class="uk-margin-small  uk-text-small">
						יכולות / SKILLS</h3>
						<ul class="uk-padding-remove uk-margin-remove" data-uk-margin data-uk-padding data-uk-scrollspy="target: > li; cls:uk-animation-fade; delay: 30">
							<li class="uk-display-inline-block">
								<span itemprop="keywords" class="uk-label">Webflow</span>
							</li>
							<li class="uk-display-inline uk-margin-small">
								<span itemprop="keywords" class="uk-label">WIX</span>
							</li>
							<li class="uk-display-inline">
								<span itemprop="keywords" class="uk-label">Invision</span>
							</li>
							<li class="uk-display-inline">
								<span itemprop="keywords" class="uk-label">עיצוב אתרים</span>
							</li>
							<li class="uk-display-inline">
								<span itemprop="keywords" class="uk-label">פיתוח FRONTEND</span>
							</li>
							<li class="uk-display-inline">
								<span itemprop="keywords" class="uk-label">illustrator</span>
							</li>
							<li class="uk-display-inline">
								<span itemprop="keywords" class="uk-label">HTML & CSS</span>
							</li>
							<li class="uk-display-inline">
								<span itemprop="keywords" class="uk-label">Material Design</span>
							</li>
							<li class="uk-display-inline">
								<span itemprop="keywords" class="uk-label">Google adwords</span>
							</li>
							<li class="uk-display-inline">
								<span itemprop="keywords" class="uk-label">טיפוגרפיה</span>
							</li>
							<li class="uk-display-inline">
								<span itemprop="keywords" class="uk-label">on-page SEO</span>
							</li>
						</ul>
						<hr>
						<h3 class="uk-margin-small  uk-text-small">
						מה אני עושה</h3>
						<p class="uk-margin-medium uk-margin-remove-top uk-text-meta">
						עיצוב גרפי / עיצוב ופיתוח אתרים / שפה מותגית</p>
						<hr>
						<h3 class="uk-margin-small  uk-text-small">רשתות חברתיות</h3>
						<ul class="uk-subnav uk-subnav-divider" data-uk-margin>
							<li>
								<a itemprop="sameAs" target="_blank" href="https://www.xplace.com/il/u/siton">Xplace</a>
							</li>
							<li>
								<a itemprop="sameAs" target="_blank" href="https://github.com/Ezra-Siton-UIX">Github</a>
							</li>
							<li>
								<a itemprop="sameAs" target="_blank" href="https://il.linkedin.com/in/ezra-siton-6789a069">Linkedin</a>
							</li>
							<li>
								<a itemprop="sameAs" target="_blank" href="https://codepen.io/ezra_siton/">CODEPEN</a>
							</li>
							<li>
								<a itemprop="sameAs" target="_blank" href="https://forum.webflow.com/u/Siton_Systems/summary">Webflow</a>
							</li>
							<li>
								<a itemprop="sameAs" target="_blank" href="https://www.concrete5.org/profile/-/view/229366/">concrete5</a>
							</li>
							<li>
								<a itemprop="sameAs" target="_blank" href="https://teamtreehouse.com/ezrasiton">Treehouse</a>
							</li>
						</ul>
					</div>
					<!--/card -->
				</aside>
				<!--col-2 -->
				<!-- MAIN CONTENT
				-->
				<main id="main" class="uk-width-3-4@m" itemprop="mainContentOfPage">
					<!-- TAB MENU -->
					<nav id="tab-menu" class="">
						<ul class="uk-tab uk-child-width-expand" data-uk-switcher="connect: .tab-content; animation: uk-animation-fade">
							<li class="">
								<a href="#" title="Professional knowledge" data-uk-tooltip><span class="uk-text-large"> <span class="st-text-light"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 64 64" xml:space="preserve" width="24" height="24">
									<g class="nc-icon-wrapper" fill="#444444">
										<path fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M4,34l6-6l12,8 c0,0,15.3-15.5,36-26l2,6c0,0-21.9,12.8-38,38L4,34z" stroke-linejoin="miter"></path>
									</g>
								</svg></span><br>
								ידע</span></a>
							</li>
							<li>
								<a href="#" title="Education" data-uk-tooltip><span class="uk-text-large"><span class="st-text-light"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 64 64" xml:space="preserve" width="24" height="24">
									<g class="nc-icon-wrapper" fill="#444444">
										<path fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M51,9V2H7v54 c0,3.314,2.686,6,6,6" stroke-linejoin="miter"></path>
										<path fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M19,56c0,3.314-2.686,6-6,6 h40c3.314,0,6-2.686,6-6v-4H19V56z" stroke-linejoin="miter"></path>
										<line data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="17" y1="16" x2="34" y2="16" stroke-linejoin="miter"></line>
										<line data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="17" y1="27" x2="34" y2="27" stroke-linejoin="miter"></line>
										<line data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="17" y1="38" x2="29" y2="38" stroke-linejoin="miter"></line>
										<polyline data-cap="butt" data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-miterlimit="10" points="58,28.484 58,43 51,38 44,43 44,28.484 " stroke-linecap="butt"></polyline>
										<circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="51" cy="20" r="11" stroke-linejoin="miter"></circle>
										<line fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="51" y1="52" x2="51" y2="45" stroke-linejoin="miter"></line>
									</g>
								</svg></span><br>
								השכלה</span></a>
							</li>
							<li>
								<a href="#" title="Work Experience" data-uk-tooltip><span class="uk-text-large"><span class="st-text-light"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 64 64" xml:space="preserve" width="24" height="24">
									<g class="nc-icon-wrapper" fill="#444444">
										<polyline data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points=" 22,12 22,4 42,4 42,12 " stroke-linejoin="miter"></polyline>
										<path fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M2,44V16 c0-2.209,1.791-4,4-4h52c2.209,0,4,1.791,4,4v28H2z" stroke-linejoin="miter"></path>
										<path fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M58,49v7 c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4v-7" stroke-linejoin="miter"></path>
										<rect data-color="color-2" x="22" y="22" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" width="20" height="12" stroke-linejoin="miter"></rect>
									</g>
								</svg></span><br>
								ניסיון</span></a>
							</li>
						</ul>
					</nav>
					<!-- TAB CONTENT -->
					<div class="uk-switcher uk-margin-large-bottom uk-margin-medium-top tab-content" itemscope itemtype="http://schema.org/WebPageElement">
						<!-- 1/3 - TAB I - Technology -->
						<section id="technology">
							<h2 itemprop="headline" class="uk-width-1-1 uk-hidden">ידע</h2>
							<!-- ACCORDION -->
							<div class="uk-width-1-1" data-uk-accordion="collapsible: true; multiple: true">
								<!-- accordion 1/3 -->
								{{#each tab_creative_label}}
								<div class="uk-open uk-card uk-card-default">
									<h3 class="uk-accordion-title uk-text-bold uk-text-primary">
										• {{this.label}}
									</h3>
									<!-- accordion content 1/3 -->
									<div class="uk-accordion-content" data-uk-grid>
										{{#each topics}}
										<div class="box1 uk-width-1-3@m  uk-margin-top">
											<h4 class="uk-text-bold uk-heading-bullet uk-margin-top2">
												{{this.heading}}
											</h4>
											<ul class="uk-list uk-list-bullet">
												{{#each sub_topics}}
												<li>
													<a title="{{this.label}}" href="{{this.url}}" class="uk-link-reset" rel="tag" target="_blank">
														{{this.label}}
													</a>
												</li>
												{{/each}}
											</ul>
										</div>
										{{/each}}
									</div>
								</div>
								{{/each}}
							</div>
						</section>
						<!-- 2/3 - TAB 2 - Education -->
						<section class="uk-card uk-card-default uk-card-small uk-card-body">
							<h2 itemprop="headline" class="uk-hidden">השכלה</h2>
							<div class="uk-margin-small uk-text-meta">2014 - 2011</div>
							<img alt="לוגו האוניברסיטה הפתוחה" src="/assets/img/aboutpage/logo-open-university-israel.jpg">
							<h3 class="uk-margin-small uk-h2 uk-text-primary">תואר ראשון <strong>
							במנהל עסקים </strong>
							בהצטיינות,
							האוניברסיטה הפתוחה</h3>
							<p class="uk-margin uk-text-large uk-width-4-5@m">לימודי תואר ראשון בניהול, לימודי תשתית וחובה בתחומי ניהול שונים, כגון: שיווק, ניהול הפרסום, התנהגות ארגונית, מימון, חשבונאות וניהול טכנולוגיה.&nbsp;</p>
							<p class="uk-margin">תכנית לימודים מגוונת - רכישת מיומנויות למידה וידע בתחומי עיסוק כגון שיווק, מימון, פרסום, ניהול אסטרטגי ועוד.</p>
							<ul class="uk-margin-medium uk-list">
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											ניהול הפרסום
										</div>
									</div>
								</li>
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											ניהול השיווק
										</div>
									</div>
								</li>
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											ניהול אסטרטגי
										</div>
									</div>
								</li>
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											מבוא לכלכלה
										</div>
									</div>
								</li>
							</ul>
							<!-- Coursera -->
							<!-- TILTAN -->
							<hr class="uk-margin-medium">
							<div class="uk-margin-small uk-text-meta">2010 / 2007</div>
							<img alt="לוגו מכללת תלתן ללימודי עיצוב ותקשורת חזותית" src="/assets/img/aboutpage/Tiltan-College-of-Design-and-Visual-Communication-Logo.jpg">
							<h3 class="uk-margin-small uk-h2  uk-text-primary  uk-width-4-5@m">
								בוגר המסלול תלת שנתי ללימודי עיצוב בהתמחות אינטרנט ואנימציה,
							תלתן - המכללה לעיצוב ולתקשורת חזותית</h3>
							<p class="uk-margin uk-text-large  uk-width-4-5@m">
							לימודי עיצוב גרפי ואינטרנט. יסודות העיצוב, חשיבה גרפית, עיצוב לפרסום, ארט דיירקשן, דפוס ועוד.</p>
							<p class="uk-margin  uk-width-4-5@m">
							בוגר המסלול התלת שנתי במכללת תלתן - במהלך הלימודים רכשתי ידע ומיומנות בתחומי עיצוב שונים ומגוונים ואף נבחרתי לייצג את המכללה במשלחת סטודנטים לאוניברסיטה לעיצוב במנהיים, גרמניה.</p>
							<ul class="uk-margin-medium uk-list">
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											יסודות העיצוב
										</div>
									</div>
								</li>
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											טיפוגרפיה
										</div>
									</div>
								</li>
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											חשיבה גרפית
										</div>
									</div>
								</li>
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											קונספט בעיצוב
										</div>
									</div>
								</li>
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											תיכנות HTML/CSS
										</div>
									</div>
								</li>
							</ul>
							<hr class="uk-margin-medium">
							<h2>קורסים</h2>
							<!-- course one - coursera -->
							<div class="uk-margin-small uk-text-meta">2013</div>
							<img alt="לוגו - קורסרה - מיזם ללמידה מקוונת" src="/assets/img/aboutpage/coursera-logo.jpg">
							<h3 class="uk-margin-small uk-h2  uk-text-primary  uk-text-right uk-width-4-5@m" style="direction: ltr;"><a href="https://www.coursera.org/learn/learn-to-program" target="_blank">
							Learn to Program: The Fundamentals </a> - <br>
							University of Toronto</h3>
							<p class="uk-margin uk-text-large  uk-width-4-5@m">
							קורס מקוון בן חודשיים ב- COURSERA - מיזם למידה מקוונת של קורסים של אונ' מובילות בעולם.</p>
							<p class="uk-margin  uk-width-4-5@m">
							קורס מקיף בנושא יסודות התכנות וכתיבת קוד. הקורס כלל תרגילים ומבחן סופי מקוון. </p>
							<ul class="uk-margin-medium uk-list">
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											מבוא לתכנות
										</div>
									</div>
								</li>
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											מבוא ל- Python
										</div>
									</div>
								</li>
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											אבני היסוד של שפות תכנות - משתנים, פונקציות, אובייקטים, לולאות ועוד
										</div>
									</div>
								</li>
							</ul>
							<hr>
							<!-- course two - open u -->
							<div class="uk-margin-small uk-text-meta">2012</div>
							<img alt="לוגו האוניברסיטה הפתוחה" src="/assets/img/aboutpage/logo-open-university-israel.jpg">
							<h3 class="uk-margin-small uk-h2  uk-text-primary  uk-text-right uk-width-4-5@m"><a href="hhttp://www.openu.ac.il/courses/20441.htm" target="_blank">
							מבוא למדעי המחשב ושפת Java</a> - <br>
							האוניברסיטה הפתוחה</h3>
							<p class="uk-margin uk-text-large  uk-width-4-5@m">
							הקורס נועד לשמש מבוא למדעי המחשב ומבוא לתכנות. </p>
							<p class="uk-margin  uk-width-4-5@m">
							קורס בנושאים בסיסיים ויסודיים במדעי המחשב, בפתרון בעיות, בכתיבת אלגוריתמים וניתוחם ובעקרונות תכנות מונחה עצמים. הקורס הינו חלק מהתואר במדעי המחשב באונ' הפתוחה. </p>
							<ul class="uk-margin-medium uk-list">
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											הקדמה ויסודות השפה Java
										</div>
									</div>
								</li>
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											יסודות תכנות מונחה עצמים
										</div>
									</div>
								</li>
								<li class="">
									<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
										<div class="uk-width-auto ">
											<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
												<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
											</svg></span>
										</div>
										<div>
											בקרת זרימה
										</div>
									</div>
								</li>
							</ul>
						</section>
						<!-- 3/3 JOBS -->
						<section class="uk-card uk-card-default uk-card-small uk-card-body">
							<div id="job1">
								<h2  itemprop="headline" class="uk-hidden">ניסיון תעסוקתי</h2>
								<!--JOB 1 -->
								<div class="uk-margin-small uk-text-meta">היום - 2015</div>
								<h3 class="uk-text-primary  uk-margin-remove uk-h2">מעצב/מפתח פרילאנסר</h3>
								<h4 class="uk-margin-small  uk-text-large">עיצוב גרפי, עיצוב אתרים, פיתוח אתרים וממשקים במסגרת עצמאית.</h4>
								<p class="uk-margin  uk-width-4-5@m">
								מתן שירותי עיצוב ופיתוח אתרים למגוון לקוחות בתחומים שונים. מתן מענה שוטף ללקוחות בשירותי גרפיקה, תחזוק אתרים, עיצוב קוסטומאלי של אתרים ומערכות על פי דרישה ומסמכי אפיון. עבודה שוטפת מול מתכנתים ומנהלי שיווק.&nbsp;</p>
								<ul class="uk-margin-medium uk-list">
									<li class="">
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto ">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												עיצוב אתרים וממשקים על בסיס תבנית או עיצוב אישי
											</div>
										</div>
									</li>
									<li class="">
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto ">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												הכנת קבצי עיצוב לתכנות ועבודה מול מפתחים
											</div>
										</div>
									</li>
									<li class="">
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto ">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												עיצוב לפרינט
											</div>
										</div>
									</li>
									<li class="">
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto ">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												Invision
											</div>
										</div>
									</li>
								</ul>
							</div>
							<!-- end job1 -->
							<hr class="uk-margin-medium">
							<!--JOB 2 -->
							<div id="job2">
								<div class="uk-margin-small uk-text-meta">2015 / 2013</div>
								<h3 class="uk-text-primary uk-margin-small uk-h2">
								מעצב ממשקים, Applife</h3>
								<h4 class="uk-margin-small uk-text-large">
								מעצב ממשקים ואתרי תדמית, אתרי חנות, אתרי פורטפוליו, בלוג ועוד</h4>
								<p class="uk-margin  uk-width-4-5@m">
								חברת עיצוב אתרי בוטיק. במהלך עבודתי עיצבתי עשרות אתרים על בסיס תבנית או בעיצוב אישי וקוסטומאלי על פי דרישה ואפיון. עיצוב משלים של חומרי פרסום שונים לגוגל אדוורדס ופייסבוק.&nbsp;</p>
								<ul class="uk-margin-medium uk-list">
									<li class="">
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto ">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												עיצוב אתרים וממשקים
											</div>
										</div>
									</li>
									<li class="">
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto ">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												<div class="el-content">
													הכנת קבצי עיצוב לתכנות ועבודה מול מפתחים
												</div>
											</div>
										</div>
									</li>
									<li class="">
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto ">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												עיצוב לפרינט
											</div>
										</div>
									</li>
									<li class="">
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto ">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												<div class="el-content">
													Invision
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<!--/end job 2 -->
							<hr class="uk-margin-medium">
							<!--JOB 3 -->
							<div id="job3">
								<div class="uk-margin-small uk-text-meta">2013 / 2012</div>
								<h3 class="uk-text-primary uk-margin-small uk-h2">
								מעצב אינטראקטיב, משרד פרסום דיגיטלי - Twisted</h3>
								<h4 class="uk-margin-small uk-text-large">
								עיצוב לפייסבוק, באנרים, קמפיין פרסומי</h4>
								<p class="uk-margin uk-width-4-5@m">
								מעצב אינטראקטיבי במשרד פרסום זוכה פרסי פרסום, המתמחה בתחום הפרסום הדיגיטלי. במהלך התקופה הפקתי ועיצבתי באנרים וחומרים משלימים לאתרים המובילים בתחום. עבודה שוטפת מול לקוחות כגון כללית, ביזפורטל, הוט ועוד ועם מדיות מובילות כגון ynet, nrg, tapuz ועוד.</p>
								<ul class="uk-margin-medium uk-list">
									<li>
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto uk-first-column">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												באנרים מופלשים ופריסות גדלים
											</div>
										</div>
									</li>
									<li>
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto uk-first-column">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												קמפיינים לפייסבוק
											</div>
										</div>
									</li>
									<li>
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto uk-first-column">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												דפי נחיתה וניוזלטרים
											</div>
										</div>
									</li>
									<li>
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto uk-first-column">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												<div class="el-content">
													עיצוב אינטרקאטיבי
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<!--/end job 3 -->
							<hr class="uk-margin-medium">
							<!--JOB 4 -->
							<div id="job4">
								<div class="uk-margin-small uk-text-meta">2012 / 2010</div>
								<h3 class="uk-text-primary uk-margin-small uk-h2">
								מעצב גרפי/ביצועיסט, משרד פרסום ברזני לוי (כיום True)</h3>
								<h4 class="uk-margin-small uk-text-large">עיצוב גרפי לדפוס ופרינט</h4>
								<p class="uk-margin uk-width-4-5@m">
									משרד פרסום מוביל המתמחה בקריאייטיב, אסטרטגיה ומדיה. במהלך עבודתי
								עיצבתי והפקת דברי דפוס ללקוחות מובילים על בסיס גרפיקה קיימת או עיצוב על פי דרישה. עיצוב והתאמת גדלים למודעות ודברי דפוס כגון חוברות, עלונים, הזמנות, הקמת פרזנטציות, עיצוב רולאפים ועוד.<br></p>
								<ul class="uk-margin-medium uk-list">
									<li>
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto uk-first-column">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												עיצוב לדפוס של מגוון דברי דפוס
											</div>
										</div>
									</li>
									<li>
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto uk-first-column">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												משימות טכניות שוטפות (התאמות גדלים למודעות, תיקוני מלל ועוד)
											</div>
										</div>
									</li>
									<li>
										<div class="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid" data-uk-grid="">
											<div class="uk-width-auto uk-first-column">
												<span class="uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" data-ratio="1">
													<polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
												</svg></span>
											</div>
											<div>
												עיצוב מודעות ועלונים
											</div>
										</div>
									</li>
								</ul>
							</div>
							<!--/end job 3 -->
						</section>
					</div>
				</main>
				
			</div>
		</div>
	</div><!--end container -->
	
	<!-- /end - main - tabs + aside section -->
	<!-- go-to-main-btn -->
	<div class="uk-positi3on-bottom-center uk-margin uk-text-center">
		<a title="חזרה לראש הדף" data-uk-tooltip="pos: top" class="uk-padding-large" href="#wrapper" data-uk-scroll="">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 48 48" xml:space="preserve" width="48" height="48">
				<g class="nc-icon-wrapper">
					<path fill="#1e87f0" d="M45,1H3C1.89543,1,1,1.89543,1,3v42c0,1.10457,0.89543,2,2,2h42c1.10457,0,2-0.89543,2-2V3 C47,1.89543,46.10457,1,45,1z"></path>
					
					<path fill="#FFFFFF" d="M24.70789,13.29382c-0.09235-0.09259-0.20306-0.16589-0.32581-0.21674 c-0.24438-0.10107-0.51978-0.10101-0.76416,0.00006c-0.12274,0.05078-0.23346,0.12408-0.32581,0.21667l-7.99915,7.99915 c-0.39062,0.39062-0.39062,1.02344,0,1.41406s1.02344,0.39062,1.41406,0L23,16.41406V36c0,0.55225,0.44727,1,1,1s1-0.44775,1-1 V16.41406l6.29297,6.29297C31.48828,22.90234,31.74414,23,32,23s0.51172-0.09766,0.70703-0.29297 c0.39062-0.39062,0.39062-1.02344,0-1.41406L24.70789,13.29382z"></path>
				</g>
			</svg>
		</a>
	</div>
	<!-- isometric mac -->
	
	<div class="uk-background-norepeat uk-background-cover uk-background-center-center uk-background-image@m uk-flex uk-flex-middle" data-uk-height-viewport="offset-top: true" data-uk-parallax="bgy: 200; viewport:0.5" style="background-image: url('/assets/img/mobile-design-uix-img.jpg');box-sizing: border-box; min-height: 100vh;">
		<div class="uk-width-1-1">
			<div class="uk-container uk-position-relative">
				<div class="uk-grid uk-grid-large uk-grid-margin-large" data-uk-grid="">
					<div class="uk-width-2-3@m">
						<div>
							<div data-uk-scrollspy="cls:uk-animation-slide-top-medium; delay: 50; offset-top:0; repeat: false">
								<h2 class="uk-margin st-text-light uk-text-center">עיצוב אתרים UIX</h2>
								<h3 class="uk-margin-medium uk-margin-remove-top uk-width-xlarge uk-margin-auto uk-text-center uk-h1">עיצוב אתרים מוקפד ומודרני ברף הגבוה ביותר</h3>
							</div>
							<div class="uk-margin uk-width-xlarge uk-margin-auto uk-text-center" data-uk-scrollspy="cls:uk-animation-fade">
								<p>לא משנה כיצד תבחר לבנות את האתר שלך העיצוב וחווית המשתמש יהיו גורמים חשובים בהצלחתו. עיצוב אתרים נקי ומודרני עם מבנה נח למשתמש בשילוב אימג'ים מקצועיים ויישום השפה מותגית שלכם יגרמו לאתר שלכם להראות מקצועי ומעודכן גם בעוד שנים.</p>
							</div>
						</div>
						<div class="uk-margin-large uk-text-center uk-grid-match uk-child-width-1-3 uk-child-width-1-3@s uk-grid-small uk-grid-divider uk-grid" data-uk-grid="" data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 50; offset-top:0; repeat: false">
							<div>
								<div class="uk-panel">
									<h3 class="uk-margin uk-heading-primary uk-margin-remove-adjacent">4</h3>
									<p class="uk-margin">שנות לימודי עיצוב</p>
								</div>
							</div>
							<div>
								<div class="uk-panel">
									<h3 class="uk-margin uk-heading-primary uk-margin-remove-adjacent">6+</h3>
									<p class="uk-margin">שנות ניסיון בתחום</p>
								</div>
							</div>
							<div>
								<div class="uk-panel">
									<h3 class="uk-margin uk-heading-primary uk-margin-remove-adjacent">9K+</h3>
									<p class="uk-margin">נקודות בקורסי הפיתוח של <a target="_blank" href="https://teamtreehouse.com/ezrasiton">treehouse</a></p>
								</div>
							</div>
						</div>
					</div>
					<div class="uk-width-expand@m">
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
	<!-- footer -->
	{{>footer}}
	<!-- scripts -->
	{{>uikit}}
	<!-- async -->
	
	{{>jquery}}
	{{>fancybox}}
	{{>clipboard}}
	
	
	<!-- initialize -->
	<script type="text/javascript">
		document.addEventListener("DOMContentLoaded", function() {
			// Custom click event - open fancyBox manually
			// Choose what buttons to display by default
			$().fancybox({
				selector : '[data-fancybox="web-design-uix"]',
				thumbs   : true,
				hash     : true,
				infobar : true,
				arrows : true,
				buttons : [
				'thumbs',
				'close'
				],
				loop : true,
				transitionEffect  : "slide",
				thumbs : {
					autoStart : false
				},
				clickContent : function( current, event ) {
					return current.type === 'image' ? 'next' : false;
				},
			});
			
			
		});
	</script>
	
	{{/body}}
		