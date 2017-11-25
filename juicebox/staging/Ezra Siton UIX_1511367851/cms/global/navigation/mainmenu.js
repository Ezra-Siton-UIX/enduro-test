{
	mainmenu: {
		$items_size: 12,
		items: [
			{
				label: 'בית',
				link: '/',
				new_window: false,
				$label_en: 'Home',
				$link_en: '/en'
			},
			{
				label: 'אודות',
				link: '/he/about',
				new_window: false,
				$link_en: '/en/about',
				$label_en: 'About'
			},
			{
				label: 'תיק עבודות',
				link: '/he/portfolio',
				new_window: false,
				is_parent: true,
				$portfolio_size: 6,
				portfolio: [
					{
						label: 'עיצוב אתרים',
						link: '/he/portfolio/web-design-uix',
						new_window: false,
						$label_en: 'Web design',
						$link_en: '/en/portfolio/web-design-uix'
					},
					{
						label: 'עיצוב גרפי',
						link: '/he/portfolio/graphic-design',
						new_window: false,
						$label_en: 'Graphic design',
						$link_en: '/en/portfolio/graphic-design'
					}
				],
				$label_en: 'Portfolio',
				$link_en: '/en/portfolio/'
			},
			{
				label: 'שירותים',
				link: '/he/services-list',
				new_window: false,
				is_parent: true,
				$portfolio_size: 6,
				portfolio: [
					{
						label: 'hello-world',
						link: '/he/services-list/hello-world',
						new_window: false,
						$label_en: 'Services',
						$link_en: '/en/Services-list/hello-world'
					}
				],
				$label_en: 'Services',
				$link_en: '/en/Services-list/'
			},
			{
				label: 'בלוג',
				link: '/he/blog',
				new_window: false,
				$link_en: '/en/blog',
				$label_en: 'blog'
			},
			{
				label: 'צור קשר',
				link: '/he/contact',
				new_window: false,
				$link_en: '/en/contact',
				$label_en: 'Contact'
			}
		]
	},
	meta: {
		last_edited: 1511365722
	}
}