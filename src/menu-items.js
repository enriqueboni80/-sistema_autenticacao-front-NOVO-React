export default {
    items: [
        {
            id: 'pages',
            title: 'Pages',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/home',
                    icon: 'feather icon-home',
                },
                {
                    id: 'gerenciar-evento',
                    title: 'Gerenciar Eventos',
                    type: 'item',
                    url: '/home/gerenciar-eventos',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                /*                 {
                                    id: 'privated-access',
                                    title: 'Acesso Privado',
                                    type: 'item',
                                    url: '/home/privated-access',
                                    classes: 'nav-item',
                                    icon: 'feather icon-sidebar'
                                },
                                {
                                    id: 'signin-1',
                                    title: 'Sign in',
                                    type: 'item',
                                    url: '/auth/signin',
                                    icon: 'feather icon-lock',
                                    badge: {
                                        title: 'New',
                                        type: 'label-danger'
                                    },
                                    target: true,
                                    breadcrumbs: false
                                },
                                {
                                    id: 'menu-level',
                                    title: 'Menu Levels',
                                    type: 'collapse',
                                    icon: 'feather icon-menu',
                                    children: [
                                        {
                                            id: 'menu-level-1.1',
                                            title: 'Menu Level 1.1',
                                            type: 'item',
                                            url: '#!',
                                        },
                                        {
                                            id: 'menu-level-1.2',
                                            title: 'Menu Level 2.2',
                                            type: 'collapse',
                                            children: [
                                                {
                                                    id: 'menu-level-2.1',
                                                    title: 'Menu Level 2.1',
                                                    type: 'item',
                                                    url: '#',
                                                },
                                                {
                                                    id: 'menu-level-2.2',
                                                    title: 'Menu Level 2.2',
                                                    type: 'collapse',
                                                    children: [
                                                        {
                                                            id: 'menu-level-3.1',
                                                            title: 'Menu Level 3.1',
                                                            type: 'item',
                                                            url: '#',
                                                        },
                                                        {
                                                            id: 'menu-level-3.2',
                                                            title: 'Menu Level 3.2',
                                                            type: 'item',
                                                            url: '#',
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                } */
            ]
        }
    ]
}