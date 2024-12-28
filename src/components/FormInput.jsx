import { useState } from "react";
import IMG from "../assets/images";

export default function FormInput ({type = 'text', className = '', placeholder = ''}) {
    const [showPassword, setShowPassword] = useState(false);
    return (<div className={className}>
        {type === 'password' ?
            <div className="relative">
                <input type={`${showPassword ? 'text' : 'password'}`} className="outline-none border border-[#D3D9DD] text-black placeholder:text-[#D3D9DD] bg-white h-[43px] w-full rounded-[10px] text-[15px] font-semibold px-[15px]" placeholder={placeholder} /> 
                <button onClick={() => {setShowPassword(!showPassword)}} className="absolute right-[15px] top-1/2 -translate-y-1/2">
                    {showPassword ?
                        <img src={IMG.hideEye} alt="" /> :
                        <img src={IMG.eye} alt="" />
                    }
                </button>
            </div> :
            <input type="tel" className="h-[43px] w-full px-3 text-[15px] font-semibold rounded-[10px] border border-[#D3D9DD] text-black placeholder:text-[#D3D9DD] outline-none" placeholder={placeholder} />
        }
    </div>)
}