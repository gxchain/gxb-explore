import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Block from '@/components/Block';
import Transaction from '@/components/Transaction';
import Account from '@/components/Account';
import Asset from '@/components/Asset';
import connect from '@/common/connect';
import Fee from '@/components/Fee';
import Node_Members from '@/components/Node_Members';

Vue.use(Router);

const router = new Router({

    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/block/:block_height',
            name: 'Block',
            component: Block
        },
        {
            path: '/transaction/:tx_id',
            name: 'Transaction',
            component: Transaction
        },
        {
            path: '/account/:id_or_name',
            name: 'Account',
            component: Account
        },
        {
            path: '/asset/:asset_name',
            name: 'Asset',
            component: Asset
        },
        {
            path: '/fee/',
            name: 'Fee',
            component: Fee
        },
        {
            path: '/node_members/',
            name: 'Node_Members',
            component: Node_Members
        }

    ]
});

router.beforeEach((to, from, next) => {
    connect(next);
});

export default router;
