import Sidebar from "../components/sidebar";

export default function Dashboard() {
    return (
        <div>
            <Sidebar />
            {/* Main content of the homepage */}
            <div className="p-4">
                {/* Title */}
                <h1 className="text-3xl font-bold mb-4"></h1>
                {/* Additional content */}
                <p></p>
            </div>
        </div>

    );
}
