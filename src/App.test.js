import { useState, useReducer } from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import BookingForm from "./components/BookingForm"

const availableTimes  = ["18:00", "19:00", "20:00", "21:00"]


describe("Reservation Form - attributes", () => {
    test("required form fields contain the appropriate attributes", () => {
        render(<BookingForm  availableTimes={availableTimes}/>)
        const dateSelect = screen.getByLabelText("Reservation Date *:")
        expect(dateSelect).toHaveAttribute("required")

        const timeSelect = screen.getByLabelText("Time *:")
        expect(timeSelect).toHaveAttribute("required")

        const guestsSelect = screen.getByLabelText("Number of guests (1-10) *:")
        expect(guestsSelect).toHaveAttribute("required")
        expect(guestsSelect).toHaveAttribute("min")
        expect(guestsSelect).toHaveAttribute("max")

        const occasionSelect = screen.getByLabelText("Occasion *:")
        expect(occasionSelect).toHaveAttribute("required")

        const submitButton = screen.getByRole("button")
        expect(submitButton).toHaveAttribute("disabled")

    })
})

describe("Reservation Form - validation functionality test", () => {
    test("submit invalid form - passes if invalid field(s)", () => {
        const handleSubmit = jest.fn()
        const dispatch = jest.fn()
        render(<BookingForm availableTimes={availableTimes}  dispatch={dispatch} submit={handleSubmit}/>)

        const dateSelect = screen.getByLabelText("Reservation Date *:")
        fireEvent.change(dateSelect, {target: {value: "2023-06-29"}})

        const timeSelect = screen.getByLabelText("Time *:")
        fireEvent.change(timeSelect, {target: {value: "18:00"}})

        //guest value is set to 11, meaning no submission allowed
        const guestsSelect = screen.getByLabelText("Number of guests (1-10) *:")
        fireEvent.change(guestsSelect, {target: {value: "11"}})

        const occasionSelect = screen.getByLabelText("Occasion *:")
        fireEvent.change(occasionSelect, {target: {value: "Birthday"}})

        const submitButton = screen.getByRole("button")
        fireEvent.click(submitButton)

        //checks that submit button is still disabled and submit function not called
        expect(handleSubmit).not.toHaveBeenCalled()
        expect(submitButton).toHaveAttribute("disabled")
    }),
    test("submit valid form - passes only if valid fields", () => {
        const handleSubmit = jest.fn()
        const dispatch = jest.fn()
        render(<BookingForm availableTimes={availableTimes}  dispatch={dispatch} submit={handleSubmit}/>)

        const dateSelect = screen.getByLabelText("Reservation Date *:")
        fireEvent.change(dateSelect, {target: {value: "2023-06-29"}})

        const timeSelect = screen.getByLabelText("Time *:")
        fireEvent.change(timeSelect, {target: {value: "18:00"}})

        const guestsSelect = screen.getByLabelText("Number of guests (1-10) *:")
        fireEvent.change(guestsSelect, {target: {value: "5"}})

        const occasionSelect = screen.getByLabelText("Occasion *:")
        fireEvent.change(occasionSelect, {target: {value: "Birthday"}})

        const submitButton = screen.getByRole("button")
        fireEvent.click(submitButton)

        expect(handleSubmit).toHaveBeenCalled()
        expect(submitButton).not.toHaveAttribute("disabled")
    })
})


