import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ prediction: "1" }),
    })
  );
});

test("renders textarea and predict button", () => {
  render(<App />);
  
  expect(screen.getByPlaceholderText(/enter text here/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /predict/i })).toBeInTheDocument();
});

test("allows typing into the textarea", () => {
  render(<App />);

  const textarea = screen.getByPlaceholderText(/enter text here/i);
  fireEvent.change(textarea, { target: { value: "Hello world" } });

  expect(textarea.value).toBe("Hello world");
});

test("renders spam message when prediction is 1", async () => {
  render(<App />);

  const textarea = screen.getByPlaceholderText(/enter text here/i);
  fireEvent.change(textarea, { target: { value: "Free money now!!!" } });

  const button = screen.getByRole("button", { name: /predict/i });
  fireEvent.click(button);

  await waitFor(() => {
    expect(screen.getByText(/spam/i)).toBeInTheDocument();
  });
});