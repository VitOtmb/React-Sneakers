import { useState } from 'react';
import './card.scss';

const Card = ({ id, imageUrl, name, price, onBtnAdd }) => {
	const [isAdded, setIsAdded] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);

	const addToCart = () => {
		setIsAdded(isAdded !== true);
		onBtnAdd(id);
	};

	const addToFavorite = () => {
		setIsFavorite(isFavorite !== true);
	};

	return (
		<div className="card">
			<img
				src={!isFavorite ? './images/logo/favorite.png' : './images/logo/favorite-added.png'}
				alt="btn-add-favorite"
				className="favorite-sneakers d-flex align-center justify-center"
				onClick={addToFavorite}
			/>
			<img src={imageUrl} alt="sneakers-img" className="card__img" />
			<p className="card__info">{name}</p>
			<div className="price__block">
				<div className="price__block_value">
					<span className="price-text">Цена:</span>
					<span className="price">{price} руб.</span>
				</div>
				<img
					src={!isAdded ? './images/logo/btn-add.png' : './images/logo/btn-add-cheked.png'}
					alt="btn-add"
					className="btn-add-cart"
					onClick={addToCart}
				/>
			</div>
		</div>
	);
};

export default Card;
