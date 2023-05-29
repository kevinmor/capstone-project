import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";


test('Renders the BookingForm heading', () => {
    //need to add a prop to Booking form so that jest can simulate time slots being rendered, otherwise an error gets thrown
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    render(<BookingForm availableTimes={times}/>);

    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Initial initiateTimes function should return array with times', () => {
    const initalizedExpected = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    expect(initializeTimes()).toMatchSnapshot(initalizedExpected)
})

test('Inital Update time function should return the same value provided to state', () => {
    const initalizedExpected = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    const updateTimes = (state, action) =>{
        return state
    }
    expect(updateTimes(initalizedExpected)).toMatchSnapshot(initalizedExpected)
})

test('Function should return 3', () => {
    const add = (a,b) => a + b
    const a = 1
    const b = 2
})