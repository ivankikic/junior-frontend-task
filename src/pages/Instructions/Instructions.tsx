import { InstructionsContainer, InstructionsContent } from "./InstructionsStyles"

const Instructions = () => {
    return (
        <InstructionsContainer>
            <h1><b>Instructions</b></h1>
            <InstructionsContent>
                <h3><b>Data</b></h3>
                <ul>
                    <li><b>REST API</b> / <b>Octokit</b></li>
                    <li>Last <b>100</b> commits from <u><b><a target="_blank" href="https://github.com/vitejs/vite">Vitejs</a></b></u></li>
                    <li>Only one event with same date</li>
                </ul>
                <h3><b>Pages</b></h3>
                <ul>
                    <br /><h4><b>Home</b></h4>
                    <ul>
                        <li>All events in calendar</li>
                    </ul>
                    <br /><h4><b>Event</b></h4>
                    <ul>
                        <li>Event details</li>
                        <li>Edit event</li>
                        <li>New event</li>
                    </ul>
                    <br /><h4><b>Instructions</b></h4>
                    <ul>
                        <li>All app informations</li>
                    </ul>
                    <br /><h4><b>404</b></h4>
                    <ul>
                        <li>Not found page</li>
                    </ul>

                </ul>
                <h3><b>Routes</b></h3>
                <ul>
                    <h4><b>Header</b></h4>
                    <ul>
                        <li>Click on <b>Home</b> to see all events in Calendar</li>
                        <li>Click on <b>Instructions</b> to see all app informations</li>
                        <li>Click on <b>New event</b> to create new event</li>
                        <li>Click on <b>Reset data</b> to reset data on github commits only</li>
                    </ul>
                    <h4><b>Home</b></h4>
                    <ul>
                        <li>Click on any <b>event</b> to see event details</li>
                    </ul>
                    <br /><h4><b>Event details</b></h4>
                    <ul>
                        <li>Click on <b>Edit</b> to edit current event</li>
                        <li>Click on <b>Delete</b> to delete current event</li>
                    </ul>
                    <br /><h4><b>Edit event</b></h4>
                    <ul>
                        <li>Click on <b>Submit</b> to save changes</li>
                    </ul>
                    <br /><h4><b>New event</b></h4>
                    <ul>
                        <li>Click on <b>Submit</b> to save new event</li>
                    </ul>
                </ul>
                <h3><b>Packages</b></h3>
                <ul>
                    <li><b>@emotion/styled</b> - styled components</li>
                    <li><b>@fullcalendar</b> - calendar</li>
                    <li><b>@octokit</b> - fetching data</li>
                    <li><b>@types/react-bootstrap</b> - styling</li>
                    <li><b>axios</b> - fetching data</li>
                    <li><b>formik</b> - forms</li>
                    <li><b>yup</b> - form validations</li>
                    <li><b>react-datepicker</b> - date input</li>
                    <li><b>react-hot-toast</b> - change notifications</li>
                    <li><b>uuid</b> - unique ids</li>
                </ul>
                <h3><b>Dependencies</b></h3>
                <ul>
                    <li><b>vite</b></li>
                    <li><b>typescript</b></li>
                </ul>
            </InstructionsContent>
        </InstructionsContainer>
    )
}

export default Instructions