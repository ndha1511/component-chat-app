import ButtonIcon from "../../components/buttons/button-icon/ButtonIcon";
import Search from "../../components/search/Search";
import ChatLayout from "../chat/ChatLayout";
import Header from "../header/Header";
import MessageLayout from "../message/MessageLayout";
import Navbar from "../navbars/Navbar";

function DefaultLayout(props) {
    return (
        <div className="d-flex">
            <Navbar />
            <div
                className="col-xs-12  d-none d-lg-block d-md-block"
                style={{
                    paddingTop: 30,
                    height: "100vh",
                    borderRight: "0.5px solid #f0f0f0"
                }}
            >
                <div className="d-flex" style={{ paddingLeft: 15 }}>
                    <Header />
                </div>
                <div className="pt-3">
                    <ChatLayout />
                </div>
            </div>
            <div className="col-xs-12" style={{ 
                display: "flex",
                // flexDirection: "column",
                flex: 1
             }}>
                <MessageLayout />
            </div>
        </div>
    );
}

export default DefaultLayout;