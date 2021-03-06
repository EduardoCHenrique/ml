'use strict'

import axios from 'axios'
import ListProductEntity from 'src/business/entities/ListProductEntity.js'
import DetailProductEntity from 'src/business/entities/DetailProductEntity.js'


function createProduct({id, thumbnail, price, title}) {
  return new ListProductEntity({ 
    id: id,
    picture: thumbnail,
    price: price,
    title: title
  })
}

const ProductRepository =  {
  getProductsBySearch(search) {
    return axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`)
      .then(response => response.data.results.map(createProduct))
  },

  getProductById(id) {
    return axios.get(`https://api.mercadolibre.com/items/${id}`)
      .then(response => response.data )
  },

  getProductDescription(id) {
    return axios.get(`https://api.mercadolibre.com/items/${id}/description`)
      .then(response => response.data )
  },

  async getProductDetail(id) {
    const productData = await this.getProductById(id)
    const productDescription = await this.getProductDescription(id)
    
    return Promise.resolve(
      new DetailProductEntity({
        id: id,
        picture: productData.pictures[0].url,
        price: productData.price,
        title: productData.title,
        description: productDescription.plain_text,
        sold_quantity: productData.sold_quantity
      })
    )
  }

}

export default ProductRepository