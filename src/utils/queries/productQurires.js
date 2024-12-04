import { apiCall } from "../cutomApiCall";
import { API_ENDPOINTS } from "../api/apiConfig";

export const getAllProducts = () =>
  apiCall(API_ENDPOINTS.PRODUCT.GET_ALL_PRODUCTS, "GET");
