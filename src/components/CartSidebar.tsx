import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useCart } from '@/hooks/use-cart';

const CartSidebar = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotalItems, getTotalPrice } = useCart();
  
  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-rubik">
            <Icon name="ShoppingCart" size={20} />
            Корзина ({totalItems})
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full mt-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-coral to-mint rounded-full flex items-center justify-center mb-4">
                <Icon name="ShoppingCart" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Корзина пуста</h3>
              <p className="text-gray-600 mb-4">Добавьте товары для оформления заказа</p>
              <Button onClick={closeCart} className="bg-gradient-to-r from-coral to-mint text-white">
                Продолжить покупки
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-auto space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.category}</p>
                      <p className="font-bold text-coral">{item.price}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center border rounded">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Icon name="Minus" size={12} />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Icon name="Plus" size={12} />
                        </Button>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 h-8 w-8 p-0"
                      >
                        <Icon name="Trash2" size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              {/* Cart Summary */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">Итого:</span>
                  <span className="font-bold text-2xl text-coral">{totalPrice}₽</span>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-coral to-mint text-white hover:scale-105 transition-transform"
                  >
                    <Icon name="CreditCard" className="mr-2" size={20} />
                    Оформить заказ
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full"
                    onClick={closeCart}
                  >
                    Продолжить покупки
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;