
export default ({children}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <div className="border-b text-center">
                30 % off for next 3 days, signup now
            </div>
            {children}
        </div>
    )
}