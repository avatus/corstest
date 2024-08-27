import { useState, useEffect } from "react";
const apiUrl = "https://api.teleport.zarquon.sh:3080";

export default function Home() {
    const [res, setRes] = useState(null);
    useEffect(() => {
        fetch(`${apiUrl}/mydata`, {
            credentials: "include",
            headers: {
                "X-Custom-Header": "value",
            },
        })
            .then((response) => response.json())
            .then((response) => setRes(response));
    }, []);
    return (
        <div>
            <div>hello</div>
            <img src={`${apiUrl}/pic.png`} />
            <div>
                <pre>{JSON.stringify(res)}</pre>
            </div>
        </div>
    );
}
