import { parseCookies } from "@/helpers/index";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
const DashboardPage = ({ events }) => {
    console.log(events);
    return (
        <Layout title="User Dashboard">
            <h1>DASHBOARD</h1>
        </Layout>
    );
};

export default DashboardPage;

export async function getServerSideProps({ req }) {
    const { token } = parseCookies(req);

    const res = await fetch(`${API_URL}/events/me`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const events = await res.json();

    return {
        props: {
            events,
        },
    };
}
