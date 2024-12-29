import IMG from "../../assets/images";

export default function ({children, className = ''}) {
    return (<div className={`form-checkbox flex items-center gap-3 relative z-[1] ${className}`}>
        <input type="checkbox" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer select-none"/>
        <div className="form-checkbox-icon border border-[#D9DBE9] bg-white rounded-[4.22px] w-[22px] h-[22px] relative">
            <img src={IMG.checkIcon} alt="" className="hidden absolute bottom-[3px] left-[3px] w-[18px]" />
        </div>
        <p className="text-sm leading-[21px] text-[#868A8A]">
            {children}
        </p>
    </div>)
}