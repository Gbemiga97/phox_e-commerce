import { useOutletContext } from "react-router-dom"


const Description = () => {

  const [product] = useOutletContext()

  return (
    <div className="desc__container">
      <h4>Description</h4>
      <p>{product.description}</p>
    </div>
  )
}

export default Description