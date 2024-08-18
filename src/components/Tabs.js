import React from 'react';

const Tabs = ({ page, setPage }) => {
    const tabs = ['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'];

    return (
        <div className="py-2 flex flex-wrap gap-2">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    value={tab}
                    onClick={(e) => setPage(e.target.value)}
                    className={`mx-2 px-4 py-2  focus:outline-none active:outline-none
                                ${page === tab ? 'border-b-2 border-blue-500 text-black' : 'text-gray-500'}`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
