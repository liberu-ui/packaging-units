const PackagingUnitCreate = () => import('../../../pages/packagingUnits/Create.vue');

export default {
    name: 'administration.packagingUnits.create',
    path: 'create',
    component: PackagingUnitCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Packaging Unit',
    },
};
