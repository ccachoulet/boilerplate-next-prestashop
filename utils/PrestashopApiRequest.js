import PrestashopApi from "./PrestashopApi";

export const getProducts = async () => {
  try {
    const response = await PrestashopApi.get("/products/?display=full");
    console.log(response.data)
    return response.data.products;
  } catch (error) {
    console.error("Erreur pendant la récupération des produits:", error);
    throw error;
  }
};

// export const getCategories = async () => {
//   try {
//     const response = await PrestashopApi.get("/categories");
//     return response.data.categories;
//   } catch (error) {
//     console.error("Erreur pendant la récupération des catégories:", error);
//     throw error;
//   }
// };
