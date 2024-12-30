import { useState } from "react";
import IMG from "../assets/images";
import LinkBtn from "../components/UI/LinkBtn";
import MainBtn from "../components/UI/MainBtn";
import MainCheckbox from "../components/UI/MainCheckbox";
import PhoneMask from "../components/UI/PhoneMask";
import FormInput from "../components/UI/FormInput";
import SelectCountry from "../components/UI/SelectCountry";
import AppHeader from "../components/AppHeader";

export default function Register () {
    const [tab, setTab] = useState(1);

    return (<div>
        <AppHeader className="absolute top-0 left-0 w-full md:hidden" />
        <p className="md:hidden text-[#111216] text-[23px] font-semibold pb-[10px] border-b border-b-[#D9D9D9] w-[calc(100%_+_44px)] ml-[-22px] px-[22px] mb-[22px]">Доступно после регистрации:</p>
        <div className="relative mb-[27px] md:hidden">
            <div className="bg-[#111216] rounded-[12px] px-[15px] pt-[17px] pb-[14px] relative z-[1] overflow-hidden mb-[14px]">
                <h3 className="text-xl leading-[119.2%] font-extrabold mb-[5px]"><span className="text-[#FF9500]">Мощные</span> бонусы</h3>
                <ul className="flex items-start gap-5">
                    <li className="flex items-center gap-[6px]">
                        <img src={IMG.icon1} alt="" className="w-[27px] shrink-0" />
                        <h4 className="text-sm font-bold">До 500FS</h4>
                    </li>
                    <li className="flex items-start gap-[6px]">
                        <img src={IMG.icon2} alt="" className="w-[27px] shrink-0" />
                        <div className="pt-[5px]">
                            <h4 className="text-sm font-bold">До 300%</h4>
                            <p className="text-[#D3D9DD] text-[10px] leading-[12px] font-medium">на пополнение</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="bg-[#111216] rounded-[12px] px-[15px] pt-[17px] pb-[13px] relative z-[1] overflow-hidden">
                <h3 className="text-xl leading-[119.2%] font-extrabold mb-[3px]">
                    <span className="text-[#FF9500]">Возврат</span> части проигрыша
                </h3>
                <p className="text-base leading-[19px]">Компенсируем 15-20% от <br /> проигранных средств</p>
                <img src={IMG.bgImg1} alt="" className="w-[82px] absolute right-[-10px] bottom-[-15px] z-[-1]" />
            </div>
            <img src={IMG.coin1} alt="" className="absolute w-[51px] right-[47px] top-[5px] z-[2]" />
            <img src={IMG.coin2} alt="" className="absolute w-[55px] top-[63px] right-[6px] z-[2]" />
        </div>
        <div className="flex items-start flex-col gap-3 md:gap-[9px] mb-5">
            <p className="text-[15px] text-[#868A8A]">Зарегистрироваться через</p>
            <div className="flex justify-between w-full gap-4">
                <LinkBtn img={IMG.telegram} to={'#'} className="w-[calc(100%_/_3_-_32px_/_3)] md:w-[103px]"/>
                <LinkBtn img={IMG.google} to={'#'} className="w-[calc(100%_/_3_-_32px_/_3)] md:w-[103px]"/>
                <LinkBtn img={IMG.facebook} to={'#'} className="w-[calc(100%_/_3_-_32px_/_3)] md:w-[103px]"/>
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
                <SelectCountry className="mt-[11px]" />
            </div> : ''
        }
        <MainBtn className="mt-5 mb-6">Зарегистрироваться</MainBtn>
        <MainCheckbox className="mt-6 mb-[13px]">Получать информацию об акциях и бонусах</MainCheckbox>
        <MainCheckbox>Я старше 18 лет</MainCheckbox> 
    </div>)
}