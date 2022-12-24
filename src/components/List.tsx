import HeaderList from "./HeaderList";
import '../style/list.css'
import ItemList from "./ItemList";
import {  useAppSelector } from "../hooks/customHookQuery";
import Pagination from "./Pagination";
import { IItemUser } from "../interface/app.interface";

export default function List() {
    const {array, page} = useAppSelector(state => state.slicePostArray)
    let arrayPost: Array<IItemUser> = JSON.parse(localStorage.getItem(`post${page}`) || '[]')

    if(arrayPost.length === 0) {
        localStorage.setItem(`post${page}`, JSON.stringify(array))
        arrayPost = JSON.parse(localStorage.getItem(`post${page}`) || '[]')
    }

    if(arrayPost.length !== 0) {
        localStorage.setItem(`post${page+1}`, JSON.stringify(array))
        arrayPost = JSON.parse(localStorage.getItem(`post${page+1}`) || '[]')
    }

    return (
        <div className="containerPost">
            <HeaderList />
            <div className="containerList">
                {array.map((elem: IItemUser) =>
                    <ItemList key={elem.id} first_name={elem.first_name} last_name={elem.last_name} avatar={elem.avatar} email={elem.email} id={elem.id} />
                )}
            </div>
            <Pagination />
        </div>
    )
}
