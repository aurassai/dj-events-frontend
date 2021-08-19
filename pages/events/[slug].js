import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

const EventPage = ({ evt }) => {
    return (
        <Layout>
            <h1>{evt.name}</h1>
        </Layout>
    );
};

export default EventPage;

export const getStaticPaths = async () => {
    const res = await fetch(`${API_URL}/api/events`);
    const events = await res.json();
    const paths = events.map((evt) => ({ params: { slug: evt.slug } }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const res = await fetch(`${API_URL}/api/events/${slug}`);
    const events = await res.json();
    return {
        props: {
            evt: events[0],
        },
        revalidate: 1,
    };
};
