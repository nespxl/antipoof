import { useNavigate } from 'react-router-dom'
import '../style/headerItem.css'

export default function HeaderItem() {
    const link = 'item/'
    const url = window.location.href.indexOf(link)
    const idLocation = url + link.length
    const navigate = useNavigate()
    let id: number = Number(window.location.href.slice(idLocation))
    if(id > 6) {
        id -= 6
    }

    const post = JSON.parse(localStorage.getItem(`post11`) || '[]')

    const backForm = () => {
        localStorage.removeItem('autoriz')
    }

    const backPage = () => {
        navigate(-1)
    }

    return (
        <header className="headerItem">
            <img src={post[id-1]?.avatar} alt="аватар" className="headerItem__img" />
            <div className="headerItem__info">
                <p className="headerItem__name">{post[id-1]?.first_name} {post[id-1]?.last_name}</p>
                <p className="headerItem__description">Партнер</p>
            </div>
            <a href="/" className="header__back" onClick={() => backForm()}>Выход</a>
            <a href="/" className='header__backSmall'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.79 24.29C19.18 24.68 19.81 24.68 20.2 24.29L23.79 20.7C23.8827 20.6075 23.9563 20.4976 24.0064 20.3766C24.0566 20.2557 24.0824 20.126 24.0824 19.995C24.0824 19.864 24.0566 19.7343 24.0064 19.6134C23.9563 19.4924 23.8827 19.3825 23.79 19.29L20.2 15.7C20.013 15.513 19.7594 15.408 19.495 15.408C19.2306 15.408 18.977 15.513 18.79 15.7C18.603 15.887 18.498 16.1406 18.498 16.405C18.498 16.6694 18.603 16.923 18.79 17.11L20.67 19H12C11.45 19 11 19.45 11 20C11 20.55 11.45 21 12 21H20.67L18.79 22.88C18.4 23.27 18.41 23.91 18.79 24.29ZM27 11H13C12.4696 11 11.9609 11.2107 11.5858 11.5858C11.2107 11.9609 11 12.4696 11 13V16C11 16.55 11.45 17 12 17C12.55 17 13 16.55 13 16V14C13 13.45 13.45 13 14 13H26C26.55 13 27 13.45 27 14V26C27 26.55 26.55 27 26 27H14C13.45 27 13 26.55 13 26V24C13 23.45 12.55 23 12 23C11.45 23 11 23.45 11 24V27C11 28.1 11.9 29 13 29H27C28.1 29 29 28.1 29 27V13C29 11.9 28.1 11 27 11Z" fill="#F8F8F8"/>
                </svg>
            </a>
            <button className="headerItem__back" onClick={() => backPage()}>Назад</button>
            <button className="headerItem__backSmall" onClick={() => backPage()}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8375 27.0013C22.6881 27.0018 22.5405 26.9688 22.4055 26.9048C22.2705 26.8407 22.1516 26.7473 22.0575 26.6313L17.2275 20.6313C17.0804 20.4523 17 20.2279 17 19.9963C17 19.7646 17.0804 19.5402 17.2275 19.3613L22.2275 13.3613C22.3972 13.157 22.6411 13.0286 22.9056 13.0042C23.17 12.9799 23.4333 13.0615 23.6375 13.2313C23.8417 13.401 23.9701 13.6449 23.9945 13.9093C24.0189 14.1738 23.9372 14.437 23.7675 14.6413L19.2975 20.0013L23.6175 25.3613C23.7398 25.508 23.8174 25.6868 23.8413 25.8763C23.8652 26.0659 23.8343 26.2583 23.7522 26.4308C23.6702 26.6034 23.5404 26.7488 23.3783 26.8499C23.2162 26.9509 23.0285 27.0035 22.8375 27.0013Z" fill="#F8F8F8"/>
                </svg>
            </button>
        </header>
    )
}
