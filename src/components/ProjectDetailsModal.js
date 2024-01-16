import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

class ProjectDetailsModal extends Component {
    render() {
        if (this.props.data) {
            var title = this.props.data.title;
            var description = this.props.data.description;
        }
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal-inside"
            >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
                <div className="col-md-12">
                    <div className="col-md-8 mx-auto" style={{paddingBottom: "5px"}}>
                        <img
                            src={this.props.data.image}
                            alt="projectImages"
                            width="100%"
                            style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                        />
                    </div>
                    <div className="col-md-10 mx-auto">
                        <h3 style={{padding: "5px 5px 0 5px"}}>
                            {title}
                        </h3>
                        <p className="modal-description">{description}</p>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default ProjectDetailsModal;
