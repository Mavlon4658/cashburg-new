import IMG from "../../assets/images";
import { withMask } from 'use-mask-input';
import country from './countryPhone.json';
import countries from 'countries-phone-masks'
import { useState } from "react";

export default function PhoneMask () {
    const [selected, setSelected] = useState(countries.filter(a => a.iso == 'KZ')[0]);
    const [openCountryList, setOpenCountryList] = useState(false)

    return (<div className="relative">
        <div className="bg-white border border-[#D3D9DD] rounded-[10px] h-[43px] flex items-center overflow-hidden">
            <div onClick={() => {setOpenCountryList(!openCountryList)}} className="flex items-center h-full px-[10px] border-r border-[#D3D9DD] shrink-0 cursor-pointer select-none">
                <img src={`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${selected?.iso}.svg`} className="w-[25px] h-[25px] shrink-0 object-contain" alt="" />
                <div className="text-[15px] font-semibold text-[#111216] ml-2 mr-[6px]">{selected?.code}</div>
                <img src={IMG.arrowDownBlack} alt="" />
            </div>
            <input
                type="text"
                ref={withMask(selected?.mask)}
                className="h-full w-full px-3 text-[15px] font-semibold text-black placeholder:text-[#D3D9DD] outline-none"
                placeholder="Мобильный телефон" 
            />
        </div>
        <ul className={`absolute max-h-[198px] w-full left-0 bottom-[-11px] translate-y-full overflow-y-scroll bg-[#111216] border border-[#D3D9DD] z-[5] rounded-[10px] ${!openCountryList ? 'hidden' : ''}`}>
            {countries.map((data, dataID) => (
                <li 
                    key={dataID} 
                    className="flex items-center py-[3px] px-[15px] gap-[13px] hover:bg-[rgba(211,217,221,0.22)] cursor-pointer select-none"
                    onClick={() => {
                        setSelected(data);
                        setOpenCountryList(false);
                    }}
                >
                    <img src={`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${data.iso}.svg`} alt="" className="w-[25px] h-[25px] object-cover rounded-[6px] shrink-0" />
                    <p className="text-[#B9B9B9] text-[15px] font-semibold">
                        {data.code} ({data.name})
                    </p>
                </li>
            ))}
        </ul>
    </div>)
}