import { useState } from "react"
import IMG from "../../assets/images";
import country from './country.json';

export default function SelectCountry ({className = ''}) {
    const [list, setList] = useState([
        {img: IMG.flagKZ, name: 'Казахстан'},
        {img: IMG.flagKZ, name: 'Украина'},
        {img: IMG.flagKZ, name: 'Беларусь'},
        {img: IMG.flagKZ, name: 'Россия'},
        {img: IMG.flagKZ, name: 'Румыния'},
        {img: IMG.flagKZ, name: 'Украина'},
        {img: IMG.flagKZ, name: 'Беларусь'},
        {img: IMG.flagKZ, name: 'Россия'},
        {img: IMG.flagKZ, name: 'Румыния'},
        {img: IMG.flagKZ, name: 'Украина'},
        {img: IMG.flagKZ, name: 'Беларусь'},
        {img: IMG.flagKZ, name: 'Россия'},
        {img: IMG.flagKZ, name: 'Румыния'},
        {img: IMG.flagKZ, name: 'Украина'},
        {img: IMG.flagKZ, name: 'Беларусь'},
        {img: IMG.flagKZ, name: 'Россия'},
        {img: IMG.flagKZ, name: 'Румыния'},
        {img: IMG.flagKZ, name: 'Россия'},
    ]);
    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false)

    return (<div className={`relative ${className}`}>
        <p className="text-[#868A8A] text-[15px] font-medium mb-[5px]">Выберите страну</p>
        <button onClick={() => {setOpen(!open)}} className="border border-[#D3D9DD] w-full bg-white flex items-center justify-between rounded-[10px] h-[43px] pl-[15px] pr-[23px]">
            { selected ? 
                <span className="flex items-center gap-[11px]">
                    <img src={selected.image} alt="" className="w-[25px] h-[25px] object-contain" />
                    <span className="text-[rgb(40,43,55)] text-[15px] font-semibold">{selected.name}</span>
                </span> :
                <span className="text-[#D3D9DD] text-[15px] font-semibold">Поиск по стране</span>
            }
            <img src={IMG.arrowDownBlack} alt="" />
        </button>
        <ul className={`absolute left-0 -bottom-[11px] translate-y-full rounded-[10px] w-full max-h-[198px] bg-[#111216] z-[5] overflow-y-scroll py-[13px] border border-[#D3D9DD] ${ !open ? 'hidden' : '' }`}>
            {country.map((item, itemId) => (
                <li
                    key={itemId}
                    className="flex items-center px-[15px] py-[3px] gap-[13px] hover:bg-[rgba(211,217,221,0.22)] cursor-pointer select-none border-b border-b-[rgba(211,217,221,0.22)]"
                    onClick={() => {
                        setOpen(false);
                        setSelected(item)
                    }}
                >
                    <img src={item.image} alt="" className="w-[25px] h-[25px] rounded-[6px] object-cover" />
                    <p className="text-[15px] font-semibold text-[#B9B9B9]">{item.name}</p>
                </li>
            ))}
        </ul>
    </div>)
}