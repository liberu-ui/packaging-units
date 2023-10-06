import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./packagingUnits', false, /.*\.js$/));
const Router = () => import('@liberu-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'packagingUnits',
    component: Router,
    meta: {
        breadcrumb: 'packaging units',
        route: 'administration.packagingUnits.index',
    },
    children: routes,
};
