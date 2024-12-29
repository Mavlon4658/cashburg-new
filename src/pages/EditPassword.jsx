import { Link } from "react-router-dom";
import IMG from "../assets/images";
import { useState } from "react";
import PhoneMask from "../components/UI/PhoneMask";
import FormInput from "../components/UI/FormInput";
import MainBtn from "../components/UI/MainBtn";

export default function EditPassword ({ setShow }) {
    setShow(false);

    const [tab, setTab] = useState(1);
    const [send, setSet] = useState(false);

    return (<div className="w-screen h-screen flex items-center justify-center">
        <div className="bg-[#F6F6F6] w-[392px] shrink-0 rounded-[20px] px-[25px] pt-[38px] pb-[29px] relative border border-[#D3D9DD]">
            <Link to={'#'}>
                <img src={IMG.times} alt="" className="absolute top-6 right-[25px]" />
            </Link>
            <h2 className="text-[#111216] text-2xl leading-[29px] font-semibold mb-[41px]">Восстановление пароля</h2>
            <div className="bg-white rounded-[10px] py-3 px-[14px] flex items-center justify-between gap-[35px] mb-[26px]">
                <button 
                    className={`flex gap-[7px] items-center justify-center pt-[13px] pb-3 w-full rounded-[10px] ${tab == 1 ? 'bg-[#D3D9DD]' : ''}`}
                    onClick={() => {
                        setTab(1)
                    }}
                >
                    <img src={IMG.phoneIcon} alt="" />
                    <span className="text-[15px] font-semibold text-[#282B37]">По телефону</span>
                </button>
                <button 
                    className={`flex gap-[7px] items-center justify-center pt-[13px] pb-3 w-full rounded-[10px] ${tab == 2 ? 'bg-[#D3D9DD]' : ''}`}
                    onClick={() => {
                        setTab(2)
                    }}
                >
                    <img src={IMG.emailIcon} alt="" />
                    <span className="text-[15px] font-semibold text-[#282B37]">По E-mail</span>
                </button>
            </div>
            {tab == 1 ?
                <div>
                    <PhoneMask />
                </div> : ''
            }
            {tab == 2 ?
                <div>
                    <FormInput type="email" placeholder="Введите Ваш e-mail" className="" />
                </div> : ''
            }
            <MainBtn className="mt-5 mb-6">Получить пароль</MainBtn>
            <div className="text-center">
                <Link to={'/auth/login'} className="text-[#868A8A] hover:text-[#E28400] active:text-[#111216] text-[15px] font-semibold leading-[18px]">Вход</Link>
            </div>
        </div>
    </div>)
}