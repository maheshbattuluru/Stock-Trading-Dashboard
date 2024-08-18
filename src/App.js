import React, { useState } from 'react';
import Header from './components/Header';
import ChartComponent from './components/Chart';
import Tabs from './components/Tabs';

function App() {

    const [Page,setPage]=useState('Chart')
    return (
        <div className="font-sans text-gray-800 bg-gray-100 min-h-[100vh] md:pl-5 ">
            <Header price={63179.71} change={2161.42} />
            <Tabs page={Page} setPage={setPage}/>
            {
                Page==='Chart' && <ChartComponent />
            }
            {
                Page==='Summary' && <div className='mt-5 text-xl font-bold'>This is Summary</div>
            }
            {
                Page==='Statistics' && <div className='mt-5 text-xl font-bold'>This is Statistics</div>
            }
            {
                Page==='Analysis' && <div className='mt-5 text-xl font-bold'>This is Analysis</div>
            }
            {
                Page==='Settings' && <div className='mt-5 text-xl font-bold'>This is Settings</div>
            }
            
            
        </div>
    );
}

export default App;
