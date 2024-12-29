import { useState } from "react";
import IMG from "../assets/images";
import LinkBtn from "../components/UI/LinkBtn";
import MainBtn from "../components/UI/MainBtn";
import MainCheckbox from "../components/UI/MainCheckbox";
import PhoneMask from "../components/UI/PhoneMask";
import FormInput from "../components/UI/FormInput";
import SelectCountry from "../components/UI/SelectCountry";
import { Link } from "react-router-dom";

export default function Login () {
    const [tab, setTab] = useState(1);

    return (<div>
        <div className="flex items-start flex-col gap-[9px] mb-5">
            <p className="text-[15px] text-[#868A8A]">Войти через</p>
            <div className="flex justify-between w-full gap-4">
                <LinkBtn img={IMG.telegram} to={'#'} className="w-[103px]"/>
                <LinkBtn img={IMG.google} to={'#'} className="w-[103px]"/>
                <LinkBtn img={IMG.facebook} to={'#'} className="w-[103px]"/>
            </div>
        </div>
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
                <FormInput type='password' placeholder="Пароль" className="mt-[10px]"/>
            </div> : ''
        }
        {tab == 2 ?
            <div>
                <FormInput type="email" placeholder="E-mail" className="" />
                <FormInput type='password' placeholder="Пароль" className="mt-[10px]"/>
            </div> : ''
        }
        <MainBtn className="mt-5 mb-6">Войти</MainBtn>
        <div className="text-center">
            <Link to={'/edit-password'} className="text-[#868A8A] hover:text-[#E28400] active:text-[#111216] text-[15px] font-semibold leading-[18px]">Забыли пароль?</Link>
        </div>
    </div>)
}