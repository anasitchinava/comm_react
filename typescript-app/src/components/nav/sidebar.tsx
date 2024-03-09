import React from 'react';

const navData = [
    {
        name: "Home",
        path: "/",
        icon: "home"
    },
    {
        name: "Profile",
        path: "/profile",
        icon: "profile"
    },
    {
        name: "Groups",
        path: "/groups",
        icon: "groups"
    },
    {
        name: "Notifications",
        path: "/notifications",
        icon: "notifications"
    },
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: "dashboard"
    }
]

const Sidebar = () => {
    return (
        <div className='w-64 bg-white h-screen rounded-r-[30px]'>
            <div className='flex items-center justify-center h-16 bg-white border-b'>
                <div className='flex'>
                    <img src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp" alt="profile image"
                        className='h-[50px] w-[50px] rounded-full object-cover mr-2' />
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-semibold'>Victoria Smith</h2>
                    <p className='text-secondary'>Mentor</p>
                </div>
            </div>
            <div className='flex justify-center align-middle items-center border-b py-5'>
                <input type='text' placeholder='Search' className='bg-transparent border-2 border-color-secondary rounded-3xl p-2'></input>
            </div>
            <ul className='text-black'>
                {
                    navData.map((item, index) => (
                        <li key={index} className='p-4 cursor-pointer hover:bg-bodyBg hover:rounded-3xl'>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar;