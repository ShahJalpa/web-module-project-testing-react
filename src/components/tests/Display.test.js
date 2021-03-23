import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from '../Display';
import Show from '../Show';
import { fetchShow as mockFetchShow }from '../../api/fetchShow';

jest.mock('../../api/fetchShow')

test("Display component renders without any passed in props", () => {
    render(<Display />);
})

const testShow = {
    name: "Stranger Things",
    summary: "something",
    seasons: [
        {id: 0, name: "Season 1", episodes: []},
        {id: 1, name: "Season 2", episodes: []},
        {id: 2, name: "Season 3", episodes: []},
        {id: 3, name: "Season 4", episodes: []}
    ]
}

test("fetch button is pressed, the show component will display", async() => {
    render(<Display />);
    //mockFetchShow.mockResolvedValueOnce(testShow);

    // const button = screen.getByRole('button')
    // userEvent.click(button);

    // const showComponent = await screen.findByTestId("show-container");
    // expect(showComponent).toBeInTheDocument();
})

test("when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data", async () => {
    render (<Display />)
    mockFetchShow.mockResolvedValueOnce(testShow)
})













///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.