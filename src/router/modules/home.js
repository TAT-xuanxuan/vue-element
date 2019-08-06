export default {
	name: 'nav',
	path: "/",
	component: require("@/components/layout/nav").default,
	redirect:'/home',
	children: [	
		{
			name:'home',
			path:'home',
			component:require("@/pages/home").default,
			meta:{
				title:'首页'
			}
		}
    ]
}

