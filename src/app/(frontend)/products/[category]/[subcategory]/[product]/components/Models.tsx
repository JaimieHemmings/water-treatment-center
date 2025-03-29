import React from 'react'
import { FaUsers } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";

interface Model {
  model: string
  description: string
  dimensions: string
  maxUsers: string
}

interface ProductData {
  models: {
    models: Model[]
  }
}

interface ModelsProps {
  productData: ProductData
}

const Models: React.FC<ModelsProps> = ({ productData }) => {
  return (
    <section className="w-full py-[2rem] bg-white text-textblue">
      <div className="container">
        <h3 className="text-xl font-semibold mb-4">Available Models:</h3>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productData.models.models.map((model, index) => (
          <div
            key={index}
            className="p-4 bg-antiflashwhite rounded-lg"
          >
            <h4 className="text-selectiveyellow text-lg font-semibold mb-2">
              {model.model}
            </h4>
            <p>
              <span className="text-selectiveyellow">
                <RxDimensions className="inline-block mr-1" />{' '}
                Dimensions:
              </span>{' '}
              {model.dimensions}
            </p>
            <p>
              <span className="text-selectiveyellow">
                <FaUsers className="inline-block mr-1" />{' '}
                Max Users:
              </span>{' '}
              {model.maxUsers}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Models