/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-12-28 22:43:14
 * @version $Id$
 */

export default {
    logout: 'user/logout',
    login: 'user/login',
    register: 'user/register',
    userStatus: 'user/self',
    reviewers: 'reviewers',
    updateUser: 'user',
    qiniu: 'qiniu/token',
    tags: 'tags',
    userTag: 'user/tags',
    userTagDelete: 'user/tags/:id',
    reviewerView: 'reviewers/:id',
    reviewerReviews: 'reviewers/:id/reviews',
    ordersAdd: 'orders',
    ordersList: 'user/orders',
    ordersView: 'orders/:id',
    ordersReward: 'orders/:id/reward',
    ordersReview: 'orders/:id/review',
    reviewsAdd: 'reviews',
    reviewsEdit: 'reviews/:id', // post
    reviewsView: 'reviews/:id', // get
    reviewsGet: 'reviews',
    reviewVisitCreate: 'reviews/:id/visits',
    applicationsCreate: 'applications',
    notifications: 'notifications',
    notificationsCount: 'notifications/count'
}
