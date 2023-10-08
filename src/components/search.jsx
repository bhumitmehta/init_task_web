import React from "react";
import Image from "next/image";
const Search =()=>{
    return (
        <>
        <div className="flex flex-wrap bg-slate-100 rounded-full items-center w-15 h-7">
        <Image src="/search.png" alt="github" width={25} height={25} className="rounded-2xl " />
            <input type="text"  placeholder="Search" className="bg-transparent	outline-none text-stone-950"></input>
        </div>
        </>
    );
}
export default Search;