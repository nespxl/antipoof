import axios from 'axios';
import { AppDispatch } from '../store';
import { slicePost } from '../store/arrayList';

export const API = (API: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(slicePost.actions.todoFetch())
		const response = await axios.get(API)
		dispatch(slicePost.actions.todoFetchSuccess(response.data.data))
		dispatch(slicePost.actions.todoFetchPagePagination(response.data.total))
	} catch (error) {
		dispatch(slicePost.actions.todoFetchError())
	}
}
