import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';
//Importálja az Productinterfészt ./products.tsa cart.service.tsfájlba, és az osztályban CartServiceadjon meg egy itemstulajdonságot az aktuális termékek tömbjének a kosárban tárolásához.

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //bevásárló kosár tartalma
  //Határozza meg a tételek kosárba helyezésének, a kosár tételeinek visszaküldésének és a kosár tételeinek törlésének módszereit.
  
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }
  
  
}
