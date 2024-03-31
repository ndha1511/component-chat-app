import { useState } from "react";
import ButtonGroup from "../../components/buttons/button-group/ButtonGroup";
import Search from "../../components/search/Search";
import { Modal } from "react-bootstrap";


function Header() {
    const [show, setShow] = useState(false);
    const buttons = [
        {
            item: <i className="bi bi-person-add"></i>,
            title: "Thêm bạn"
        },
        {
            item: <i className="bi bi-people"></i>,
            title: "Tạo nhóm chat"
        }
    ];

    const handleClose = () => setShow(false);


    const showModal = (index) => {
        switch (index) {
            case 0:
                setShow(true);
                break;
        }
    }
    return (
        <div className="d-flex">
            <Search placeholder="Tìm kiếm" />
            <ButtonGroup buttons={buttons}
                className="btn-hover"
                hoverColor="#f0f0f0"
                width={40}
                height={40}
                showModal={showModal}
            />
            {/* Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button className="btn btn-primary" onClick={handleClose}>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Header;