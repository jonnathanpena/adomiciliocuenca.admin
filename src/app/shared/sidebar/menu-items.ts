import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '', title: 'Tienda Asociada 1', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '/inicio', title: 'Inicio', icon: 'mdi mdi-gauge', class: '', label: '', labelClass: '', extralink: false, submenu: []
    },
    {
        path: '', title: 'Pedido', icon: 'mdi mdi-cart', class: 'has-arrow', label:'', labelClass: '', extralink: false, 
        submenu: [
            { path: '/pedido/ingresados', title: 'Ingresados', icon:'', class: '', label:'2', labelClass: 'label label-rouded label-themecolor pull-right', extralink: false, submenu: [] },
            { path: '/pedido/olvidados', title: 'Olvidados', icon:'', class: '', label:'1', labelClass: 'label label-rouded label-themecolor pull-right', extralink: false, submenu: [] },
            { path: '/pedido/listado-pedidos', title: 'Listado por Fecha', icon:'', class: '', label:'', labelClass: '', extralink: false, submenu: [] }            
        ]
    },
    {
        path: '', title: 'Informes', icon: 'mdi mdi-chart-line', class: 'has-arrow', label:'', labelClass: '', extralink: false, 
        submenu: [
            { path: '/informes/estadistica', title: 'Estadística', icon:'', class: '', label:'', labelClass: '', extralink: false, submenu: [] },
            { path: '/informes/reportes-venta', title: 'Reportes de Venta', icon:'', class: '', label:'', labelClass: '', extralink: false, submenu: [] },
            { path: '/informes/comisiones-generadas', title: 'Comisiones Generadas', icon:'', class: '', label:'', labelClass: '', extralink: false, submenu: [] }            
        ]
    },
    {
        path: '', title: 'Artículos', icon: 'mdi mdi-shopping', class: 'has-arrow', label:'', labelClass: '', extralink: false, 
        submenu: [
            { path: '/articulo/crear-item', title: 'Crear Ítem', icon:'', class: '', label:'', labelClass: '', extralink: false, submenu: [] },
            { path: '/articulo/crear-categoria', title: 'Crear Categoría', icon:'', class: '', label:'', labelClass: '', extralink: false, submenu: [] },
            { path: '/articulo/crear-subcategoria', title: 'Crear Subcategoría', icon:'', class: '', label:'', labelClass: '', extralink: false, submenu: [] },
            { path: '/articulo/listado-items', title: 'Listado Ítems', icon:'', class: '', label:'', labelClass: '', extralink: false, submenu: [] }                        
        ]
    },
    {
        path: '', title: 'Valoraciones', icon: 'mdi mdi-star-half', class: 'has-arrow', label:'', labelClass: '', extralink: false, 
        submenu: [
            { path: '/valoraciones/calificaciones', title: 'Calificaciones', icon:'', class: '', label:'', labelClass: '', extralink: false, submenu: [] },
            { path: '/valoraciones/comentarios-sugerencias', title: 'Comentarios y Sugerencias', icon:'', class: '', label:'', labelClass: '', extralink: false, submenu: [] }          
        ]
    },
    {
        path: '', title: 'Dashboards', icon: 'mdi mdi-gauge', class: 'has-arrow', label: '4', labelClass: 'label label-rouded label-themecolor pull-right', extralink: false,
        submenu: [
            { path: '/dashboard/dashboard1', title: 'Modern', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Classic', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/dashboard/dashboard3', title: 'Analytical', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Apps', icon: 'mdi mdi-apps', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/apps/email', title: 'Mailbox', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/apps/fullcalendar', title: 'Calendar', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/apps/taskboard', title: 'Taskboard', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'UI Components', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '', title: 'Component', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/component/accordion', title: 'Accordion', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/alert', title: 'Alert', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/carousel', title: 'Carousel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/dropdown', title: 'Dropdown', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/modal', title: 'Modal', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/pagination', title: 'Pagination', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/poptool', title: 'Popover & Tooltip', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/progressbar', title: 'Progressbar', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/rating', title: 'Ratings', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/tabs', title: 'Tabs', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/timepicker', title: 'Timepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/buttons', title: 'Button', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/cards', title: 'Card', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Extra Components', icon: 'mdi mdi-dropbox', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/extra-component/toastr', title: 'Basic Forms', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/extra-component/upload', title: 'Form Validation', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/extra-component/editor', title: 'Form Typehead', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/extra-component/dragndrop', title: 'Datepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            
        ]
    },
    {
        path: '', title: 'Forms & Tables', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '', title: 'Forms', icon: 'mdi mdi-file', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/forms/basicform', title: 'Basic Forms', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/forms/formvalidation', title: 'Form Validation', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/typehead', title: 'Form Typehead', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/datepicker', title: 'Datepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            
        ]
    },
    {
        path: '', title: 'Tables', icon: 'mdi mdi-table', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/tables/basictable', title: 'Basic Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/tables/smarttable', title: 'Smart Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/tables/datatable', title: 'Data Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '/widgets', title: 'Widgets', icon: 'mdi mdi-widgets', class: '', label: '', labelClass: '', extralink: false, submenu: []
    },
    {
        path: '', title: 'Charts & Icons', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '', title: 'Charts', icon: 'mdi mdi-chart-arc', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/charts/chartjs', title: 'Chart Js', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/charts/chartistjs', title: 'Chartist Js', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            
        ]
    },
    {
        path: '', title: 'Icons', icon: 'mdi mdi-brush', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/icons/fontawesome', title: 'Fontawesome', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/icons/simpleline', title: 'Simple Line Icons', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/icons/material', title: 'Material Icons', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Pages', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '', title: 'Authentication', icon: 'mdi mdi-lock', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/authentication/login', title: 'Login', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/authentication/login2', title: 'Login 2', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/authentication/signup', title: 'Register', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/authentication/signup2', title: 'Register 2', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/authentication/404', title: '404', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/authentication/lock', title: 'Lockscreen', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Sample Pages', icon: 'mdi mdi-file', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/sample-pages/timeline', title: 'Timeline', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/sample-pages/profile', title: 'Profile', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/sample-pages/pricing', title: 'Pricing', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/sample-pages/invoice', title: 'Invoice', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/sample-pages/helperclasses', title: 'Helper Classes', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/starter', title: 'Starter Page', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Menu Levels', icon: 'mdi mdi-arrange-send-backward', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: 'javascript:void(0);', title: 'Second Level', icon: '', class: '', label: '', labelClass: '', extralink: true, submenu: [] },
            {
                path: '', title: 'Second Child', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: 'javascript:void(0);', title: 'Third 1.1', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: 'javascript:void(0);', title: 'Third 1.2', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                ]
            },
        ]
    }     
];

