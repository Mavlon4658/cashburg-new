import IMG from "../assets/images";

export default function PhoneMask () {
    return (<div>
        <div className="bg-white border border-[#D3D9DD] rounded-[10px] h-[43px] flex items-center overflow-hidden">
            <div className="flex items-center h-full px-[10px] border-r border-[#D3D9DD] shrink-0 cursor-pointer select-none">
                <img src={IMG.flagKZ} alt="" />
                <div className="text-[15px] font-semibold text-[#D3D9DD] ml-2 mr-[6px]">+7</div>
                <img src={IMG.arrowDown} alt="" />
            </div>
            <input type="tel" className="h-full w-full px-3 text-[15px] font-semibold text-black placeholder:text-[#D3D9DD] outline-none" placeholder="Мобильный телефон" />
        </div>
    </div>)
}