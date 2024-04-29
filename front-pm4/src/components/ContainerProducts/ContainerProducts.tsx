// components
import { ProductCard } from '../ProductCard/ProductCard'

//styles
import styles from './ContainerProducts.module.css'

const ContainerProductCards = () => {

    const products = [
        {
            "id": 1,
            "name": "iPhone 11",
            "description": "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
            "price": 699,
            "stock": 10,
            "image": "https://www.apple.com/v/iphone-11/a/images/meta/og__f2j3dwkzna2u.png",
            "categoryId": 1
        },
        {
            "id": 2,
            "name": "MacBook Air",
            "description": "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
            "price": 999,
            "stock": 10,
            "image": "https://www.apple.com/v/macbook-air/a/images/meta/og__d5k62k8b4qka.png",
            "categoryId": 2
        },
        {
            "id": 3,
            "name": "iPad Pro",
            "description": "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
            "price": 799,
            "stock": 10,
            "image": "https://www.apple.com/v/ipad-pro/a/images/meta/og__d8m6x7smkntm.png",
            "categoryId": 3
        },
        {
            "id": 4,
            "name": "Apple Watch Series 6",
            "description": "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
            "price": 399,
            "stock": 10,
            "image": "https://www.apple.com/v/apple-watch-series-6/a/images/meta/og__c1zv8c8n7q06.png",
            "categoryId": 4
        },
        {
            "id": 5,
            "name": "AirPods Pro",
            "description": "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
            "price": 249,
            "stock": 10,
            "image": "https://www.apple.com/v/airpods-pro/a/images/meta/og__c1zv8c8n7q06.png",
            "categoryId": 5
        },
        {
            "id": 6,
            "name": "HomePod mini",
            "description": "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
            "price": 99,
            "stock": 10,
            "image": "https://www.apple.com/v/homepod-mini/a/images/meta/og__d5k62k8b4qka.png",
            "categoryId": 6
        }
    ]

    return (
        <div className={styles.containerCards} >
            {products.map((card) => {
                return (
                    <ProductCard
                    key={card.id}
                    image={card.image}
                    name={card.name}
                    price={card.price}
                    />
                )
            })}
        </div>
    )
}

export default ContainerProductCards;