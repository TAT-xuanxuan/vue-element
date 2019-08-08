export default {
	name: 'main',
	path: "/",
	component: require("@/components/layout/main").default,
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

