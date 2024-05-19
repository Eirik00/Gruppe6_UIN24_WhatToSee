import Header from "./Header"
import Nav from "./Nav"

export default function Layout(){
    return(
        <>
            <h2>Test</h2>
            <Header />
            <Nav/>
            {children}
        </>
    )
}