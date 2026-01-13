import axios from 'axios'
import type { Product, ProductSection, ProductCategory } from '../types/product'
import { categoryTitles } from '../types/product'

const PRODUCTS_URL = 'https://raw.githubusercontent.com/saddamakhtar88/online-store-app/main/docs/http/products.json'

export const productService = {
  // Fetch all products
  async getAllProducts(): Promise<Product[]> {
    const response = await axios.get<Product[]>(PRODUCTS_URL)
    return response.data
  },

  // Get product by ID
  async getProductById(id: string): Promise<Product | null> {
    const products = await this.getAllProducts()
    return products.find(p => p.id === id) || null
  },

  // Group products by category
  async getProductSections(): Promise<ProductSection[]> {
    const products = await this.getAllProducts()
    const sections: ProductSection[] = []
    const productsByCategory: Record<ProductCategory, Product[]> = {} as any

    // Group products by their category
    for (const product of products) {
      if (!productsByCategory[product.category]) {
        productsByCategory[product.category] = []
      }
      productsByCategory[product.category].push(product)
    }

    // Create sections for each category
    for (const category in productsByCategory) {
      const categoryKey = category as ProductCategory
      sections.push({
        title: categoryTitles[categoryKey],
        products: productsByCategory[categoryKey]
      })
    }

    return sections
  }
}