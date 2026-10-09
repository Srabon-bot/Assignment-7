"use client";

import { useEffect, useState } from "react";

const CurrentDate = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(
            new Date().toLocaleDateString("bn-BD", {
                dateStyle: "full",
                timeZone: "Asia/Dhaka",
            })
        );
    }, []);

    return <span className="text-xs text-base-content/70">{date}</span>;
};

export default CurrentDate;