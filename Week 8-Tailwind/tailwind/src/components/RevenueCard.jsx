export const RevenueCrad = () => {
    return <div className="flex flex-col p-3 m-10 shadow-md bg-blue-900 rounded-md text-white w-96">
        <div className="flex justify-between p-2">
            {"Next Payment ?"}
        </div>
        <div className="flex justify-between ">
            <div className="font-bold text-3xl p-2">{"$ 2,312.23"}</div>
            <div className="p-2">{"23 Orders(s) >"}</div>
        </div>
        <div className="flex justify-between ">
            <div className="p-2">{"Next Payment Date: "}</div>
            <div className="p-2">{"Today, 4:00PM"}</div>
        </div>
    </div>
}