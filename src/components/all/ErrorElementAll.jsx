import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorElementAll() {
    const error = useRouteError();
    const navigate = useNavigate();

    useEffect(() => {
        if (
            error?.internal &&
            error?.status === 404 &&
            error?.data.includes("Error: No route matches URL")
        ) {
            navigate("/");
            return;
        }
    }, []);

    return (
        <div className="w-full h-screen font-quicksand bg-slate-200 flex justify-center items-center flex-col gap-y-7">
            <h1 className="font-bold text-4xl ">SOMETHING WENT WRONG</h1>
            <a href="/" className="text-blue-500 font-semibold">
                Back To Homepage
            </a>
        </div>
    );
}
