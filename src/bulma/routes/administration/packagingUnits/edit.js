const PackagingUnitEdit = () => import('../../../pages/packagingUnits/Edit.vue');

export default {
    name: 'administration.packagingUnits.edit',
    path: ':packagingUnit/edit',
    component: PackagingUnitEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Packaging Unit',
    },
};
