import React from 'react';

class Modal extends React.Component {
    onOverlayClose(e){
        if(e.target.id === 'modal') 
            this.props.closeModal();
    }
    
    render(){
        return (
            <div className="modal" id="modal" onClick={(e)=>this.onOverlayClose(e)}>
                <div className="modal-content" name="modal-content">
                <div className="modal-header">
                    <h2 className="close" onClick={this.props.closeModal}>&times;</h2>
                    <h2>{this.props.title}</h2>
                </div>
                <div className="modal-body">
                    {this.props.children}
                </div>
                </div>
            </div>
        );
    }
}

export default Modal 