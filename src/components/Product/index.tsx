import './index.scss';

interface ProductProps {
  img: string;
  name: string;
  description: string;
  currentPrice: string;
  originalPrice?: string;
  discount?: string;
  isNew?: boolean;
}

export function Product({
  img,
  name,
  description,
  currentPrice,
  originalPrice,
  discount,
  isNew,
}: ProductProps) {
  return (
    <div className='products'>
      <img src={img} alt={name} />
      {discount && <div className='badge discount'>{discount}</div>}
      {isNew && <div className='badge new'>New</div>}
      <div className='card-products'>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <div>
          <p>{currentPrice}</p>
          {originalPrice && <span>{originalPrice}</span>}
        </div>
      </div>
    </div>
  );
}
