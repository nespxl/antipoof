import { createSlice } from "@reduxjs/toolkit";

interface IItemUser {
    avatar: string
    email: string
    first_name: string
    last_name: string
    id?: number
	like?: boolean
}

interface IPost {
    array: Array<IItemUser>
	isLoading: boolean
	error: string
	flag: boolean
	total: number
	page: string
	pageArray: Array<number>
}

const initialState: IPost = {
	array: [],
	isLoading: false,
	error: '',
	flag: false,
	total: 0,
	page: '1',
	pageArray: [1]
}

export const slicePost = createSlice({
	name: 'slicePost',
	initialState,
	reducers: {
		todoFetch(state) {
			state.isLoading = true
		},
		todoFetchSuccess(state, actions) {
			state.isLoading = false
			state.error = ''
			state.array = actions.payload
		},
		todoFetchError(state) {
			state.isLoading = false
			state.error = 'error'
			state.array = []
		},
		todoFetchPagePagination(state, action) {
			state.total = action.payload
		},
		todoFetchPage(state, action) {
			state.page = action.payload
		},
		todoFetchArrayPage(state, action) {
			state.page = action.payload
		},
	}
})

export default slicePost.reducer
