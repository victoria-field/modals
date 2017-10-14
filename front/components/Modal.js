import React from 'react';

const Modal = props => {
	return (
		<div className="modal">
			<h3>Modal</h3>
			<p>{props.modalInfo.text}</p>
			{props.index == 0 ? <button onClick={() => props.nextModal(1)}>Anxious</button> : ''}
		</div>
)};

export default Modal;
