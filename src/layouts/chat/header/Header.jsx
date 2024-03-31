import ButtonGroup from "../../../components/buttons/button-group/ButtonGroup";

function Header() {
    const buttons = [
        {
            item: "Tất cả"
        },
        {
            item: "Chưa đọc"
        }
    ] 
    return (
        <div className="d-flex w-100" style={{ 
            borderBottom: "1px solid #f0f0f0",
            paddingLeft: 15
         }}>
            <ButtonGroup buttons={buttons} className="btn-hover" 
            colorActive="blue"
            hoverColor="none"
            fontWeight="bold"
            textHoverColor="blue"
            active={0}
            />
        </div>
    );
}

export default Header;