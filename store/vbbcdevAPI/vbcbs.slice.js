import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vbcb_list = createAsyncThunk(
  "vbcbs/api_v1_vbcb_list",
  async payload => {
    const response = await apiService.api_v1_vbcb_list(payload)
    return response.data
  }
)
export const api_v1_vbcb_create = createAsyncThunk(
  "vbcbs/api_v1_vbcb_create",
  async payload => {
    const response = await apiService.api_v1_vbcb_create(payload)
    return response.data
  }
)
export const api_v1_vbcb_retrieve = createAsyncThunk(
  "vbcbs/api_v1_vbcb_retrieve",
  async payload => {
    const response = await apiService.api_v1_vbcb_retrieve(payload)
    return response.data
  }
)
export const api_v1_vbcb_update = createAsyncThunk(
  "vbcbs/api_v1_vbcb_update",
  async payload => {
    const response = await apiService.api_v1_vbcb_update(payload)
    return response.data
  }
)
export const api_v1_vbcb_partial_update = createAsyncThunk(
  "vbcbs/api_v1_vbcb_partial_update",
  async payload => {
    const response = await apiService.api_v1_vbcb_partial_update(payload)
    return response.data
  }
)
export const api_v1_vbcb_destroy = createAsyncThunk(
  "vbcbs/api_v1_vbcb_destroy",
  async payload => {
    const response = await apiService.api_v1_vbcb_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vbcbsSlice = createSlice({
  name: "vbcbs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_vbcb_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcb_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcb_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcb_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcb_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcb_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcb_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcb_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcb_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcb_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcb_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcb_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcb_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcb_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcb_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcb_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcb_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcb_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_vbcb_list,
  api_v1_vbcb_create,
  api_v1_vbcb_retrieve,
  api_v1_vbcb_update,
  api_v1_vbcb_partial_update,
  api_v1_vbcb_destroy,
  slice: vbcbsSlice
}
