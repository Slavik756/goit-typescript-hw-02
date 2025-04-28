import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/"

export type UnsplashPhoto = {
  id: string;
  description: string;
  likes: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
    profile_image: {
      small: string;
    };
  };
};

export type UnsplashResponse = {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
};

type Params = {
  query: string;
  client_id: string;
  orientation: string;
  per_page: number;
  page: number;
};

export const fetchFotoWithTopic = async (
  userQuery: string,
  page: number = 1
): Promise<UnsplashResponse> => {
  const params: Params = {
    query: userQuery,
    client_id: "NK1bD71Wv-4_rA1rV7_jYYMNlug4vyuhyBGjVz7MwII",
    orientation: "portrait",
    per_page: 12,
    page,
  };
  const response = await axios.get<UnsplashResponse>("/search/photos", { params });

  return response.data;
};