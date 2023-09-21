import { useLoaderData, useParams } from "react-router-dom";
import Allbycat from "../allbycat/Allbycat";
import PropTypes from 'prop-types'

const Bycategory = () => {
    const { meals } = useLoaderData();
    const { Cname } = useParams();
    return (
        <div className="">
            <h1 className=" text-6xl text-center pt-[100px]">All {Cname} Items</h1><br />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:grid-cols-3 place-items-center"> {
                meals.map(item => <Allbycat key={item.idMeal} item={item} Cname={Cname} ></Allbycat>)
            }
            </div>


        </div>
    );
};

export default Bycategory;
Bycategory.propTypes = {
    handleCart: PropTypes.func
}