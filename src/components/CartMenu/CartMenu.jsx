import React from 'react';
import './cartMenu.css';
import { calcTotalPrice } from '../utils';
import { Button } from '../Button';



export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
			{
			items.length > 0 ? items.map((game) => game.title) : 'Корзина пуста'
			}
		</div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)}</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};