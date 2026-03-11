'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  ShoppingCart, Search, Plus, Star, Heart, Truck, 
  Shield, CreditCard, Package, Store, Filter, Grid,
  List, MapPin, Clock, ChevronRight, DollarSign
} from 'lucide-react'

export default function StoreModule() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'home', label: 'Home & Garden' },
    { id: 'sports', label: 'Sports' },
    { id: 'books', label: 'Books' },
  ]

  const vendors = [
    { id: 1, name: 'TechStore Pro', avatar: '/images/profiles/male-profile.png', rating: 4.8, products: 156 },
    { id: 2, name: 'Fashion Hub', avatar: '/images/profiles/female-profile.png', rating: 4.9, products: 234 },
    { id: 3, name: 'Home Essentials', avatar: '/images/profiles/male-profile.png', rating: 4.7, products: 89 },
  ]

  const products = [
    {
      id: 1,
      name: 'Professional Wireless Headphones',
      price: 299.99,
      originalPrice: 399.99,
      image: '/images/products/headphones.png',
      vendor: vendors[0],
      rating: 4.8,
      reviews: 256,
      category: 'electronics',
      inStock: true,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Smart Watch Fitness Tracker',
      price: 199.99,
      originalPrice: 249.99,
      image: '/images/products/smartwatch.png',
      vendor: vendors[0],
      rating: 4.7,
      reviews: 189,
      category: 'electronics',
      inStock: true,
      badge: 'New'
    },
    {
      id: 3,
      name: 'Premium Leather Backpack',
      price: 149.99,
      originalPrice: null,
      image: '/images/listings/bicycle.png',
      vendor: vendors[1],
      rating: 4.9,
      reviews: 124,
      category: 'fashion',
      inStock: true,
      badge: null
    },
    {
      id: 4,
      name: 'Wireless Gaming Mouse',
      price: 79.99,
      originalPrice: 99.99,
      image: '/images/games/arcade-game.png',
      vendor: vendors[0],
      rating: 4.6,
      reviews: 312,
      category: 'electronics',
      inStock: false,
      badge: 'Hot Deal'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative rounded-xl overflow-hidden">
        <img 
          src="/images/banners/store-banner.png" 
          alt="Store Banner" 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">CysecBook Store</h1>
            <p className="text-white/80">Multi-vendor marketplace with amazing deals</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 shrink-0 space-y-4">
          {/* Categories */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Vendors */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Store className="h-4 w-4" />
                Top Vendors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {vendors.map((vendor) => (
                <div key={vendor.id} className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={vendor.avatar} />
                    <AvatarFallback>{vendor.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{vendor.name}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {vendor.rating} • {vendor.products} products
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Filters */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Price Range</Label>
                <div className="flex gap-2">
                  <form action="/api/store/filter" method="GET" className="flex gap-2 w-full">
                    <Input name="minPrice" type="number" placeholder="Min" className="w-full" />
                    <Input name="maxPrice" type="number" placeholder="Max" className="w-full" />
                  </form>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Rating</Label>
                <Select name="rating">
                  <SelectTrigger>
                    <SelectValue placeholder="Any rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4">4+ Stars</SelectItem>
                    <SelectItem value="3">3+ Stars</SelectItem>
                    <SelectItem value="2">2+ Stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4">
          {/* Search and View Controls */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <form action="/api/store/search" method="GET" className="w-full">
                <Input
                  name="q"
                  type="text"
                  placeholder="Search products..."
                  className="pl-10"
                />
              </form>
            </div>
            <div className="flex border rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> Sell Product
            </Button>
          </div>

          {/* Products Grid */}
          <div className={viewMode === 'grid' ? 'grid gap-4 md:grid-cols-2 lg:grid-cols-3' : 'space-y-4'}>
            {products.map((product) => (
              <Card key={product.id} className="card-hover overflow-hidden">
                {product.badge && (
                  <div className="absolute top-2 left-2 z-10">
                    <Badge className="bg-primary">{product.badge}</Badge>
                  </div>
                )}
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={product.vendor.avatar} />
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{product.vendor.name}</span>
                  </div>
                  <CardTitle className="text-base leading-tight hover:text-primary cursor-pointer">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  {!product.inStock && (
                    <Badge variant="destructive" className="mt-2">Out of Stock</Badge>
                  )}
                </CardContent>
                <Separator />
                <CardFooter className="py-2">
                  <form action="/api/cart/add" method="POST" className="flex gap-2 w-full">
                    <input type="hidden" name="productId" value={product.id} />
                    <input type="hidden" name="quantity" value="1" />
                    <Button className="flex-1 gap-2" disabled={!product.inStock}>
                      <ShoppingCart className="h-4 w-4" /> Add to Cart
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Checkout Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Quick Checkout
              </CardTitle>
              <CardDescription>Complete your purchase securely</CardDescription>
            </CardHeader>
            <CardContent>
              <form action="/api/store/checkout" method="POST" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkoutName">Full Name</Label>
                    <Input id="checkoutName" name="fullName" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkoutEmail">Email</Label>
                    <Input id="checkoutEmail" name="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkoutAddress">Shipping Address</Label>
                  <Input id="checkoutAddress" name="address" placeholder="123 Main St, City, Country" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor="cardExpiry">Expiry</Label>
                      <Input id="cardExpiry" name="cardExpiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardCVV">CVV</Label>
                      <Input id="cardCVV" name="cardCVV" type="password" placeholder="***" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-green-500" /> Secure Payment
                  </span>
                  <span className="flex items-center gap-1">
                    <Truck className="h-4 w-4" /> Free Shipping
                  </span>
                </div>
                <Button type="submit" className="w-full">Place Order</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
