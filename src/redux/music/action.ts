import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMusicApi } from "../../api/music/music";

export const getMusic = createAsyncThunk(
    'api/services/app/music/getAllSong',
    async () => {
        const response = await getMusicApi()
        return response.songs
      }
)