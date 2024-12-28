export default function LinkBtn ({ img, to = '#', className = ''}) {
    return (
    <a 
        href={to} 
        className={`group w-[102px] h-[42px] shrink-0 flex items-center justify-center bg-[#111216] rounded-[10px] active:bg-[#FF9500] ${className}`}
    >
        <img src={img} alt="" className="brightness-[100] group-hover:brightness-[0] saturate-[100%] group-hover:saturate-[0%]"/>
    </a>)
}