import React from "react";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="h-screen w-[250px] bg-black">
            <div className="flex justify-between items-center text-white py-5 flex-col h-full">
                <div className="flex">History Guide</div>
                <div className="flex flex-col">
                    <ul className="flex gap-5 flex-col ">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/quiz">Test Yourself</Link>
                        </li>
                        <li>
                            <Link href="/login">Become an Editor</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex">
                    <button>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;