import React from 'react';
import Link from 'next/link';

export default function ProductCard({permalink, image, name, description, price}) {
  return (
    <Link href="/product/[permalink]" as={`/product/${permalink}`}>
      <a className="mb-5 d-block font-color-black cursor-pointer">
        <div
          className="mb-3"
          style={{
            paddingBottom: '125%',
            background: `url("${image}") center center/cover`,
          }}
        />
        <div className="violet-item">
          <div className="another-div">
            <p className="item-name">{name}</p>
            {/*<p>{description}</p>*/}
            <p className="item-price">{price}</p>{' '}
          </div>
          <div className="add-button"> Add + </div>
        </div>
      </a>
    </Link>
  );
}
