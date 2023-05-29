import { render, screen } from "@testing-library/react";
import { fetchAPI, sub } from "./api/api";

//!!! Update the initial tests to use mock functions!

test("Array returned by initalizedTimes should be > 0", () => {
    const initializeTimes = () => fetchAPI(new Date())
    expect(initializeTimes().length).toBeGreaterThan(0)
})

test("Test to see that times are produced when date is entered into updateTimes", () =>{
    const updateTimes = (state, date) =>{
        state = fetchAPI(new Date(date))
        return state
    }

    const testState = fetchAPI(new Date("05-30-2023"))

    expect(updateTimes(testState, "06-01-2023").length).toBeGreaterThan(0)
})