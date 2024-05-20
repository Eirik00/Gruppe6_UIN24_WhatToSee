import Nav from "./Nav"

export default function Layout({user, children}){
    return(
        <>
            <Nav user={user}/>
            {children}
        </>
    )
}