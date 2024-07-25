import './index.scss';

interface RangeTypeProp {
  img: string;
  title: string;
}

export function RangeType({img, title}: RangeTypeProp) {
  return (
    <div className='rangeType'>
      <img src={img} alt="" />
      <h3>{title}</h3>
    </div>
  )
}