export default {
	name: 'main',
	path: "/",
	component: require("@/components/layout/main").default,
	redirect:'/skill',
	children: [	
		{
			name:'skill',
			path:'skill',
			component:require("@/pages/skill").default,
			meta:{
				title:'技术杂谈'
			}
		}
    ]
}

