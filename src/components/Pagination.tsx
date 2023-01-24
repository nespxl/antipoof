import { useAppDispatch, useAppSelector } from "../hooks/customHookQuery"
import { slicePost } from "../store/arrayList"
import '../style/pagination.css'
import { IPaginationArray } from "../interface/app.interface"

const arrayListPage: Array<IPaginationArray> = []

export default function Pagination() {
    const dispatch = useAppDispatch()
    const { total } = useAppSelector(state => state.slicePostArray)
    const pagePagination = Math.ceil(total / 6)
    if (arrayListPage.length === 0) {
        for (let i = 0; i < pagePagination; i++) {
            arrayListPage.push({})
            arrayListPage[i].active = false
            arrayListPage[0].active = true
            arrayListPage[i].page = i + 1
        }
    }

    console.log(window.location.href.indexOf('/list/2'))

    let pageUsers = null

    if (localStorage.getItem('setPage') === null) {
        localStorage.setItem('setPage', JSON.stringify(1))
    } else {
        pageUsers = JSON.parse(localStorage.getItem('setPage') || '[]')
    }

    for (let i = 0; i < pagePagination; i++) {
        if (i === Number(pageUsers) - 1) {
            arrayListPage[i].active = true
        } else {
            arrayListPage[i].active = false
        }
    }

    const setPage = (e: React.ChangeEvent<HTMLInputElement> | any) => {
        console.log(window.location.href)
        dispatch(slicePost.actions.todoFetchPage(e.target.innerHTML.trim()))
        const pageArray = JSON.parse(localStorage.getItem('pageArray') || '[]')
        localStorage.setItem('setPage', JSON.stringify(e.target.innerHTML.trim()))
        const domain = window.location.href.slice(0, window.location.href.indexOf('/list/'))
        console.log(domain)
        window.location.href = domain + `/list/${e.target.innerHTML.trim()}`
        pageArray.push(Number(e.target.innerHTML.trim()))
        localStorage.setItem('pageArray', JSON.stringify(pageArray))
    }

    return (
        <div className="containerPagination">
            {arrayListPage.map((elem: IPaginationArray) => <button key={elem.page} onClick={(e) => setPage(e)} className={elem.active ? 'paginationActive' : 'pagination'}>{elem.page}</button>)}
        </div>
    )
}
