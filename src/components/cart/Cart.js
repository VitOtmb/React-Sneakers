import './cart.scss';

const Cart = ({ showCart, cartItems }) => {
	return (
		<div className="layout-cart">
			<div className="cart">
				<h2 className="cart__title">Корзина</h2>
				<svg
					width="30px"
					height="30px"
					className="close"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					fill="#000"
					onClick={showCart}
				>
					<g data-name="Layer 2">
						<g data-name="close">
							<rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
							<path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
						</g>
					</g>
				</svg>

				<div className="cart__items">
					{cartItems.map((item) => (
						<div className="item" key={item.id}>
							<div className="wrp d-flex">
								<img src={item.imageUrl} alt="sneakers-img" className="item__img" />
								<div className="text">
									<span className="item__name">{item.name}</span>
									<span className="item__price">{item.price} руб.</span>
								</div>
							</div>

							<img src="./images/logo/delete.svg" alt="sneakers-delete" className="cart__btn" />
						</div>
					))}
				</div>

				<div className="total-block">
					<div className="d-flex justify-between mb-20">
						<span className="text">Итого:</span>
						<div className="line"></div>
						<span className="price">21 498 руб.</span>
					</div>
					<div className="d-flex justify-between mb-20">
						<span className="text">Налог 5%: </span>
						<div className="line-two"></div>
						<span className="price">1074 руб.</span>
					</div>
					<button className="button order_btn">
						Оформить заказ
						<svg
							width="16"
							height="14"
							viewBox="0 0 16 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 7H14.7143"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.71436 1L14.7144 7L8.71436 13"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
