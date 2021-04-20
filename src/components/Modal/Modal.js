import React from 'react';
import {CSSTransition} from "react-transition-group";
import './Modal.css';

const animationTiming = {
	enter: 400,
	exit: 1000,
};

const modal = (props) => {
	// CSSTransition позволяет использовать заранее подготовленные css классы,
	// в зависимости от состояния state transition, а не указывать их в массиве вручную.
	// Соответственно, он не использует внутри себя функцию, для этого надо задать props
	// classNames - он соединяет классы состояния с дефолтным классом (в данном случае,
	// с классом Modal)
	// Имена классов имеют 4 составляющих (см. документацию) и их надо задать в css

	{/*можно указать любые названия классов в объекте, где
						свойствами будут четко заданные состояния, а соответствовать
						им будут наши произвольные классы
						appear - это свойство добавляется для классов, если элемент рендерится
						всегда, а не по условию, нам он тут не нужен
						нужно написать classNames с объектом и убрать {/*classNames="fade-slide"*/}
  return (
			<CSSTransition
					in={props.show}
					timeout={animationTiming}
					mountOnEnter
					unmountOnExit
					classNames={{
						enter: '',
						enterActive: 'ModalOpen',
						exit: '',
						exitActive: 'ModalClosed',
					}}>
				{/*{state => {*/}
				{/*	const cssClasses = [*/}
				{/*			'Modal',*/}
				{/*			state === 'entering' ? 'ModalOpen' :*/}
				{/*			state === 'exiting' ? 'ModalClosed' : null*/}
				{/*	];*/}
				<div className="Modal">
					<h1>A Modal</h1>
					<button className="Button" onClick={props.closed}>Dismiss</button>
				</div>
			</CSSTransition>
  );
};

export default modal;