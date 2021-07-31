import React from "react";
import "./Vaporizers.css";
import Title from "./Title";
import Products from "./Products";

function Vaporizers() {
  return (
    <div className="vaporizers">
      <div className="vaporizers__container">
        <Title title={"Vaporizers"} />
      </div>
      <div className="vaporizers__row">
        <Products
          id="18"
          title="Vaporesso Sky Solo Starter Kit"
          price={200}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0420/6156/2010/products/vaporesso-starter-kit-vaporesso-sky-solo-and-solo-plus-vape-pen_110x110@2x.jpg?v=1596143323"
        />
        <Products
          id="19"
          title="Voopoo Drag Nano Pod Kit"
          price={150}
          rating={4}
          image="https://cdn.shopify.com/s/files/1/0420/6156/2010/products/voopoo_drag_nano_pod_system_all_colors_110x110@2x.jpg?v=1597860535"
        />
      </div>
      <div className="vaporizers__row">
        <Products
          id="20"
          title="Puff Bar Disposable Vape"
          price={200}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0420/6156/2010/products/puff_bar_disposable_vape_hazetown_vapes_toronto_ontario_1_grande_3ae8f16c-6c04-488d-8fd7-a1bf0f9c762f_110x110@2x.jpg?v=1611312280"
        />
        <Products
          id="21"
          title="Vaporesso Aurora Play Pod System Kit"
          price={125}
          rating={3}
          image="https://cdn.shopify.com/s/files/1/0420/6156/2010/products/Vaporesso-Aurora-Play-Lighter-CBD-Pod-Kit-650mAh_005812c8ab9d_110x110@2x.jpg?v=1596483170"
        />
        <Products
          id="22"
          title="SMOK X-PRIV 225W & TFV12 Prince Starter Kit"
          price={100}
          rating={2}
          image="https://cdn.shopify.com/s/files/1/0420/6156/2010/products/smok_x-priv_kit_packaging_content-2_110x110@2x.jpg?v=1596142775"
        />
      </div>
      <div className="vaporizers__row">
        <Products
          id="23"
          title="Smok Mag 225W TC Starter Kit"
          price={150}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0420/6156/2010/products/smok_mag_225w_starter_kit_110x110@2x.jpg?v=1612357627"
        />
        <Products
          id="24"
          title="Smok Stick V8 Starter Kit"
          price={100}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0420/6156/2010/products/pimage_47895_110x110@2x.jpg?v=1621932062"
        />
      </div>
      <div className="vaporizers__row">
        <Products
          id="20"
          title="Vaporesso Orca Solo Starter Kit"
          price={200}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0420/6156/2010/products/vaporesso_orca_solo_aio_starter_kit_110x110@2x.jpg?v=1596485730"
        />
        <Products
          id="21"
          title="Smok Novo X 25W Pod System"
          price={125}
          rating={3}
          image="https://cdn.shopify.com/s/files/1/0420/6156/2010/products/smok_novo_x_25w_pod_system_-_blue_cobra_110x110@2x.jpg?v=1621933959"
        />
        <Products
          id="22"
          title="Smok Nord Pod KIt"
          price={100}
          rating={2}
          image="https://cdn.shopify.com/s/files/1/0420/6156/2010/products/smok-pod-system-smok-nord-pod-system-7662499528763_1800x1800_843bf945-55e9-4666-9342-6cfa2de4cf4b_110x110@2x.jpg?v=1596142054"
        />
      </div>
    </div>
  );
}

export default Vaporizers;
