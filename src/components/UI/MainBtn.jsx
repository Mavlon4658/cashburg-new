export default function MainBtn ({ children, className = "" }) {
    return (<button className={`w-full flex items-center justify-center text-center bg-[#FF9500] rounded-[10px] h-[51px] text-[19px] text-[#F6F6F6] font-semibold active:bg-[#111216] ${className}`}>
        {children}
    </button>)
}