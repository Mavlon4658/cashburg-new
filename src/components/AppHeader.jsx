import MainContainer from "./UI/MainContainer"
import IMG from "../assets/images"
import { Link } from "react-router-dom"

export default function AppHeader ({ theme = '', auth = false, className = '' }) {
    return (
        <header className={` ${className}`}>
            <MainContainer className="flex items-center justify-between py-7 md:py-6 relative">
                <a href="#" className="shink-0">
                    <img src={IMG.logo} className="h-[32.29px] md:w-auto" />
                </a>
                <div className="flex items-center gap-[9px]">
                    <Link to={'/auth/login'}>
                        <img src={IMG.loginIcon} alt="" />
                    </Link>
                    <Link to={'/auth/register'} className="text-[13px] font-semibold text-white leading-[17.7px] px-[23.65px] py-[10.1px] bg-[#FF9500] rounded-[10.86px]">Регистрация</Link>
                </div>
            </MainContainer>
        </header>
    )
}