import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../card/Card.scss";

const Card = () => {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		axios("https://api.tvmaze.com/shows").then((res) => setCards(res.data));
	}, []);
	console.log(cards);
	return (
		<>
			{cards.map((card) => {
				return (
					<li className="card" key={card.id} id={card.id}>
						<img src={card.image.medium} alt="card" width={300} height={400} />
						<h2 title={card.summary} className="card__name">
							{card.name}
						</h2>
						<span className="card__rating">Rating:{card.rating.average}</span>
					</li>
				);
			})}
		</>
	);
};

export default Card;
