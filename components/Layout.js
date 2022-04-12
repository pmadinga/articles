import Siteheader from "./Siteheader"

const Layout = ({ children }) =>{
    return(
        <div>
            <Siteheader/>
            {children}
        </div>
    )
}

export default Layout;