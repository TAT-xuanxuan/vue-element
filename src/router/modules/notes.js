export default {
	name: 'main',
	path: "/",
	component: require("@/components/layout/main").default,
	redirect:'/notes',
	children: [	
		{
			name:'notes',
			path:'notes',
			component:require("@/pages/notes").default,
			meta:{
				title:'生活笔记'
			}
		}
    ]
}

