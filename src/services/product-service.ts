import axios from 'axios'
import type { Product, ProductSection, ProductCategory } from '../types/product'
import { categoryTitles } from '../types/product'

const PRODUCTS_URL = 'https://raw.githubusercontent.com/saddamakhtar88/online-store-app/main/docs/http/products.json'

export const productService = {
  // Cache for memoization
  _productsCache: null as Product[] | null,

  // Fetch all products (memoized)
  async getAllProducts(): Promise<Product[]> {
    if (this._productsCache) {
      console.log('Using cached products')
      return this._productsCache
    }

    try {
      console.log('Fetching products from API')
      const response = await axios.get<Product[]>(PRODUCTS_URL)
      this._productsCache = response.data
      return this._productsCache
    } catch (error) {
      console.error('Failed to fetch products:', error)
      throw new Error('Failed to load products')
    }
  },

  // Clear cache
  clearCache() {
    this._productsCache = null
  },

  // Get product by ID
  async getProductById(id: string): Promise<Product | null> {
    const products = await this.getAllProducts()
    return products.find(p => p.id === id) || null
  },

  // Group products by category
  async getProductSections(): Promise<ProductSection[]> {
    try {
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
    } catch (error) {
      console.error('Failed to get product sections:', error)
      throw error
    }
  }
}