import { useAppDispatch, useAppSelector } from "../hooks/customHookQuery"
import { slicePost } from "../store/arrayList"
import '../style/pagination.css'
import { IPaginationArray } from "../interface/app.interface"

const arrayListPage: Array<IPaginationArray> = []

export default function Pagination() {
    const dispatch = useAppDispatch()
    const {total} = useAppSelector(state => state.slicePostArray)
    const pagePagination = Math.ceil(total / 6)
    if(arrayListPage.length === 0) {
        for(let i = 0; i < pagePagination; i++) {
            arrayListPage.push({})
            arrayListPage[i].active = false
            arrayListPage[0].active = true
            arrayListPage[i].page = i + 1
        }
    }

    const setPage = (e: React.ChangeEvent<HTMLInputElement> | any) => {
        dispatch(slicePost.actions.todoFetchPage(e.target.innerHTML.trim()))
        const pageArray = JSON.parse(localStorage.getItem('pageArray') || '[]')
        for(let i = 0; i < pagePagination; i++) {
            if(i === Number(e.target.innerHTML.trim()) - 1) {
                arrayListPage[i].active = true
            } else {
                arrayListPage[i].active = false
            }
        }
        pageArray.push(Number(e.target.innerHTML.trim()))
        localStorage.setItem('pageArray', JSON.stringify(pageArray))
    }

    return (
        <div className="containerPagination">
            {arrayListPage.map((elem: IPaginationArray) => <button key={elem.page} onClick={(e) => setPage(e)} className={elem.active ? 'paginationActive' : 'pagination'}>{elem.page}</button>)}
        </div>
    )
}
