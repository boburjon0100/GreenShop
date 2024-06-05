import "./Shop.scss"
import MakeUp from '../../Component/MakeUp/MakeUp'
import ProductDescription from "../../Component/ProductDescription/ProductDescription"
import Slider from "../../Component/Slider/Slider"
const Shop = () => {
  return (
    <div className='shop'>
            <MakeUp/>
      <ProductDescription/>
      <Slider/>
    </div>
  )
}

export default Shop