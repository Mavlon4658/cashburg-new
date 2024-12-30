export default function MainContainer ({ children, className = '' }) {
    const cls = 'w-[calc(100%_-_40px)] xl:w-[1180px] mx-auto ' + className;
    return (
        <div className={cls}>
            {children}
        </div>
    )
}