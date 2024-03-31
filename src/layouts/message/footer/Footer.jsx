import ButtonGroup from "../../../components/buttons/button-group/ButtonGroup";


function Footer() {
    const buttons =[
        {
            item: <img src="/assets/icons/sticker-icon.png" width={20} height={20}/>,
            title: "Gửi sticker"
        
        },
        {
            item: <label htmlFor="image" style={{ cursor: "pointer" }}>
                <input id="image" type="file" accept="image/*" style={{ display: "none" }}/>
                <i className="bi bi-image" style={{ fontSize: 20 }}></i>
            </label>,
            title: "Gửi hình ảnh"
        },
        {
            
            item: <label htmlFor="attachFile" style={{ cursor: "pointer" }}>
                <input id="attachFile" type="file" style={{ display: "none" }}/>
                <i className="bi bi-paperclip" style={{ fontSize: 20 }}></i>
            </label>,
            title: "Đính kèm file"
        }
    ]
    return (
        <div className="d-flex w-100" style={{ height: "100%", flexDirection: 'column' }}>
            <div className="d-flex w-100" style={{ paddingLeft: 15, height: "50%", alignItems: "center" }}>
                <ButtonGroup buttons={buttons} className="btn-hover"
                    marginRight={15}
                    width={40} height={40}
                    hoverColor="#f0f0f0"
                />
            </div>
            <div className="d-flex w-100" style={{ height: "45%" }}>
                <label htmlFor="input-msg" style={{ width: "100%"  }}>
                    <textarea id="input-msg" style={{ width: "100%", height: "100%"  }}>
                    </textarea>
                </label>
            </div>
        </div>
    );
}

export default Footer;