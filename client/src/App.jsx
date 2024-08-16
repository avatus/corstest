import { useState, useEffect } from "react";
export default function Home() {
    const [res, setRes] = useState(null);
    useEffect(() => {
        fetch("https://api.teleport.zarquon.sh:3080/thing", {
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
            <img src="https://api.teleport.zarquon.sh:3080/pic.png" />
            <div>
                <pre>{JSON.stringify(res)}</pre>
            </div>
        </div>
    );
}
