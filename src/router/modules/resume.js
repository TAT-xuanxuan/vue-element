export default {
	name: 'main',
	path: "/",
	component: require("@/components/layout/main").default,
	redirect:'/resume',
	children: [	
		{
			name:'resume',
			path:'resume',
			component:require("@/pages/resume").default,
			meta:{
				title:'我的简历'
			}
		}
    ]
}

