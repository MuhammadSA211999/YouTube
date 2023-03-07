import axios from "../../utils/axios";


export const getRelatedVideos = async (tags, id) => {
    const limit = 5
    //videos?tags_like=java&tags_like=react&id_ne=3&_limit=5
    //['tags_like=java','tags_like=java']
    let queryString = null
    queryString = tags?.length > 0 ?
        tags?.map(tag => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}`
        : `id_ne=${id}&_limit=${limit}`
    const response = await axios.get(`/videos?${queryString}`);

    return response.data;
};
