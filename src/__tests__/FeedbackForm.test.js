
import React, { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FeedbackForm from "../FeedbackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", async () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    const textArea = screen.getByLabelText(/Comments:/);
    const submitButton = screen.getByRole("button");

    await act(async () => {
      fireEvent.change(rangeInput, { target: { value: score } });
      fireEvent.change(textArea, { target: { value: comment } });
      fireEvent.click(submitButton);
    });

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", async () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    const submitButton = screen.getByRole("button");

    await act(async () => {
      fireEvent.change(rangeInput, { target: { value: score } });
      fireEvent.click(submitButton);
    });

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});
