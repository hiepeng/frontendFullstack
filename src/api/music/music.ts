import { getApi } from "../../utils/apiHelper"

export const getMusicApi = async () => {
    const response = await getApi('api/services/app/music/getAllSong')
    return response
}