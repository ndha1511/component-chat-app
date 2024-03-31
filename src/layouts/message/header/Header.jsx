import Avatar from "../../../components/avatar/Avatar";
import ButtonGroup from "../../../components/buttons/button-group/ButtonGroup";

function Header() {
    const buttons = [
        {
            item: <i className="bi bi-search"></i>,
            title: "Tìm kiếm tin nhắn"
        },
        {
            item: <i className="bi bi-telephone"></i>,
            title: "Cuộc gọi thoại"
        },
        {
            item: <i className="bi bi-camera-video"></i>,
            title: "Gọi video"
        }
    ]
    return (
        <div className="d-flex w-100 p-3" style={{ height: "100%", 
        justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f0f0f0" }}>
            <div className="d-flex">
                <Avatar/>
                <h4>User name</h4>
            </div>
            <div className="action">
                <ButtonGroup buttons={buttons} className="btn-hover" width={40} height={40} hoverColor="#f0f0f0"/>
            </div>
        </div>
    );
}

export default Header;