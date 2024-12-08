const API_DOMAIN = 'https://lot24.ma/api/';


export const API_ENDPOINTS = {
    PRODUCT: {
        GET_ALL_PRODUCTS: API_DOMAIN + 'get-product',
        GET_Catrgory: API_DOMAIN + 'get-category',
        GET_SubCatrgory: API_DOMAIN + 'get-subcategory',
        GET_Brand: API_DOMAIN + 'brand',

        POST_PRODUCT: API_DOMAIN + 'store-product',
        EDIT_PRODUCT: API_DOMAIN + 'edit-product/1',
        UPDATE_PRODUCT: API_DOMAIN + 'update-product/1',
        DELETE_PRODUCT: API_DOMAIN + 'delete-product/1',

        WEEK_BEST_PRODUCT: API_DOMAIN + 'week-best-offer',
        RECENT_ADD_PRODUCT: API_DOMAIN + 'recent-add-products',
        MOST_POPULAR_PRODUCT: API_DOMAIN + 'most-populer-products',
    },
    PUBLIC: {
        GetCountries: API_DOMAIN + '/country',
    },
    SUBCRIPTION: {
        SHOW_Subcription: API_DOMAIN + 'show-subscription',
    }


}

export default API_DOMAIN;
