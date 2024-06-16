import React from 'react'

const ProductComponent = (props) => {
  return (
    <div>
      <p>Produto: <strong> {props.name} </strong> Valor: <strong> {props.price} </strong></p>
    </div>
  )
}

export default ProductComponent