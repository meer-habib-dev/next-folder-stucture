import Header from "./Header";
import Footer from "./Footer";

const HomeLayout = ({children}) => {
    return (
        <div className="min-h-screen relative pb-24">
            <Header/>
            {
                children
            }
            <Footer/>
        </div>
    )
}

export default HomeLayout