import { API_ENDPOINTS } from "../api/apiConfig";
import { apiCall } from "../cutomApiCall";
export const getAllProducts = async () => {
  return await apiCall(API_ENDPOINTS.PRODUCT.GET_ALL_PRODUCTS, "GET");
};
