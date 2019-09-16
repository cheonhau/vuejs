import CategoryView from './components/CategoryView'
import CategoryCreateView from './components/CategoryCreateView'
// import CategoryEditView from './components/CategoryEditView'

export const routes = [
	{ path: '/', name: 'category', component: CategoryView },
	{ path: '/categories/create', name: 'create', component: CategoryCreateView },
	// { path: '/categories/edit/:id', name: 'edit', component: CategoryEditView }
];