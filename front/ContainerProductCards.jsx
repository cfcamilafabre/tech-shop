import ProductCard from "../front/ProductCard"
import styled from "styled-components"


const StyledContainerProductCards = styled.div `
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 20px;
margin: 20px;
`

const ContainerProductCards = () => {

    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        try{
            const response = await axios.get("...");
            setCards(response.data.cards);
        } catch (error) {
            console.error('Error al obtener los datos', error);
        }
    }

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <>
        <div>
            {cards.map((card) => {
                return (
                    <ProductCard
                    key={card.id}
                    img={card.img}
                    name={card.img}
                    price={card.price}
                    />
                )
            })}
        </div>
        </>
    )
}

export default ContainerProductCards;