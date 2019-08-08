export default {
	name: 'main',
	path: "/",
	component: require("@/components/layout/main").default,
	redirect:'/blog',
	children: [	
		{
			name:'blog',
			path:'blog',
			component:require("@/pages/blog").default,
			meta:{
				title:'网络日志'
			}
		}
    ]
}

