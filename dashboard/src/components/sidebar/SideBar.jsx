
import './sidebar.css'
import { Apps, Details, AmpStories, SupervisorAccount, AssignmentInd, AccountBalanceWallet,Widgets } from '@material-ui/icons';

export default function SideBar() {
    return (
        <div className='sidebar'>
           <div className='sidebarWrapper'>
               <div className='sidebarMenu'>
                   {/* <h3 className='sidebarTitle'>Dashboard</h3> */}
                   <ul className='sidebarList'>
                       <li className='sidebarListItem'><Apps className='sidebarIcon'/> Dashboard</li>
                       <li className='sidebarListItem'><Details className='sidebarIcon'/> Company Details</li>
                       <li className='sidebarListItem'><AmpStories className='sidebarIcon'/> Projects</li>
                       <li className='sidebarListItem'><SupervisorAccount className='sidebarIcon'/> Clients</li>
                       <li className='sidebarListItem'><AssignmentInd className='sidebarIcon'/> Employees</li>
                       <li className='sidebarListItem'><AccountBalanceWallet className='sidebarIcon'/> Accounts</li>
                       <li className='sidebarListItem'><Widgets className='sidebarIcon'/> Blogs</li>
                   </ul>
               </div>
           </div>
        </div>
    )
}

