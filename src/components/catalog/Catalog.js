import { useState } from 'react';
import 'macro-css';
import Search from '../search/Search';
import Card from '../card/Card';

import './catalog.scss';

const Catalog = ({ sneakers, cartItems, setCartItems }) => {
	// Поиск
	const [inputText, setInputText] = useState('');
	const onChangeInput = (e) => {
		setInputText(e.target.value);
	};

	return (
		<div className="catalog">
			<div className="d-flex justify-between">
				<h3 className="catalog__title">
					{inputText ? `Поиск по каталогу: ${inputText}` : 'Все кроссовки'}
				</h3>
				<Search onChangeInput={onChangeInput} />
			</div>
			<div className="d-flex flex-wrap">
				{sneakers.map((sneaker) => (
					<Card
						id={sneaker.id}
						key={sneaker.id}
						imageUrl={sneaker.imageUrl}
						name={sneaker.name}
						price={sneaker.price}
						onBtnAdd={() => setCartItems(() => [...cartItems, sneaker])}
					/>
				))}
			</div>
		</div>
	);
};

export default Catalog;
