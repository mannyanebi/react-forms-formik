import {render, screen, cleanup} from "@testing-library/react";
import Header from "../header";

test('should render header component', () => {
    render(<Header/>);
    const headerComponent = screen.getByTestId('top-header')
    expect(headerComponent).toBeInTheDocument();
    expect(headerComponent).toHaveTextContent("Hello World")
})