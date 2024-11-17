import { useEffect, useState } from "react";
import Mountain from "./Mountain";


const Mountains = () => {
    const [mountains, setMountains] = useState([]);

    useEffect(()=> {
        fetch("/public/AdventureData.json")
        .then(res => res.json())
        .then(data => setMountains(data))
       

    }, []);
    return (
        <div className="max-w-7xl mx-auto">
            <h1>thsi is mountains : ({mountains.length})</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 ml-4 mt-8 mb-16 ">
                {
                    mountains.map(mountain => (<Mountain key={mountain.id} mountain={mountain}></Mountain>))
                }
            </div>
        </div>
    );
};

export default Mountains;