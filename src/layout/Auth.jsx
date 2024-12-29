import { Link, Outlet, useLocation } from "react-router-dom"
import IMG from "../assets/images"

export default function Auth ({setShow}) {
    const location = useLocation();
    setShow(false);

    return (<div className="h-screen w-screen flex items-center justify-center text-white">
        <div className="flex items-stretch gap-[25px]">
            <div className="bg-[#F6F6F6] w-[392px] rounded-[20px] border border-[#D3D9DD]">
                <div className="flex items-center justify-between p-[20px_25px_0] text-[#868A8A] text-[19px] font-semibold border-b border-[#D9D9D9]">
                    <div className="flex items-center gap-[18px]">
                        <Link
                            to={'/auth/register'} 
                            className={`pb-[13px] border-b-2 mb-[-1px] ${location.pathname == '/auth/register' ? 'border-b-[#FF9500] text-[#111216]' : 'border-b-transparent'}`}
                        >Регистрация</Link>
                        <Link
                            to={'/auth/login'} 
                            className={`pb-[13px] border-b-2 mb-[-1px] ${location.pathname == '/auth/login' ? 'border-b-[#FF9500] text-[#111216]' : 'border-b-transparent'}`}
                        >Вход</Link>
                    </div>
                    <button>
                        <img src={IMG.times} alt="" />
                    </button>
                </div>
                <div className="p-[30px_25px]">
                    <Outlet />
                </div>
            </div>
            <div className={`bg-custom-gradient w-[392px] rounded-[20px] ${location.pathname != '/auth/register' ? 'hidden' : ''}`}>
                <div className="flex items-center justify-center p-3 pt-6 border-b border-b-[#2C2C2E]">
                    <p className="text-xl leading-[25px] font-semibold">Доступно после регистрации:</p>
                </div>
                <div className="p-[21px] pt-[18px] relative">
                    <div className="bg-[#111216] rounded-[26px] px-6 pt-7 pb-[65px] relative z-[1] overflow-hidden mb-[25px]">
                        <h3 className="text-3xl leading-[119.2%] font-extrabold mb-[15px]"><span className="text-[#FF9500]">Мощные</span> бонусы</h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-[10px]">
                                <img src={IMG.icon1} alt="" className="w-10 shrink-0" />
                                <h4 className="text-xl font-bold">До 500FS</h4>
                            </li>
                            <li className="flex items-center gap-[10px]">
                                <img src={IMG.icon2} alt="" className="w-10 shrink-0" />
                                <div>
                                    <h4 className="text-xl font-bold">До 300%</h4>
                                    <p className="text-[#D3D9DD] text-sm leading-[17px] font-medium">на пополнение</p>
                                </div>
                            </li>
                        </ul>
                        <img src={IMG.bgCircle1} alt="" className="absolute bottom-0 right-0 z-[-1]" />
                    </div>
                    <div className="bg-[#111216] rounded-[26px] text-right px-7 pt-5 pb-[109px] relative z-[1] overflow-hidden">
                        <h3 className="text-3xl leading-[119.2%] font-extrabold mb-[11px]">
                            <span className="text-[#FF9500]">Возврат</span> <br /> части проигрыша
                        </h3>
                        <p className="text-base leading-[19px]">Компенсируем 15-20% от <br /> проигранных средств</p>
                        <img src={IMG.bgCircle2} alt="" className="absolute z-[-1] bottom-0 left-0" />
                        <img src={IMG.bgImg1} alt="" className="w-[133px] absolute left-[9px] bottom-0 z-[-1]" />
                    </div>
                    <img src={IMG.coin1} alt="" className="absolute w-[72px] right-[45px] top-[117px] z-[2]" />
                    <img src={IMG.coin2} alt="" className="absolute w-[75px] top-[239px] left-[31px] z-[2]" />
                    <img src={IMG.coin3} alt="" className="absolute w-[45px] right-[55px] top-[248px] z-[2]" />
                    <img src={IMG.coin4} alt="" className="absolute w-[45px] right-[65px] bottom-[41px] z-[2]" />
                </div>
            </div>
        </div>
    </div>)
}