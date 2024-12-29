export default function LinkBtn ({ img, to = '#', className = ''}) {
    return (
    <a 
        href={to} 
        className={`group w-[102px] h-[42px] shrink-0 flex items-center justify-center bg-[#111216] active:bg-[#FF9500] rounded-[10px] link-btn ${className}`}
    >
        <img src={img} alt=""/>
    </a>)
}