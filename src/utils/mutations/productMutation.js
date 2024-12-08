import { API_ENDPOINTS } from "../api/apiConfig";
import { apiCall } from "../cutomApiCall";
export const getAllProducts = async () => {
  return await apiCall(API_ENDPOINTS.PRODUCT.GET_ALL_PRODUCTS, "GET");
};

export const weeklyBestProduct = async () => {
  return await apiCall(API_ENDPOINTS.PRODUCT.WEEK_BEST_PRODUCT, "GET");
};

export const recentAddProduct = async () => {
  return await apiCall(API_ENDPOINTS.PRODUCT.RECENT_ADD_PRODUCT, "GET");
};

export const mostPopularProduct = async () => {
  return await apiCall(API_ENDPOINTS.PRODUCT.MOST_POPULAR_PRODUCT, "GET");
};