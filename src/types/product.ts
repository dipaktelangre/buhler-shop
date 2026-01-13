// Product categories
export type ProductCategory = 'machine_roller' | 'machine_sorter' | 'machine_dryer' | 'machine_die_casting'

// Category display names
export const categoryTitles: Record<ProductCategory, string> = {
  machine_roller: 'Rollers',
  machine_sorter: 'Optical Sorters',
  machine_dryer: 'Dryers',
  machine_die_casting: 'Die Casting Machines'
}

// Product model interface
export interface Product {
  id: string
  name: string
  category: ProductCategory
  price: number
  imageUrl: string
}

// Product section interface for grouping products
export interface ProductSection {
  title: string
  products: Product[]
}