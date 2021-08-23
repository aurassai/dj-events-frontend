import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";

const EventsPage = ({ events }) => {
    return (
        <Layout>
            <h1>Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}
            {events.map((evt) => (
                <EventItem key={evt.id} evt={evt} />
            ))}
        </Layout>
    );
};

export default EventsPage;

export const getStaticProps = async () => {
    const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
    const events = await res.json();

    return {
        props: { events },
        revalidate: 10,
    };
};
