import { Link } from "react-router-dom";
import IMG from "../assets/images";
import { useEffect, useState } from "react";
import PhoneMask from "../components/UI/PhoneMask";
import FormInput from "../components/UI/FormInput";
import MainBtn from "../components/UI/MainBtn";
import AppHeader from "../components/AppHeader";

export default function EditPassword ({ setShow }) {
    
    const [tab, setTab] = useState(1);
    const [send, setSend] = useState(false);
    const [sendType, setSendType] = useState('phone');
    const [timeActive, setTimeActive] = useState(false);
    const [time, setTime] = useState(59);
    const [againLInk, setAgainLink] = useState(false);
    
    useEffect(() => {
        setShow(false);
    }, [])

    const startTime = () => setTimeActive(true);
    const stopTime = () => setTimeActive(false);
    
    useEffect(() => {
        let intervalId;
        if (timeActive) {
            intervalId = setInterval(() => {
                setTime((time) => {
                    if (time == 0) {
                        stopTime();
                        setAgainLink(true);
                    } else {
                        return time - 1
                    }
                });
            }, 1000);
        }
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [timeActive])

    const againSendCode = () => {
        setTime(59);
        setAgainLink(false);
        startTime();
    }


    return (<div className="w-screen md:h-screen flex items-center justify-center mt-[93px] md:mt-0">
        <AppHeader className="absolute top-0 left-0 w-full md:hidden" />
        <div className="bg-[#F6F6F6] min-h-[calc(100vh_-_93px)] md:min-h-[auto] w-full md:w-[392px] shrink-0 rounded-[17px_17px_0_0] md:rounded-[20px] px-[22px] md:px-[25px] py-[25px] md:pt-[38px] md:pb-[29px] relative border border-[#D3D9DD]">
            <Link to={'#'} className="hidden md:inline-block">
                <img src={IMG.times} alt="" className="absolute top-6 right-[25px]" />
            </Link>
            <h2 className="text-[#111216] text-2xl leading-[29px] font-semibold text-center md:text-start mb-7 md:mb-[41px]">Восстановление пароля</h2>
            { !send ? 
                <div>
                    <div className="bg-white rounded-[10px] py-3 px-[14px] flex items-center justify-between gap-[35px] mb-[30px] md:mb-[26px]">
                        <button 
                            className={`flex gap-[7px] items-center justify-center pt-[13px] pb-3 w-full rounded-[10px] ${tab == 1 ? 'bg-[#D3D9DD]' : ''}`}
                            onClick={() => {
                                setTab(1);
                                setSendType('phone');
                            }}
                        >
                            <img src={IMG.phoneIcon} alt="" />
                            <span className="text-[15px] font-semibold text-[#282B37]">По телефону</span>
                        </button>
                        <button 
                            className={`flex gap-[7px] items-center justify-center pt-[13px] pb-3 w-full rounded-[10px] ${tab == 2 ? 'bg-[#D3D9DD]' : ''}`}
                            onClick={() => {
                                setTab(2);
                                setSendType('email');
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
                    <MainBtn 
                        className="mt-5 mb-6" 
                        onClick={() => {
                            setSend(true);
                            startTime();
                        }}
                    >Получить пароль</MainBtn>
                </div> :
                <div>
                    { sendType == 'phone' ?
                        <div className="mt-0 md:-mt-[13px] pt-[2px] md:pt-0">
                            <FormInput type="text" placeholder="Введите код из СМС" className="mb-[30px]" />
                            <MainBtn className="mb-[13px]">Восстановить пароль</MainBtn>
                            { !againLInk ? 
                                <p className="text-[#868A8A] text-[15px] mb-[29px] text-center">
                                    Повторить отправить код через {time} сек
                                </p> :
                                <button onClick={() => againSendCode()} className="mb-[29px] text-center text-[#FF9500] underline w-full text-[15px]">Отправить код заново</button>
                            }
                        </div> : ''
                    }
                    {   sendType == 'email' ?
                        <div className="pt-[17px]">
                            <div className="bg-white pt-[15px] pb-4 px-5 text-center text-[15px] font-semibold leading-[18px] rounded-[10px] mb-10">Письмо с восстановлением пароля отправлено вам на Email</div>
                            { !againLInk ? 
                                <p className="text-[#868A8A] text-[15px] mb-[29px] text-center">
                                    Повторить отправить код через {time} сек
                                </p> :
                                <button onClick={() => againSendCode()} className="mb-[29px] text-center text-[#FF9500] underline w-full text-[15px]">Отправить код заново</button>
                            }
                        </div> : ''
                    }
                </div>
            }
            <div className="text-center">
                <Link to={'/auth/login'} className="text-[#868A8A] hover:text-[#E28400] active:text-[#111216] text-[15px] font-semibold leading-[18px]">Вход</Link>
            </div>
        </div>
    </div>)
}