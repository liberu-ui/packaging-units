import routeImporter from '@core/modules/importers/routeImporter';

const routes = routeImporter(require.context('./packagingUnits', false, /.*\.js$/));
const RouterView = () => import('@core/bulma/pages/Router.vue');

export default {
    path: 'packagingUnits',
    component: RouterView,
    meta: {
        breadcrumb: 'packaging units',
        route: 'administration.packagingUnits.index',
    },
    children: routes,
};
