import {Main} from "@/components/Main/Main";
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

export default function Home() {
    return (
        <div>
            <div>
                <div className="container mx-auto">
                    <Header/>
                </div>
                <div className="container mx-auto">
                    <Main/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}