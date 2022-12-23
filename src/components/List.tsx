import HeaderList from "./HeaderList";
import '../style/list.css'
import ItemList from "./ItemList";
import {  useAppSelector } from "../hooks/customHookQuery";
import Pagination from "./Pagination";

interface IItemUser {
    avatar: string
    email: string
    first_name: string
    last_name: string
    id?: number
}

export default function List() {

    const {array, page} = useAppSelector(state => state.slicePostArray)
    let r = JSON.parse(localStorage.getItem(`post${page}`) || '[]')

    const pageUrl = JSON.parse(localStorage.getItem('pageArray') || '[]')

    if(r.length === 0) {
        localStorage.setItem(`post${page}`, JSON.stringify(array))
        r = JSON.parse(localStorage.getItem(`post${page}`) || '[]')
    }

    if(pageUrl[pageUrl.length-2] !== pageUrl[pageUrl.length-1]) {
        console.log('???')
        if(localStorage.getItem(`post${page}`) === null) {
            console.log('опа такого еще нет')
            localStorage.setItem(`post${page}`, JSON.stringify(array))
            r = JSON.parse(localStorage.getItem(`post${page}`) || '[]')
        }
    }

    return (
        <div className="containerPost">
            <HeaderList />
            <div className="containerList">
                {r.map((elem: IItemUser) =>
                    <ItemList key={elem.id} first_name={elem.first_name} last_name={elem.last_name} avatar={elem.avatar} email={elem.email} id={elem.id} />
                )}
            </div>
            <Pagination />
        </div>
    )
}
