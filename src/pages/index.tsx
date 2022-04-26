import { Navbar } from "../components/Navbar";
import { Slider } from "../components/Slider";
import { Footer } from "../components/Footer";
import { Products } from "../components/Products";
import { Categories } from "../components/Categories";
import { Newsletter } from "../components/Newsletter";
import { Announcement } from "../components/Announcement";

/* import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from "../store/Stock.store";
import { RootState } from "../store";
 */

import { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice';

export default function Home() {

  /*   const dispatch = useDispatch();
    const stock = useSelector((state: RootState) => state.stock); */

  // const count = useSelector((state: RootState) => state.counter.value)
  //const dispatch = useDispatch()

  //console.log("COUNT: ", stock.counter)

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />

      {/*       <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div> */}


      {/*     <button onClick={() => dispatch(increment())}>somar</button>
      COUNTER: {stock?.counter}
      <button onClick={() => dispatch(decrement())}>subtrair</button>

 */}


      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}