import Header from '../header/Header';
// import Slider from '../slider/Slider';
import Catalog from '../catalog/Catalog';
import Cart from '../cart/Cart';

import './app.scss';
import { useState, useEffect } from 'react';
import GetData from '../../services/GetData';

function App() {
	const [sneakers, setSneakers] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const showCart = () => {
		setCartOpened(true);
	};

	// Запрос на сервер и запись в стейт
	useEffect(() => {
		GetData('https://62f561fa535c0c50e76f259d.mockapi.io/sneakers').then((json) =>
			setSneakers([...json])
		);
	}, []);

	return (
		<div className="wrapper">
			<Header showCart={showCart} />
			<Catalog sneakers={sneakers} setCartItems={setCartItems} cartItems={cartItems} />
			{cartOpened ? <Cart showCart={() => setCartOpened(false)} cartItems={cartItems} /> : null}
		</div>
	);
}

export default App;
