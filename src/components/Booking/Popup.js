import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import '../../styles/Book.css';

export class Popup extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Modal
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Body>
					<div className="Msg">
						<h2>Thank You For Your Submission</h2>
						<h5>Check your profile page for more information</h5>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<button className="Button-Close" onClick={this.props.onHide}>
						Close
					</button>
				</Modal.Footer>
			</Modal>
		);
	}
}
