'use strict';

window.addEventListener('DOMContentLoaded', () => {
	const products = document.querySelectorAll('.product'),
		buttons = document.querySelectorAll('button'),
		open = document.querySelector('.open');
	console.log(products)

	function createCart() {
		const cart = document.createElement('div'),
			field = document.createElement('div'),
			heading = document.createElement('h2'),
			close = document.createElement('button');

		cart.classList.add('cart');
		field.classList.add('cart-field');
		close.classList.add('close');

		heading.textContent = 'В вашей корзине:';
		close.textContent = "Закрыть";

		document.body.appendChild(cart);
		cart.appendChild(heading);
		cart.appendChild(close);
		cart.appendChild(field);
	}

	createCart();

	const field = document.querySelector('.cart-field'),
		cart = document.querySelector('.cart'),
		close = document.querySelector('.close');

	function openCart() {
		cart.style.cssText = `
			opacity: 1;
			visibility: visible;
		`;
	}

	function closeCart() {
		cart.style.cssText = `
			opacity: 0;
			visibility: hidden;
		`;
	}

	window.addEventListener('click', (e) => {
		return e.target === open ?
			openCart() :
			e.target === close ?
				closeCart() :
				e.target === cart ?
					closeCart() : null;
	});

	buttons.forEach((item, i) => {
		item.addEventListener('click', () => {
			const item = products[i].cloneNode(true),
				btn = item.querySelector('button');

			products[i].style.opacity = 0;

			setTimeout(() => {
				btn.remove();
				field.appendChild(item);
				products[i].remove();
			}, 250);
		});
	});
});