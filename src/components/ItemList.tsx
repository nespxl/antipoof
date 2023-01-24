import '../style/itemList.css'
import { useState } from 'react'
import { useAppSelector } from '../hooks/customHookQuery'
import { IItemUser } from '../interface/app.interface'

export default function ItemList({first_name, last_name, avatar, email, id}: IItemUser) {
    const [like, setLike] = useState(false)
    // const {page} = useAppSelector(state => state.slicePostArray)
    const pageUsers = JSON.parse(localStorage.getItem('setPage') || '[]')
    const postCount = 6
    let ordinalNumberArray = Number(id) - 1

    if(ordinalNumberArray >= postCount) {
        ordinalNumberArray -= postCount
    }

    const addLike = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setLike(!like)
        const postPage = JSON.parse(localStorage.getItem(`post${pageUsers}`) || '[]')
        if(ordinalNumberArray > postCount) {
            ordinalNumberArray -= postCount
            if(postPage[ordinalNumberArray]?.like) {
                postPage[ordinalNumberArray].like = false
            } else {
                postPage[ordinalNumberArray].like = true
            }
        } else {
            if(postPage[ordinalNumberArray]?.like) {
                postPage[ordinalNumberArray].like = false
            } else {
                postPage[ordinalNumberArray].like = true
            }
        }
        localStorage.setItem(`post${pageUsers}`, JSON.stringify(postPage))
    }

    const postPage: Array<IItemUser> = JSON.parse(localStorage.getItem(`post${pageUsers}`) || '[]')

    return (
        <a href={`/list/${pageUsers}/item/${id}`} className="itemList">
            <img src={avatar} alt="картинка" className="itemList__img" />
            <p className="itemList__name">{first_name} {last_name}</p>
            <button onClick={(e) => addLike(e)} className={postPage[ordinalNumberArray]?.like ? 'itemList__like_active' : 'itemList__like'}>
                <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="28" rx="4" fill="#fafafa"/>
                    <path d="M11.85 8C9.72375 8 8 9.72173 8 11.8455C8 15.691 12.55 19.1869 15 20C17.45 19.1869 22 15.691 22 11.8455C22 9.72173 20.2762 8 18.15 8C16.848 8 15.6965 8.64569 15 9.63398C14.645 9.1289 14.1734 8.71669 13.625 8.43226C13.0767 8.14784 12.4679 7.99956 11.85 8Z" stroke="#151317" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </a>
    )
}
