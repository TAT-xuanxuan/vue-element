export default {
	name: 'main',
	path: "/",
	component: require("@/components/layout/main").default,
	redirect:'/about',
	children: [	
		{
			name:'about',
			path:'about',
			component:require("@/pages/about").default,
			meta:{
				title:'关于'
			}
		}
    ]
}
