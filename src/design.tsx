"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ShoppingCart, Menu, Check, Shield, Zap, Smartphone, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SpotmindersPage() {
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedBundle, setSelectedBundle] = useState("bundle3")
  const [quantity, setQuantity] = useState(1)

  const colors = [
    { name: "black", color: "bg-black", label: "Black" },
    { name: "pink", color: "bg-pink-400", label: "Pink" },
    { name: "white", color: "bg-white border-2 border-gray-200", label: "White" },
    { name: "blue", color: "bg-blue-600", label: "Blue" },
    { name: "green", color: "bg-green-600", label: "Green" },
  ]

  const bundles = [
    {
      id: "bundle3",
      title: "Buy 3 Get 2 FREE",
      subtitle: "Most Popular",
      price: "$132.00",
      originalPrice: "$220.00",
      savings: "Save $88",
      cards: "5 Cards",
      popular: true,
    },
    {
      id: "bundle2",
      title: "Buy 2 Get 1 FREE",
      subtitle: "Great Value",
      price: "$88.00",
      originalPrice: "$132.00",
      savings: "Save $44",
      cards: "3 Cards",
      popular: false,
    },
    {
      id: "single",
      title: "1 Card",
      subtitle: "Single Purchase",
      price: "$44.00",
      originalPrice: null,
      savings: null,
      cards: "1 Card",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <div className="bg-[#1e4570] from-emerald-600 to-teal-600 text-white text-center py-3 px-4">
        <div className="flex items-center  justify-center gap-2 text-sm font-medium">
          <span className="animate-pulse">🔥</span>
          <span>LIMITED TIME: BUY 2 GET 1 FREE</span>
          <span className="animate-pulse">🔥</span>
        </div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <Menu className="w-6 h-6" />
        <div className="text-xl font-bold tracking-wider">SPOTMINDERS.</div>
        <ShoppingCart className="w-6 h-6" />
      </header>

      {/* Hero Section */}
      <section className="px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-2">"Spotminders challenges Apple's AirTag"</h1>
        <p className="text-gray-600 mb-6 italic">Forbes</p>

        <div className="relative mx-auto max-w-sm mb-8">
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="iPhone with Spotminders tracking card"
            width={300}
            height={400}
            className="mx-auto"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-black text-white px-3 py-1">
              <Image
                src="/placeholder.svg?height=16&width=16"
                alt="Apple Find My"
                width={16}
                height={16}
                className="mr-2"
              />
              Apple Find My
            </Badge>
          </div>
        </div>

        {/* Product Gallery */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt={`Product view ${i}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-green-500 text-green-500" />
            ))}
          </div>
          <span className="font-semibold">4.8/5</span>
          <span className="text-gray-600">Excellent</span>
        </div>

        <h2 className="text-xl font-bold mb-2">SPOTMINDERS. Tracking card</h2>
        <p className="text-gray-600 mb-4">Trusted by 50,000+ people</p>
      </div>

      {/* Enhanced USPs Section */}
      <section className="px-4 mb-8">
        <div className="grid gap-6">
          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
            <div className="bg-blue-100 p-2 rounded-full">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">WIRELESS CHARGING & RECHARGEABLE</h3>
              <p className="text-sm text-gray-600">Never worry about battery life - charges wirelessly</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
            <div className="bg-purple-100 p-2 rounded-full">
              <Smartphone className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">ULTRA-SLIM DESIGN AND THE LATEST IN TECHNOLOGY</h3>
              <p className="text-sm text-gray-600">Fits perfectly in any wallet with cutting-edge tech</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
            <div className="bg-green-100 p-2 rounded-full">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">EXPERIENCE EFFORTLESS TRACKING</h3>
              <p className="text-sm text-gray-600">Apple Find My network for precise location tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Selection */}
      <section className="px-4 mb-8">
        <h3 className="text-lg font-semibold mb-4 text-center">Bundle & Save:</h3>
        <div className="space-y-3">
          {bundles.map((bundle) => (
            <Card
              key={bundle.id}
              className={`cursor-pointer transition-all ${
                selectedBundle === bundle.id ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"
              } ${bundle.popular ? "border-2 border-emerald-500" : ""}`}
              onClick={() => setSelectedBundle(bundle.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{bundle.title}</h4>
                      {bundle.popular && <Badge className="bg-emerald-500 text-white text-xs">{bundle.subtitle}</Badge>}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">{bundle.price}</span>
                      {bundle.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{bundle.originalPrice}</span>
                      )}
                      {bundle.savings && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {bundle.savings}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{bundle.cards}</p>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      selectedBundle === bundle.id ? "bg-blue-500 border-blue-500" : "border-gray-300"
                    }`}
                  >
                    {selectedBundle === bundle.id && <Check className="w-2 h-2 text-white m-0.5" />}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Color Selection */}
      <section className="px-4 mb-6">
        <h3 className="text-lg font-semibold mb-3">Color:</h3>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-12 h-12 rounded-full ${color.color} ${
                selectedColor === color.name ? "ring-2 ring-blue-500 ring-offset-2" : ""
              }`}
              aria-label={color.label}
            />
          ))}
        </div>
      </section>

      {/* Quantity & Add to Cart */}
      <section className="px-4 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center border rounded-lg">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 hover:bg-gray-100">
              -
            </button>
            <span className="px-4 py-2 border-x">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-gray-100">
              +
            </button>
          </div>
        </div>

        <Button className="w-full bg-black text-white py-4 text-lg font-semibold mb-4">ADD TO CART</Button>

        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-green-600" />
            <span>FREE shipping & 30-day returns</span>
          </div>

          <div className="flex justify-center gap-2 text-xs text-gray-500">
            <Image src="/placeholder.svg?height=20&width=30" alt="Visa" width={30} height={20} />
            <Image src="/placeholder.svg?height=20&width=30" alt="Mastercard" width={30} height={20} />
            <Image src="/placeholder.svg?height=20&width=30" alt="PayPal" width={30} height={20} />
            <Image src="/placeholder.svg?height=20&width=30" alt="Apple Pay" width={30} height={20} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 mb-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How does the tracking work?</AccordionTrigger>
            <AccordionContent>
              Our tracking card uses Apple's Find My network to provide precise location tracking. Simply add it to your
              Find My app and track your belongings anywhere.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How long does the battery last?</AccordionTrigger>
            <AccordionContent>
              The rechargeable battery lasts up to 5 months on a single charge and can be wirelessly charged using any
              Qi-compatible charger.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it waterproof?</AccordionTrigger>
            <AccordionContent>
              Yes, our tracking card is IP67 rated, making it resistant to water and dust for everyday use.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Guarantee Section */}
      <section className="px-4 mb-8 text-center">
        <div className="bg-gray-50 rounded-xl p-6">
          <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-lg font-semibold mb-2">100 Days Risk-Free Trial</h3>
          <p className="text-sm text-gray-600 mb-4">
            We stand behind the quality of our Tracking Card with comprehensive warranty coverage and hassle-free
            returns.
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-green-500 text-green-500" />
              ))}
            </div>
            <span className="text-sm font-medium">Excellent</span>
            <span className="text-sm text-gray-600">Trustpilot</span>
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="px-4 mb-8">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold mb-4">As Featured In</h3>
          <div className="flex justify-center items-center gap-6 opacity-60">
            <span className="font-bold text-lg">Forbes</span>
            <span className="font-bold text-lg">CBS</span>
            <span className="font-bold text-lg">HYPEBEAST</span>
          </div>
        </div>
        <p className="text-center text-gray-600 font-medium">Loved by 50,000+ others</p>
      </section>

      {/* Video Testimonials */}
      <section className="px-4 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full p-3" />
            </div>
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Customer testimonial"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full p-3" />
            </div>
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Customer testimonial"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-50">
        <div className="text-center text-sm text-gray-600">
          <p className="mb-2">© 2024 Spotminders. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
