import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Sidebar from '../includes/Sidebar'
import Routees from '../Routees'

const Layouts = () => {
    return (
        
        <BrowserRouter>
            <Route render={(props) => (
                <div className='layout'>
                    <Sidebar {...props} />
                    <div className='layout__content'>
                        <div className='layout__content-main'>
                            <Routees />
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
        
    )
}

export default Layouts
